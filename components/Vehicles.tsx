import { MouseEvent } from "react";
import { Film, Vehicle } from "../types";

interface VehicleProps {
  allFilms: Film[];
  allVehicles: Vehicle[];
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

// TODO: Decouple single vehicle logic from this component to make it readable
const Vehicles = ({ allFilms, allVehicles, onClick }: VehicleProps) => {
  return (
    <article>
      <h2 className="text-xl font-bold">List of vehicles</h2>
      {/* TODO: Code smell, iterating over tne vehicle films multiple times */}
      {allVehicles.length ? (
        <ol>
          {allVehicles.map(
            (
              { created, films: vehicleFilms, manufacturer, model, name },
              index
            ) => (
              <li
                key={index} //TODO: Find a unique index instead of loop index
                className="border-solid border-2 m-4 p-4"
              >
                {name && <span>{`#${index + 1} Name: ${name}`}</span>}
                {model && <span> / Model: {model}</span>}
                {manufacturer && <span> / Manufacturer: {manufacturer}</span>}
                {vehicleFilms.length ? (
                  <span>
                    {" / Films appeared: "}
                    {vehicleFilms.map((currentFilm, index) => {
                      let title = "";

                      for (let film of allFilms) {
                        if (currentFilm == film.url) {
                          title = film.title;
                          break;
                        }
                      }

                      return (
                        <button
                          className="mx-1 underline"
                          key={index}
                          onClick={onClick}
                          type="button"
                        >
                          {title}
                        </button>
                      );
                    })}
                  </span>
                ) : null}
                {created && (
                  <span>
                    {" "}
                    / Created: {new Date(created).toLocaleDateString()}
                  </span>
                )}
              </li>
            )
          )}
        </ol>
      ) : (
        <p>Ooops, you have reached a glitch in the galaxy, no cars to show</p>
      )}
    </article>
  );
};

export default Vehicles;
