import { useContext, useEffect, useState } from "react";
import { UserContext } from "../shared/UserContext";
import { HeaderOptions, UserContextType } from "../types";

import BucketList from "../components/BucketList";
import MainContainer from "../shared/MainContainer";
import MovieBucketAPI from "../api/api";
import LoadingSpinner from "../components/LoadingSpinner";

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
