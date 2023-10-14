/** Homepage view for Movie Bucket
 *
 * State: none
 * Props: none
 *
 * App -> Homepage -> BucketList, Navigation
 */

import BucketList from "./BucketList";

// const bucketItems = [{ name: "test bucket" }, { name: "test bucket 2" }];
export default function Homepage() {
  return (
    <div className="flex items-center justify-center h-screen">
        <BucketList />
    </div>
  );
}
