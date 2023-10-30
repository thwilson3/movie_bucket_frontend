import { Link } from "react-router-dom";
import Movie from "./Movie";

export default function MovieList({ movies }) {
  return (
    <div className="flex flex-col gap-6">
      {movies.map((movie, idx) => (
        <Link to={`movies/${movie.id}`}>
          <Movie movie={movie} idx={idx} />
        </Link>
      ))}
    </div>
  );
}
