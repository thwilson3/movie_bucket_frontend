import {
  AddMovieFunction,
  DeleteMovieFunction,
  MovieType,
} from "../interfaces";

import Movie from "./Movie";

export default function MovieList({
  movies,
  deleteMovie,
  addMovie,
}: {
  movies: MovieType[];
  deleteMovie: DeleteMovieFunction;
  addMovie: AddMovieFunction;
}) {
  console.log("movies in MovieList", movies);

  return (
    <div className="flex flex-col gap-6">
      {movies.length
        ? movies.map((movie) => (

            <Movie
            // TODO: handle when movie.id is undefined
              key={movie.id}
              movie={movie}
              deleteMovie={deleteMovie}
              addMovie={addMovie}
            />
          ))
        : "No movies added yet!"}
    </div>
  );
}
