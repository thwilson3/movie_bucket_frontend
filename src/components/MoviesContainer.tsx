import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NewMovieType } from "../interfaces";

import MainContainer from "./MainContainer";
import MovieBucketAPI from "../api";
import LoadingSpinner from "./LoadingSpinner";
import MovieList from "./MovieList";
import SearchBar from "./SearchBar";
import InviteModal from "./InviteModal";

export default function MoviesContainer() {
  const [movies, setMovies] = useState([]);
  const [bucket, setBucket] = useState([]);
  const [inviteCode, setInviteCode] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const { id = '' } = useParams();

  useEffect(function fetchContentOnMount() {
    getAllContent();
  }, []);

  async function getAllContent(): Promise<void> {
    try {
      const [movies, { bucket }, { bucket_link }] = await Promise.all([
        MovieBucketAPI.getMovies(id),
        MovieBucketAPI.getSingleBucket(id),
        MovieBucketAPI.getInviteCode(id),
      ]);
      setMovies(movies);
      setBucket(bucket);
      setInviteCode(bucket_link.invite_code);
    } catch (err) {
      console.error(err);
    }
  }

  async function getMovies(): Promise<void> {
    try {
      const movies = await MovieBucketAPI.getMovies(id);
      setMovies(movies);
    } catch (err) {
      throw new Error(JSON.stringify(err));
    }
  }

  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  function toggleSearch() {
    setIsSearch(!isSearch);
  }

  async function fetchSearchResults(searchTerm: string): Promise<void> {
    console.log("searchTerm in search bar", searchTerm);

    try {
      const movies = await MovieBucketAPI.getSearchResults(searchTerm);
      console.log("movies in search bar", movies);
      setMovies(movies);
    } catch (err) {
      throw new Error(JSON.stringify(err));
    }
  }

  async function deleteMovie(id: string, movieId: string): Promise<void> {
    console.log("delete movie", id, movieId);
    try {
      const response = await MovieBucketAPI.deleteMovie(id, movieId.toString());
      console.log("response in delete movie", response);
      getMovies();
    } catch (err) {
      throw new Error(JSON.stringify(err));
    }
  }

  async function addMovie(movie: NewMovieType): Promise<void> {
    try {
      const response = await MovieBucketAPI.addMovie(movie);
    } catch (err) {
      console.error(err);
    }
  }

  const headerOptions = {
    title: bucket.bucket_name || "welcome",
    buttons: [
      {
        text: "edit",
        path: "edit",
      },
      {
        text: "invite",
        function: toggleModal,
        path: ""
      },
      {
        text: "add",
        function: toggleSearch,
      },
    ],
  };

  if (!movies) return <LoadingSpinner />;

  return (
    <MainContainer headerOptions={headerOptions}>
      {isModalOpen ? (
        <InviteModal toggleModal={toggleModal} inviteCode={inviteCode} />
      ) : null}
      {isSearch ? (
        <SearchBar
          placeholder="Find a movie"
          fetchSearchResults={fetchSearchResults}
        />
      ) : null}
      <MovieList
        movies={movies}
        deleteMovie={deleteMovie}
        addMovie={addMovie}
      />
    </MainContainer>
  );
}
