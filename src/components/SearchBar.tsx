import { useState } from "react";

type Props = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
};

export default function SearchBar({ placeholder }: Props) {
  const [value, setValue] = useState("");

  return (
    <div className="border-2 flex bg-white flex-row border-black my-6 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <input
        className="w-full px-2"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        aria-label={placeholder}
      />
      <div className="cursor-pointer p-3 text-black justify-center font-bold outline outline-2 bg-primary">
        Search
      </div>
    </div>
  );
}
