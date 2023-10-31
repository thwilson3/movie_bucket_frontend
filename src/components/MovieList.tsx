import { Link } from "react-router-dom";
import { MovieType } from "../interfaces";

import Movie from "./Movie";

export default function MovieList({ movies }: {movies: MovieType[]}) {
  return (
    <div className="flex flex-col gap-6">
      {movies.map((movie) => (
        <Link to={`movies/${movie.id}`}>
          <Movie movie={movie} />
        </Link>
      ))}
    </div>
  );
}
