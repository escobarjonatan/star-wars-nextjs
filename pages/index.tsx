import type { NextPage, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { useEffect, useState, MouseEvent } from "react";
import { FilmDetails, Vehicles, Footer } from "../components";
import { fetchAllFilms, fetchAllVehicles } from "../utils";

const Home = ({
  allVehicles = [],
  allFilms = [],
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [currentFilm, setCurrentFilm] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const sessionCurrentFilm =
        window.sessionStorage.getItem("swapiCurrentFilm");

      if (sessionCurrentFilm) setCurrentFilm(sessionCurrentFilm);
    }
  }, []);

  useEffect(() => {
    if (currentFilm) {
      setCurrentFilm(currentFilm);
      window.sessionStorage.setItem("swapiCurrentFilm", currentFilm);
    }
  }, [currentFilm]);

  const handleFilmDisplay = (event: MouseEvent<HTMLButtonElement>) => {
    const filmDetails = allFilms.filter((currentFilm) => {
      return (
        currentFilm.title.toLowerCase() ===
        event.currentTarget.innerHTML.toLowerCase()
      );
    });

    const stringifiedFilmDetails = filmDetails.length
      ? JSON.stringify(filmDetails[0])
      : "";

    setCurrentFilm(stringifiedFilmDetails);
  };

  return (
    <>
      <Head>
        {/* TODO: Add more metadata/fallbacks related to the application */}
        <title>Star Wars by Jonatan Solo</title>
        <link rel="icon" href="/favicon.ico" />
        <link hrefLang="en" />
      </Head>

      <main className="container items-center justify-center mx-auto p-4">
        <h1 className="text-4xl font-extrabold text-center">
          Star Wars Vehicles
        </h1>
        <section className="grid grid-cols-1 md:grid-cols-2 items-start justify-center text-center mt-8">
          <Vehicles
            allFilms={allFilms}
            allVehicles={allVehicles}
            onClick={handleFilmDisplay}
          />
          <FilmDetails film={currentFilm} />
        </section>
      </main>

      <Footer />
    </>
  );
};

// TODO: Instead of prop drilling, we should create a context provider to prevent unnecesary rerenders
export async function getStaticProps() {
  return {
    props: {
      allVehicles: await fetchAllVehicles(),
      allFilms: await fetchAllFilms(),
    },
  };
}

export default Home;
