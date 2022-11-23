export interface Film {
  characters: string[];
  created: string;
  director: string;
  edited: string;
  episode_id: number;
  opening_crawl: string;
  planets: string[];
  producer: string;
  release_date: string;
  species: string[];
  starships: string[];
  title: string;
  url: string;
  vehicles: FilmVehicles;
}

export interface FilmsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Film[];
}

export type FilmVehicles = string[];

export interface Vehicle {
  cargo_capacity: string;
  consumables: string;
  cost_in_credits: string;
  created: string;
  crew: string;
  edited: string;
  films: string[];
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string;
  model: string;
  name: string;
  passengers: string;
  pilots: string[];
  url: string;
  vehicle_class: string;
}

export interface VehiclesResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Vehicle[];
}
