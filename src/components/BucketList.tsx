import { Link } from "react-router-dom";
import Bucket from "./Bucket";

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
      {buckets.map((bucket) => (
        <Link to={`${bucket.id}`}>
          <Bucket bucket={bucket} />
        </Link>
      ))}
    </div>
  );
}
