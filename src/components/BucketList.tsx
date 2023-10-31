import { Link } from "react-router-dom";
import Bucket from "./Bucket";
import { BucketType } from "../interfaces";

/** Renders a list of buckets
 *
 * State: none
 * Props: none
 *
 * Homepage -> BucketList -> Bucket
 */
export default function BucketList({ buckets }: {buckets: BucketType[]}) {
  return (
    <div className="flex flex-col gap-6">
      {buckets.map((bucket) => (
        <Link to={`${bucket.id}`}>
          <Bucket bucket={bucket} />
        </Link>
      ))}
    </div>
  );
}
