import { Link } from "react-router-dom";

export default function LandingOptions() {
  return (
    <div className="flex flex-col gap-6">
    <Link to={"buckets"}>
      <div className="flex cursor-pointer text-black justify-center font-bold outline outline-black outline-2 w-60 md:w-screen lg:w-screen max-w-md py-6 bg-primary shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[8px] hover:translate-y-[8px] hover:shadow-none">
        my buckets
      </div>
    </Link>
    </div>
  );
}
