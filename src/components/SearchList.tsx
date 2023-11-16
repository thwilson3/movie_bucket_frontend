import { AddMovieFunction, DeleteMovieFunction, MovieType } from "../types";

import Movie from "./Movie";
import SearchMovie from "./SearchMovie";

/** Renders a list of movies
 *
 * State: none
 * Props: movies<MovieType[]>
 *
 * BucketList -> Bucket
 */
export default function SearchList({
  movies,
  movieIds,
  deleteMovie,
  addMovie,
}: {
  movies: MovieType[];
  movieIds: string[]
  deleteMovie: DeleteMovieFunction;
  addMovie: AddMovieFunction;
}) {

  return (
    <div className="flex flex-row p-6">
      {movies.length
        ? movies.map((movie) => (
            <SearchMovie
              key={movie.id}
              movie={movie}
              movieIds={movieIds}
              addMovie={addMovie}
            />
          ))
        : "No movies added yet!"}
    </div>
  );
}