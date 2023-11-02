import { Link } from "react-router-dom";
import Bucket from "./Bucket";
import { BucketType } from "../interfaces";
import { MdClose } from "react-icons/md";

/** Renders a list of buckets
 *
 * State: none
 * Props: none
 *
 * Homepage -> BucketList -> Bucket
 */
export default function BucketList({ buckets }: { buckets: BucketType[] }) {
  return (
    <div className="flex flex-col gap-6">
      {/* <div className="fixed left-0 top-0 opacity-25 bg-black font-bold flex h-screen w-screen"></div>
      <div className="fixed left-0 top-0 z-10 font-bold flex flex-col h-screen w-screen items-center justify-center">
        <div className="bg-primary relative w-96 h-80 outline outline-3 flex flex-col items-center justify-center">
          <MdClose className="bg-white outline outline-2 absolute cursor-pointer top-2 right-2 h-8 w-8" />
          <p className="px-3 pb-3 text-lg text-center">
            Share this code to add a friend to your bucket!
          </p>
          <div className="bg-white outline outline-2 text-xl flex items-center justify-center">
            <p className="p-2">837401</p>
            <p className="absolute text-xs bottom-0 opacity-50 px-3 pb-2">
              *Collaborators can add, edit, and delete buckets just as you can.
              Only share this code with trusted individuals.
            </p>
          </div>
        </div>
      </div> */}
      {buckets.map((bucket) => (
        <Link to={`${bucket.id}`}>
          <Bucket key={bucket.id} bucket={bucket} />
        </Link>
      ))}
    </div>
  );
}
