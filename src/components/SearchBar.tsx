import { useState } from "react";
import { FetchSearchResultsFunction } from "../types";

export default function SearchBar({
  placeholder,
  fetchSearchResults,
}: {
  placeholder: string;
  fetchSearchResults: FetchSearchResultsFunction
}) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    fetchSearchResults(searchTerm);
  }

  return (
    <form
      className="border-2 flex bg-white flex-row border-black rounded-md my-6 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
      onSubmit={handleSubmit}
    >
      <input
        className="w-full px-2 rounded-md"
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        aria-label={placeholder}
      />
      <button className="cursor-pointer p-3 text-black justify-center rounded-r-md font-bold outline outline-2 bg-primary">
        Search
      </button>
    </form>
  );
}
