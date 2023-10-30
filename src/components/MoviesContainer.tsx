import { useContext, useEffect, useState } from "react";
import { UserContext } from "../UserContext";
import { UserContextType } from "../interfaces";
import MainContainer from "./MainContainer";
import MovieBucketAPI from "../api";
import LoadingSpinner from "./LoadingSpinner";
import MovieList from "./MovieList";
import { useParams } from "react-router-dom";

export default function MoviesContainer() {
  const [movies, setMovies] = useState([]);
  const { currentUser } = useContext(UserContext) as UserContextType;
  const { id } = useParams()
  console.log("id", id);


  useEffect(function getBucketsOnMount() {
    getMovies();
  }, []);

  async function getMovies() {
    console.log(currentUser);

    const newMovies = await MovieBucketAPI.getMovies(id);
    setMovies(newMovies);
    console.log(newMovies);

  }

  if(!movies) return <LoadingSpinner />

  return (
    <MainContainer>
      <MovieList movies={movies} />
    </MainContainer>
  );
}