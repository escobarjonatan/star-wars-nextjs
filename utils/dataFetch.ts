import { FilmsResponse, Vehicle, VehiclesResponse } from "../types";

// TODO: Implement a solution to fetch data when the user scrolls into view (loading 10 at a time) or pagination
const fetchAllVehicles = async () => {
  try {
    const allVehicles: Vehicle[] = [];
    let hasNext = true;
    let currentPage = "https://swapi.dev/api/vehicles/?page=1&format=json";

    while (hasNext) {
      const currentPageFetch = await fetch(currentPage);
      const currentPageData: VehiclesResponse = await currentPageFetch.json();

      allVehicles.push(...currentPageData.results);

      if (currentPageData.next) {
        currentPage = currentPageData.next;
      } else {
        hasNext = false;
      }
    }

    return allVehicles;
  } catch (error) {
    console.error("There was a problem fetching the films. Try again ", error);

    return [];
  }
};

const fetchAllFilms = async () => {
  try {
    const films = await fetch("https://swapi.dev/api/films/");

    const filmsData: FilmsResponse = await films.json();

    return filmsData.results;
  } catch (error) {
    console.error("There was a problem fetching the films. Try again ", error);

    return [];
  }
};

export { fetchAllVehicles, fetchAllFilms };
