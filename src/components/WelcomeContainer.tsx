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
        className={`flex relative outline outline-2 mx-auto flex-col mt-20 w-80 opacity-50 bg-white ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <AiOutlineCloseSquare
          className="right-0 absolute cursor-pointer"
          onClick={closeContainer}
        />
        <div className="font-bold px-4 py-4 text-sm">
          Movie Bucket is a place to build watch lists by yourself or
          collaboratively. Feel free to use a Party Bucket as a guest to build a
          temporary watch list and roll a random movie.
        </div>
      </div>
    </>
  );
}
