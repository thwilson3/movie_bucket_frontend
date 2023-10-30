import { useContext } from "react";
import { UserContext } from "../UserContext";
import { UserContextType } from "../interfaces";
import { Link } from "react-router-dom";

export default function ContainerHeader({ logout }) {
  const { currentUser } = useContext(UserContext) as UserContextType;
  return (
    <>
      <div className="flex py-2 md:py-2 font-bold bg-secondary justify-center outline outline-2 lg:py-8 top-0 left-0 absolute w-full">
        {currentUser?.username ? currentUser.username : 'welcome'}
      </div>
      {currentUser === null ? (
        <Link to={"login"}>
          <div className="bg-primary font-bold outline outline-2 absolute right-5 top-2 px-2 cursor-pointer">
            login
          </div>
        </Link>
      ) : (
        <Link to={"/"}>
          <div className="bg-primary font-bold outline outline-2 absolute right-5 top-2 px-2 cursor-pointer"
          onClick={logout}>
            logout
          </div>
        </Link>
      )}
    </>
  );
}
