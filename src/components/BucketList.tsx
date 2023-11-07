import { Link } from "react-router-dom";
import Bucket from "./Bucket";
import { BucketType } from "../types";

/** Renders a list of buckets
 *
 * State: none
 * Props: buckets<BucketType[]>
 *
 * BucketList -> Bucket
 */
export default function BucketList({ buckets }: { buckets: BucketType[] }) {
  return (
    <div className="flex flex-col gap-6">
      {buckets.length
        ? buckets.map((bucket) => (
            <Link to={`${bucket.id}`} key={bucket.id}>
              <Bucket bucket={bucket} />
            </Link>
          ))
        : "Create a bucket to start adding movies!"}
    </div>
  );
}
