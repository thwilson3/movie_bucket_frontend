import SearchList from "../components/SearchList";
import { AddMovieFunction, DeleteMovieFunction, MovieType } from "../types";

export default function SearchContainer({
  searchResults,
  movieIds,
  addMovie,
  deleteMovie,
}: {
  searchResults: MovieType[];
  movieIds: string[];
  addMovie: AddMovieFunction;
  deleteMovie: DeleteMovieFunction;
}) {
  return searchResults.length ? (
    <div className="outline outline-2 max-w-md my-8 bg-background rounded-md overflow-x-scroll shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      <SearchList
        movies={searchResults}
        movieIds={movieIds}
        addMovie={addMovie}
        deleteMovie={deleteMovie}
      />
    </div>
  ) : null;
}
