import { useState } from "react";
import { MovieType } from "../interfaces";
import { useParams } from "react-router-dom";
import { MdAdd, MdClose } from "react-icons/md";
import MovieBucketAPI from "../api";

interface MovieProps {
  movie: MovieType;
  deleteMovie: Function;
  addMovie: Function;
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
export default function Movie({ movie, deleteMovie, addMovie }: MovieProps) {
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

  function handleDelete() {
    deleteMovie(id, movie.id.toString());
  }

  function handleAdd() {
    addMovie(id, movie.title, movie.image, movie.release_date, movie.bio)
  }

  return (
    <div className="flex flex-col relative text-black justify-center items-center font-bold outline rounded-md outline-black outline-2 w-60 md:w-80 lg:w-96 max-w-sm py-8 bg-background shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      <h1 className="text-center mt-2 w-2/3 outline outline-2 rounded-md bg-black text-white p-2">
        {movie.title}
      </h1>
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
      {movie?.id ? (
        <MdClose
          className="absolute top-2 right-2 cursor-pointer w-6 h-6 outline outline-2 outline-black text-black bg-red-500"
          onClick={handleDelete}
        />
      ) : (
        <MdAdd className="absolute top-2 right-2 cursor-pointer w-6 h-6 outline outline-2 outline-black text-black bg-green-400"
        onClick={handleAdd}/>
      )}
      <div className="flex flex-row items-center gap-4">
        <div
          className="w-min border-2 border-black text-black bg-primary cursor-pointer px-2 py-1.5 text-xs rounded-full font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
          onClick={toggleBio}
        >
          <p>{isBioOpen ? "Close" : "Synopsis"}</p>
        </div>
        {movie?.id ? (
          <div
            className="w-min border-2 border-black cursor-pointer px-2 py-1.5 text-black text-xs font-bold rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
            style={{ backgroundColor: isWatched ? "#56b02d" : "#ff9d42" }}
            onClick={toggleWatched}
          >
            {isWatched ? "Watched" : "Unwatched"}
          </div>
        ) : null}
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
