import { useContext } from "react";
import { UserContext } from "../UserContext";
import { LoginFunction, LogoutFunction, UserContextType } from "../interfaces";

import AnonOptions from "./AnonOptions";
import LandingOptions from "./LandingOptions";
import MainContainer from "./MainContainer";
import WelcomeContainer from "./WelcomeContainer";

/** Homepage view for Movie Bucket
 *
 * State: none
 * Props: none
 *
 * App -> Homepage -> BucketList, Navigation
 */
export default function Homepage({
  login,
  logout,
}: {
  login: LoginFunction;
  logout: LogoutFunction;
}) {
  const { currentUser } = useContext(UserContext) as UserContextType;

  const userOptions = {
    title: currentUser?.username,
    text: "logout",
    function: logout,
    path: "/",
  };

  const loginOptions = {
    text: "login",
    function: login,
    path: "login",
  };

  console.log("currentUser", currentUser);
  return (
    <>
      {currentUser === null ? (
        <>
          <WelcomeContainer />
          <MainContainer headerOptions={loginOptions}>
            <AnonOptions />
          </MainContainer>
        </>
      ) : (
        <MainContainer headerOptions={userOptions}>
          <LandingOptions />
        </MainContainer>
      )}
    </>
  );
}
