import { AddMovieFunction, DeleteMovieFunction, MovieType } from "../types";

import Movie from "./Movie";

/** Renders a list of movies
 *
 * State: none
 * Props: movies<MovieType[]>
 *
 * BucketList -> Bucket
 */
export default function MovieList({
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
  console.log("movies in MovieList", movies);

  return (
    <div className="flex flex-col gap-6 items-center">
      {movies.length
        ? movies.map((movie) => (
            <Movie
              // TODO: handle when movie.id is undefined
              key={movie.id}
              movie={movie}
              movieIds={movieIds}
              deleteMovie={deleteMovie}
              addMovie={addMovie}
            />
          ))
        : "No movies added yet!"}
    </div>
  );
}
