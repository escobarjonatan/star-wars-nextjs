import { Film } from "../types";

interface FilmDetailsProps {
  film: string;
}

const FilmDetails = ({ film }: FilmDetailsProps) => {
  const { director, opening_crawl, producer, release_date, title }: Film =
    film && JSON.parse(film);

  return film.length ? (
    <aside className="md:order-1 order-first pb-4 px-4">
      <h2 className="mb-4 font-bold text-xl">Film details</h2>
      {title && <p>Title: {title}</p>}
      {producer && <p>Producer: {producer}</p>}
      {director && <p>Director: {director}</p>}
      {release_date && (
        <p>Released date: {new Date(release_date).toLocaleDateString()}</p>
      )}
      {opening_crawl && <p>Opening Crawl: {opening_crawl}</p>}
    </aside>
  ) : null;
};

export default FilmDetails;
