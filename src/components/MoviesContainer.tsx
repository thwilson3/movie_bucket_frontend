import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import MainContainer from "./MainContainer";
import MovieBucketAPI from "../api";
import LoadingSpinner from "./LoadingSpinner";
import MovieList from "./MovieList";
import SearchBar from "./SearchBar";
import InviteModal from "./InviteModal";

export default function MoviesContainer() {
  const [movies, setMovies] = useState([]);
  const [bucket, setBucket] = useState([]);
  const [inviteCode, setInviteCode] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { id } = useParams();

  const headerOptions = {
    title: bucket?.bucket_name,
    buttons: [
      {
        text: "edit",
        path: "edit",
      },
      {
        text: "invite",
        function: toggleModal,
        path: "",
      },
    ],
  };

  useEffect(function fetchContentOnMount() {
    getAllContent();
  }, []);

  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  async function getAllContent() {
    try {
      const [movies, { bucket }, { bucket_link }] = await Promise.all([
        MovieBucketAPI.getMovies(id),
        MovieBucketAPI.getSingleBucket(id),
        MovieBucketAPI.getInviteCode(id)
      ]);
      console.log(bucket_link);

      setMovies(movies);
      setBucket(bucket);
      setInviteCode(bucket_link.invite_code)
    } catch (err) {
      throw new Error(err);
    }
  }

  async function getMovies() {
    try {
      const movies = await MovieBucketAPI.getMovies(id)
      setMovies(movies)
    } catch(err){
      throw new Error(JSON.stringify(err))
    }
  }

  async function deleteMovie(id, movieId) {
    console.log("delete movie", id, movieId);

    try {
        const response = await MovieBucketAPI.deleteMovie(id, movieId.toString())
        console.log("response in delete movie", response);
        getMovies()
    } catch(err){
        throw new Error(JSON.stringify(err))
    }
  }

  if (!movies) return <LoadingSpinner />;

  return (
    <MainContainer headerOptions={headerOptions}>
      {isModalOpen ? <InviteModal toggleModal={toggleModal} inviteCode={inviteCode} /> : null}
      <SearchBar placeholder="Find a movie" />
      <MovieList movies={movies} deleteMovie={deleteMovie}/>
    </MainContainer>
  );
}
