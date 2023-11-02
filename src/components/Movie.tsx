import { useState } from "react";
import { MovieType } from "../interfaces";
import { useParams } from "react-router-dom";
import MovieBucketAPI from "../api";

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
export default function Movie({ movie, deleteMovie }: MovieProps) {
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

//   async function deleteMovie() {
//     try {
//         await MovieBucketAPI.deleteMovie(id, movie.id.toString())
//     } catch(err){
//         throw new Error(JSON.stringify(err))
//     }
//   }
  return (
    <div className="flex flex-col text-white justify-center items-center font-bold outline outline-black outline-2 w-60 md:w-80 lg:w-96 max-w-sm py-6 bg-secondary shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      {movie.title}
      <img
        src={movie.image ? movie.image : NO_IMAGE_FOUND}
        alt={`${movie.title} poster`}
        height="300"
        width="200"
      />
      <div className="flex flex-row items-center gap-4">
        <div
          className="w-min border-2 border-black cursor-pointer px-2 py-1.5 text-black text-xs font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
          style={{ backgroundColor: isWatched ? "#56b02d" : "#ff9d42" }}
          onClick={toggleWatched}
        >
          {isWatched ? "Watched" : "Unwatched"}
        </div>
        <div
          className="w-min border-2 border-black text-black bg-primary cursor-pointer px-2 py-1.5 text-xs font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
          onClick={toggleBio}
        >
          <p>{ isBioOpen ? 'Close' : 'Synopsis'}</p>
        </div>
        <div
          className="w-min border-2 border-black text-black bg-red-500 cursor-pointer px-2 py-1.5 text-xs font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
          onClick={() => deleteMovie(id, movie.id)}
        >
          <p>Remove</p>
        </div>
      </div>
      {isBioOpen ? (
        <div className="bg-primary mt-3 text-xs outline outline-3 text-black w-2/3 flex items-center">
          {/* {movie.bio} */}
          <p className="p-3">
            "Cady Heron is a hit with The Plastics, the A-list girl clique at
            her new school, until she makes the mistake of falling for Aaron
            Samuels, the ex-boyfriend of alpha Plastic Regina George."
          </p>
        </div>
      ) : null}
    </div>
  );
}
