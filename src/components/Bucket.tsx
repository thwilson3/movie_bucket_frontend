import { BucketType } from "../interfaces";

type BucketProps = {
    bucket: BucketType,
    idx: number,
}

/** Renders a single bucket
 *
 * State: none
 * Props: BucketProps
 *
 * BucketList -> Bucket
 */
export default function Bucket({bucket, idx}: BucketProps){
    return (
        <div
            className="flex cursor-pointer text-black justify-center font-bold outline outline-2 w-full max-w-sm py-6 bg-primary shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[8px] hover:translate-y-[8px] hover:shadow-none"
            key={idx}
          >
            {bucket.bucket_name}
          </div>
    )
}