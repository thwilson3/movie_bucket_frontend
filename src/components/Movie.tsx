import { useState } from "react";
import { MovieType } from "../interfaces";
import { useParams } from "react-router-dom";
import MovieBucketAPI from "../api";
import { MdClose } from "react-icons/md";

interface MovieProps {
  movie: MovieType;
  deleteMovie: Function;
}

const NO_IMAGE_FOUND = "../public/No image.png";

/** Renders a single movie component
 *
 *  Props: movie
 *
 *  State: none
 *
 *  MovieList -> Movie
 */
export default function Movie({ movie }: MovieProps) {
  const [isWatched, setIsWatched] = useState(movie.is_watched);
  const [isBioOpen, setIsBioOpen] = useState(false);
  const { id } = useParams();

  async function toggleWatched() {
    try {
      await MovieBucketAPI.updateMovieWatchStatus(id, movie.id.toString());
      setIsWatched(!isWatched);
    } catch (err) {
      throw new Error(JSON.stringify(err));
    }
  }

  function toggleBio() {
    setIsBioOpen(!isBioOpen);
  }

  async function deleteMovie() {
    try {
      await MovieBucketAPI.deleteMovie(id, movie.id.toString());
    } catch (err) {
      throw new Error(JSON.stringify(err));
    }
  }
  return (
    <div className="flex flex-col relative text-black justify-center items-center font-bold outline outline-black outline-2 w-60 md:w-80 lg:w-96 max-w-sm py-6 bg-background shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      {movie.title}
      <img
        className="outline outline-2 m-3"
        src={
          movie.image
            ? `https://image.tmdb.org/t/p/w500${movie.image}`
            : NO_IMAGE_FOUND
        }
        alt={`${movie.title} poster`}
        height="300"
        width="200"
      />
      <MdClose
        className="absolute top-2 right-2 cursor-pointer w-6 h-6 outline outline-2 outline-black text-black bg-red-500"
        //   onClick={() => deleteMovie(id, movie.id)}
        onClick={deleteMovie}
      />
      <div className="flex flex-row items-center gap-4">
        <div
          className="w-min border-2 border-black text-black bg-primary cursor-pointer px-2 py-1.5 text-xs font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
          onClick={toggleBio}
        >
          <p>{isBioOpen ? "Close" : "Synopsis"}</p>
        </div>
        <div
          className="w-min border-2 border-black cursor-pointer px-2 py-1.5 text-black text-xs font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
          style={{ backgroundColor: isWatched ? "#56b02d" : "#ff9d42" }}
          onClick={toggleWatched}
        >
          {isWatched ? "Watched" : "Unwatched"}
        </div>
      </div>
      {isBioOpen ? (
        <div className="bg-primary mt-3 text-xs outline outline-3 text-black w-2/3 flex items-center">
          <p className="p-3">
            {movie.bio ? movie.bio : "Bio unavailable at this time."}
          </p>
        </div>
      ) : null}
    </div>
  );
}
