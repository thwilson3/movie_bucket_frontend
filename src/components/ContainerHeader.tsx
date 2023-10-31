import { useContext } from "react";
import { UserContext } from "../UserContext";
import { UserContextType } from "../interfaces";
import { Link } from "react-router-dom";
import { HeaderOptions } from "../interfaces";

export default function ContainerHeader({ options }: {options?: HeaderOptions}) {
  const { currentUser } = useContext(UserContext) as UserContextType;

  function handleClick() {
    if (options?.function) {
      options?.function();
    }
  }
  return (
    <>
      <div className="flex py-2 md:py-2 lg:py-2 font-bold bg-secondary justify-center outline outline-2 top-0 left-0 absolute w-full">
        {options?.title ? options.title : "welcome"}
      </div>
      {options !== undefined ? (
        <Link to={options?.path} onClick={handleClick}>
          <div className="bg-primary font-bold outline outline-2 absolute right-5 top-2 px-2 cursor-pointer">
            {options?.text}
          </div>
        </Link>
      ) : null}
    </>
  );
}
