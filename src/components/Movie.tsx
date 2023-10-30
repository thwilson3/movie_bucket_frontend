import { MovieType } from "../interfaces";

interface MovieProps {
    movie: MovieType
}

/** Renders a single movie component
 *
 *  Props: movie
 *
 *  State: none
 *
 *  MovieList -> Movie
 */
export default function Movie({ movie, idx }: MovieProps){

    return(
        <div className="Movie" key={idx}>
            {movie.title}
            <img
                src={movie.image}
                alt={`${movie.title} poster`}
                height="300"
                width="200"
            />
        </div>
    )
}