import { useContext } from "react";
import { UserContext } from "../shared/UserContext";
import { HeaderOptions, LogoutFunction, UserContextType } from "../types";

import AnonOptions from "./AnonOptions";
import LandingOptions from "./LandingOptions";
import MainContainer from "../shared/MainContainer";
import WelcomeContainer from "../containers/WelcomeContainer";

/** Homepage
 *
 * Context: currentUser<UserType>
 * State: none
 * Props: logout fn
 *
 * App -> Homepage -> { WelcomeContainer && AnonOptions || LandingOptions }
 */
export default function Homepage({ logout }: { logout: LogoutFunction }) {
  const { currentUser } = useContext(UserContext) as UserContextType;

  const userOptions: HeaderOptions = {
    title: currentUser?.username,
    buttons: [
      {
        type: "Link",
        text: "logout",
        function: logout,
        path: "/",
      },
    ],
  };

  return (
    <>
      {currentUser === null ? (
        <>
          <WelcomeContainer />
          <MainContainer>
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
