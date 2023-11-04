import { MovieType } from "../interfaces";

import Movie from "./Movie";

export default function MovieList({ movies, deleteMovie }: { movies: MovieType[], deleteMovie: Function }) {
  return (
    <div className="flex flex-col gap-6">
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} deleteMovie={deleteMovie}/>
      ))}
    </div>
  );
}
