/** Homepage view for Movie Bucket
 *
 * State: none
 * Props: none
 *
 * App -> Homepage -> BucketList, Navigation
 */

import BucketList from "./BucketList";
import MainContainer from "./MainContainer";

// const bucketItems = [{ name: "test bucket" }, { name: "test bucket 2" }];
export default function Homepage() {
  return (
    <MainContainer>
        <BucketList />
    </MainContainer>
  );
}
