import { useContext, useEffect, useState } from "react";
import { UserContext } from "../shared/UserContext";
import { BucketType, HeaderOptions, UserContextType } from "../types";

import BucketList from "../components/BucketList";
import MainContainer from "../shared/MainContainer";
import MovieBucketAPI from "../api/api";
import LoadingSpinner from "../components/LoadingSpinner";

/** BucketsContainer
 *  Holds logic/state for child components
 *
 * Context: currentUser<UserType>
 * State: buckets<BucketType[]>
 * Props: logout fn
 *
 * BucketsContainer -> { BucketsList }
 */
export default function BucketsContainer() {
  const [buckets, setBuckets] = useState<BucketType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { currentUser } = useContext(UserContext) as UserContextType;

  const headerOptions: HeaderOptions = {
    title: `${currentUser?.username}'s Buckets`,
    buttons: [
      {
        type: "Link",
        text: "new",
        path: "add",
      },
    ],
  };

  useEffect(function getBucketsOnMount() {
    setIsLoading(true);
    getBuckets();
  }, []);

  async function getBuckets() {
    const newBuckets = await MovieBucketAPI.getBuckets();
    setBuckets(newBuckets);
    setIsLoading(false);
  }

  return (
    <MainContainer headerOptions={headerOptions}>
      {isLoading ? <LoadingSpinner /> : <BucketList buckets={buckets} />}
    </MainContainer>
  );
}
