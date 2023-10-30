import { Link } from "react-router-dom";
import Bucket from "./Bucket";

// const bucketItems = [{ id:1, bucket_name: "test bucket" }, { id:2, bucket_name: "test bucket 2" }];

/** Renders a list of buckets
 *
 * State: none
 * Props: none
 *
 * Homepage -> BucketList -> Bucket
 */
export default function BucketList({ buckets }) {
  return (
    <div className="flex flex-col gap-6">
      {console.log(buckets)}
      {buckets.map((bucket, idx) => (
        <Link to={`${bucket.id}`}>
          <Bucket bucket={bucket} idx={idx} />
        </Link>
      ))}
    </div>
  );
}
