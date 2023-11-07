import { useContext } from "react";
import { UserContext } from "../shared/UserContext";
import { HeaderOptions, LogoutFunction, UserContextType } from "../types";

import AnonOptions from "./AnonOptions";
import LandingOptions from "./LandingOptions";
import MainContainer from "../shared/MainContainer";
import WelcomeContainer from "../containers/WelcomeContainer";

/** Homepage view for Movie Bucket
 *
 * State: none
 * Props: none
 *
 * App -> Homepage -> BucketList, Navigation
 */
export default function Homepage({ logout }: { logout: LogoutFunction }) {
  const { userContext } = useContext(UserContext) as UserContextType;

  const userOptions: HeaderOptions = {
    title: userContext?.username,
    buttons: [
      {
        type: "Link",
        text: "logout",
        function: logout,
        path: "/",
      },
    ],
  };

  console.log("userContext", userContext);
  return (
    <>
      {userContext === null ? (
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
