import { useContext, useEffect, useState } from "react";
import BucketList from "./BucketList";
import MainContainer from "./MainContainer";
import { UserContext } from "../UserContext";
import { UserContextType } from "../interfaces";
import MovieBucketAPI from "../api";
import LoadingSpinner from "./LoadingSpinner";

export default function BucketContainer() {
  const [buckets, setBuckets] = useState([]);
  const { currentUser } = useContext(UserContext) as UserContextType;

  useEffect(function getBucketsOnMount() {
    getBuckets();
  }, []);

  async function getBuckets() {
    console.log(currentUser);

    let newBuckets = await MovieBucketAPI.getBuckets();
    setBuckets(newBuckets);
    console.log(newBuckets);

  }

  if(!buckets) return <LoadingSpinner />

  return (
    <MainContainer>
      <BucketList buckets={buckets} />
    </MainContainer>
  );
}
