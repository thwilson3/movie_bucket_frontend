import { useState } from "react";
import MovieBucketAPI from "../api";

export default function SearchBar({ placeholder, getResults }: { placeholder: string, getResults: Function }) {
  const [searchTerm, setSearchTerm] = useState("");
  // const [movies, setMovies] = useState([])
  console.log("searchTerm", searchTerm);


  // async function getResults(searchTerm){
  //   console.log("searchTerm in search bar", searchTerm);

  //   try{
  //     const movies = await MovieBucketAPI.getSearchResults(searchTerm)
  //     console.log("movies in search bar", movies);
  //     setMovies(movies)

  //   } catch(err){
  //     throw new Error(JSON.stringify(err))
  //   }
  // }

  function handleSubmit(evt){
    evt.preventDefault()
    getResults(searchTerm)
  }


  return (
  <form className="border-2 flex bg-white flex-row border-black my-6 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
  onSubmit={handleSubmit}>
      <input
        className="w-full px-2"
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        aria-label={placeholder}
      />
      <button className="cursor-pointer p-3 text-black justify-center font-bold outline outline-2 bg-primary">
        Search
      </button>
    </form>
  );
}
