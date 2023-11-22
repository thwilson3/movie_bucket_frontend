import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BucketType, HeaderOptions, MovieType, NewMovieType } from "../types";

import MainContainer from "../shared/MainContainer";
import MovieBucketAPI from "../api/api";
import LoadingSpinner from "../components/LoadingSpinner";
import MovieList from "../components/MovieList";
import SearchBar from "../components/SearchBar";
import InviteModal from "../components/InviteModal";
import SearchContainer from "./SearchContainer";

const defaultBucket: BucketType = {
  id: 0,
  bucket_name: "",
};

/** MovieContainer
 *  Holds logic/state for child components
 *
 * State: movies<MovieType[], bucket<BucketType>, inviteCode, isModalOpen, isSearch
 * Props: none
 *
 * MoviesContainer -> { InviteModal, SearchBar, MoviesList }
 */
export default function MoviesContainer() {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [bucket, setBucket] = useState<BucketType>(defaultBucket);
  const [searchResults, setSearchResults] = useState<MovieType[]>([]);
  const [movieIds, setMoviesIds] = useState([]);
  const [inviteCode, setInviteCode] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const { id = "" } = useParams();

  //TODO: Reconsider how this useEffect is being used
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
      setMoviesIds(movies.map((movie: MovieType) => movie.id));
      setBucket(bucket);
      setInviteCode(bucket_link.invite_code);
    } catch (err) {
      throw new Error(JSON.stringify(err));
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
    try {
      const movies = await MovieBucketAPI.getSearchResults(searchTerm);
      setSearchResults(movies);
    } catch (err) {
      throw new Error(JSON.stringify(err));
    }
  }

  async function deleteMovie(id: string, movieId: string): Promise<void> {
    try {
      await MovieBucketAPI.deleteMovie(id, movieId.toString());
      getMovies();
    } catch (err) {
      throw new Error(JSON.stringify(err));
    }
  }

  async function addMovie(newMovie: NewMovieType): Promise<void> {
    try {
      await MovieBucketAPI.addMovie(newMovie);
    } catch (err) {
      throw new Error(JSON.stringify(err));
    }
  }

  const headerOptions: HeaderOptions = {
    title: bucket.bucket_name || "welcome",
    buttons: [
      {
        type: "Toggle",
        text: "invite",
        function: toggleModal,
      },
      {
        type: "Toggle",
        text: "add",
        function: toggleSearch,
      },
    ],
  };

  if (!movies) return <LoadingSpinner />;

  return (
    <MainContainer headerOptions={headerOptions}>
      {isModalOpen && (
        <InviteModal toggleModal={toggleModal} inviteCode={inviteCode} />
      )}
      {isSearch && (
        <>
          <SearchBar
            placeholder="Find a movie"
            fetchSearchResults={fetchSearchResults}
          />
          <SearchContainer
            searchResults={searchResults}
            movieIds={movieIds}
            deleteMovie={deleteMovie}
            addMovie={addMovie}
          />
        </>
      )}
      <MovieList
        movies={movies}
        movieIds={movieIds}
        deleteMovie={deleteMovie}
        addMovie={addMovie}
      />
    </MainContainer>
  );
}
