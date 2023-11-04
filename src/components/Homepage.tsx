import { useContext } from "react";
import { UserContext } from "../UserContext";
import { LogoutFunction, UserContextType } from "../interfaces";

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
export default function Homepage({ logout }: { logout: LogoutFunction }) {
  const { userContext } = useContext(UserContext) as UserContextType;

  const userOptions = {
    title: userContext?.username,
    buttons: [
      {
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
