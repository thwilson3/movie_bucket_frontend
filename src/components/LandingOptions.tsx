import { Link } from "react-router-dom";

export default function LandingOptions() {
  return (
    <div className="flex flex-col gap-6">
    <Link to={"buckets"}>
      <div className="flex cursor-pointer text-white justify-center font-bold outline outline-black outline-2 w-60 md:w-80 lg:w-96 max-w-sm py-6 bg-secondary shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[8px] hover:translate-y-[8px] hover:shadow-none">
        My Buckets
      </div>
    </Link>
      <div className="flex cursor-pointer text-white justify-center font-bold outline outline-black outline-2 w-60 md:w-80 lg:w-96 max-w-sm py-6 bg-secondary shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[8px] hover:translate-y-[8px] hover:shadow-none">
        Invite Someone
      </div>
    </div>
  );
}
