import { useState } from "react";
import { RouteParams, SearchProps } from "../types";
import { useParams } from "react-router-dom";

const NO_IMAGE_FOUND = "../public/No image.png";

/** Renders a single movie component
 *
 *  Props: movie
 *
 *  State: none
 *
 *  MovieList -> Movie
 */
export default function SearchMovie({ movie, movieIds, addMovie }: SearchProps) {
  const [isBioOpen, setIsBioOpen] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const { id = "" } = useParams<RouteParams>();

  function toggleBio() {
    setIsBioOpen(!isBioOpen);
  }

  function handleAdd() {
    if (movie) {
      const newMovie = {
        bucket_id: id,
        id: movie.id,
        title: movie.title,
        image: movie?.image ? movie.image : NO_IMAGE_FOUND,
        release_date: movie?.release_date,
        bio: movie?.bio,
      };

      //TODO: verify movie added successfully before setIsAdded
      addMovie(newMovie);
      setIsAdded(true);
    } else {
      console.log("oops");
    }
  }

  return (
    <div className="flex flex-col relative text-black justify-center items-center font-bold outline-black">
      <div className="mb-4 mx-20 w-full px-4">
        <img
          className="outline outline-2"
          src={
            movie.image
              ? `https://image.tmdb.org/t/p/w500${movie.image}`
              : NO_IMAGE_FOUND
          }
          alt={`${movie.title} poster`}
        />
      </div>
      <div className="flex flex-col items-center gap-3">
        {!movieIds.includes(movie?.id) ? (
          isAdded ? (
            <div className="w-min border-2 border-black text-black bg-green-500 cursor-default px-2 py-1.5 text-xs rounded-full font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              <p>success!</p>
            </div>
          ) : (
            <div
              className="w-min border-2 border-black text-black bg-green-500 cursor-pointer px-6 py-1.5 text-xs rounded-full font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              onClick={handleAdd}
            >
              <p>add</p>
            </div>
          )
        ) : null}
        <div
          className="w-min border-2 border-black text-black bg-primary cursor-pointer px-5 py-1.5 text-xs rounded-full font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
          onClick={toggleBio}
        >
          <p>{isBioOpen ? "close" : "info"}</p>
        </div>
      </div>
      {isBioOpen ? (
        <div className="bg-primary cursor-pointer absolute bottom-10 rounded-md text-xs outline outline-3 text-black overflow-y-scroll max-h-80 z-10 flex items-center"
        onClick={toggleBio}>
          <div className="p-3">
            <p className="font-extrabold">
            Title: <span className="font-semibold">{movie.title}</span>
            <br></br>
            Released: <span className="font-semibold">{movie.release_date?.slice(0, 4)}</span>

            </p>
            {/* {movie.bio ? movie.bio : "Bio unavailable at this time."} */}
          </div>
        </div>
      ) : null}
    </div>
  );
}
