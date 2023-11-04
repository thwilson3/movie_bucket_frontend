import { useCallback, useEffect, useState } from "react";
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
  const [isSearch, setIsSearch] = useState(false)
  const { id } = useParams();

  console.log("moviesContainer params", id, typeof id);


  const headerOptions = {
    // title: bucket?.bucket_name,
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
      {
        text: "add",
        function: toggleSearch,
      }
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

  function toggleSearch() {
    setIsSearch(!isSearch)
  }

  async function fetchSearchResults(searchTerm: string){
    console.log("searchTerm in search bar", searchTerm);

    try{
      const movies = await MovieBucketAPI.getSearchResults(searchTerm)
      console.log("movies in search bar", movies);
      setMovies(movies)

    } catch(err){
      throw new Error(JSON.stringify(err))
    }
  }

  async function deleteMovie(id: string, movieId: number) {
    console.log("delete movie", id, movieId);
    try {
        const response = await MovieBucketAPI.deleteMovie(id, movieId.toString())
        console.log("response in delete movie", response);
        getMovies()
    } catch(err){
        throw new Error(JSON.stringify(err))
    }
  }

  async function addMovie(id: number, title: string, image: string, release_date: string, bio: string){
    try {
      const response = await MovieBucketAPI.addMovie(id, title, image, release_date, bio)
    } catch(err){
      throw new Error(err)
    }

  }

  if (!movies) return <LoadingSpinner />;

  return (
    <MainContainer headerOptions={headerOptions}>
      {isModalOpen ? <InviteModal toggleModal={toggleModal} inviteCode={inviteCode} /> : null}
      { isSearch ?
      <SearchBar placeholder="Find a movie" fetchSearchResults={fetchSearchResults} />
      : null }
      <MovieList movies={movies} deleteMovie={deleteMovie} addMovie={addMovie} />
    </MainContainer>
  );
}
