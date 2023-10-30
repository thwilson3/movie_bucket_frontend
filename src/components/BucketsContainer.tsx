import { useContext, useEffect, useState } from "react";
import { UserContext } from "../UserContext";
import { UserContextType } from "../interfaces";

import BucketList from "./BucketList";
import MainContainer from "./MainContainer";
import MovieBucketAPI from "../api";
import LoadingSpinner from "./LoadingSpinner";

export default function BucketsContainer() {
  const [buckets, setBuckets] = useState([]);
  const { currentUser } = useContext(UserContext) as UserContextType;

  useEffect(function getBucketsOnMount() {
    getBuckets();
  }, []);

  async function getBuckets() {
    console.log(currentUser);

    const newBuckets = await MovieBucketAPI.getBuckets();
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
