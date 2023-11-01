import { MovieType } from "../interfaces";

interface MovieProps {
  movie: MovieType;
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
  return (
    <div
      className="flex flex-col cursor-pointer text-white justify-center items-center font-bold outline outline-black outline-2 w-60 md:w-80 lg:w-96 max-w-sm py-6 bg-secondary shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[8px] hover:translate-y-[8px] hover:shadow-none"
      key={movie.id}
    >
      {movie.title}
      <img
        src={movie.image ? movie.image : NO_IMAGE_FOUND}
        alt={`${movie.title} poster`}
        height="300"
        width="200"
      />
    </div>
  );
}
