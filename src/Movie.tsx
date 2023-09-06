import { Typography } from "@mui/material";
import { Movie } from "./interfaces";

interface MovieProps {
    movie: Movie
}

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

// ["title", "poster_path", "release_date", "overview"]