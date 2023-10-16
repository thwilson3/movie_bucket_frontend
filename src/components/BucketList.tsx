import Bucket from "./Bucket";

const bucketItems = [{ id:1, bucket_name: "test bucket" }, { id:2, bucket_name: "test bucket 2" }];

/** Renders a list of buckets
 *
 * State: none
 * Props: none
 *
 * Homepage -> BucketList -> Bucket
 */
export default function BucketList() {
  return (
    <>
      {bucketItems.map((bucket, idx) => (
        <Bucket bucket={bucket} idx={idx} />
      ))}
    </>
  );
}
