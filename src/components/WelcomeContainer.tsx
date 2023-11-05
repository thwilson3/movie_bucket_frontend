import { useState } from "react";
import { AiOutlineCloseSquare } from "react-icons/ai";

export default function WelcomeContainer() {
  const [isOpen, setIsOpen] = useState(true);

  function closeContainer() {
    setIsOpen(false);
  }
  return (
    <>
      <div
        className={`flex relative outline outline-2 mx-auto flex-col mt-20 w-80 bg-white ${
          isOpen ? "block opacity-50" : "hidden"
        }`}
      >
        <AiOutlineCloseSquare
          className="right-0 absolute cursor-pointer"
          onClick={closeContainer}
        />
        <div className="font-bold px-4 py-4 text-sm text-center">
          <h1 className="text-lg pb-3">Movie Bucket</h1>
          A place to build and track watch lists by yourself or
          collaboratively.
        </div>
      </div>
    </>
  );
}
