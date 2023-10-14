import { Typography } from "@mui/material";
import { Movie } from "../interfaces";

interface MovieProps {
    movie: Movie
}

/** Renders a single movie component
 *
 *  Props: movie
 *
 *  State: none
 *
 *  MovieList -> Movie
 */
export default function Movie({ movie }: MovieProps){

    return(
        <div className="Movie">
            <Typography variant="h6">{movie.title}</Typography>
            <img
                src={movie.image}
                alt={`${movie.title} poster`}
                height="300"
                width="200"
            />
        </div>
    )
}