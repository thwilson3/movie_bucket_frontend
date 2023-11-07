import { useContext, useEffect, useState } from "react";
import { UserContext } from "../UserContext";
import { HeaderOptions, UserContextType } from "../interfaces";

import BucketList from "./BucketList";
import MainContainer from "./MainContainer";
import MovieBucketAPI from "../api";
import LoadingSpinner from "./LoadingSpinner";

export default function BucketsContainer() {
  const [buckets, setBuckets] = useState([]);
  const { userContext } = useContext(UserContext) as UserContextType;

  const headerOptions: HeaderOptions = {
    title: `${userContext?.username}'s Buckets`,
    buttons: [{
      type: "Link",
      text: "new",
      path: "add",
    }]
  };

  useEffect(function getBucketsOnMount() {
    getBuckets();
  }, []);

  async function getBuckets() {
    const newBuckets = await MovieBucketAPI.getBuckets();
    setBuckets(newBuckets);
  }

  if (!buckets) return <LoadingSpinner />;

  return (
    <MainContainer headerOptions={headerOptions}>
      <BucketList buckets={buckets} />
    </MainContainer>
  );
}
