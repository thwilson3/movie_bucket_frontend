import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import MainContainer from "./MainContainer";
import MovieBucketAPI from "../api";
import LoadingSpinner from "./LoadingSpinner";
import MovieList from "./MovieList";

export default function MoviesContainer() {
  const [movies, setMovies] = useState([]);
  const [bucket, setBucket] = useState([]);
  const { id } = useParams();

  const headerOptions = {
    title: bucket?.bucket_name,
    buttons: [{
      text: "text",
      path: "",
    }]
  };

  useEffect(function fetchContentOnMount() {
    getContent();
  }, []);

  async function getContent() {
    try {
      const [movies, { bucket }] = await Promise.all([
        MovieBucketAPI.getMovies(id),
        MovieBucketAPI.getSingleBucket(id),
      ]);
      setMovies(movies);
      setBucket(bucket);
    } catch (err) {
      throw new Error(err);
    }
  }

  if (!movies) return <LoadingSpinner />;

  return (
    <MainContainer headerOptions={headerOptions}>
      <MovieList movies={movies} />
    </MainContainer>
  );
}
