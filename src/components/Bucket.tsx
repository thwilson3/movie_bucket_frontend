import { BucketProps } from "../types";

/** Renders a single bucket
 *
 * State: none
 * Props: BucketProps
 *
 * BucketList -> Bucket
 */
export default function Bucket({ bucket }: BucketProps) {
  return (
    <div
      className="flex flex-col cursor-pointer text-black justify-center items-center font-bold outline outline-black outline-2 w-60 md:w-screen lg:w-screen max-w-md py-6 bg-primary shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[8px] hover:translate-y-[8px] hover:shadow-none"
    >
      {bucket.bucket_name}
      {bucket?.genre ? (
        <p className="text-sm opacity-75">{bucket.genre}</p>
      ) : null}
    </div>
  );
}
