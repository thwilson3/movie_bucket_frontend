import { useContext } from "react";
import AnonOptions from "./AnonOptions";
import LandingOptions from "./LandingOptions";
import MainContainer from "./MainContainer";
import WelcomeContainer from "./WelcomeContainer";
import { UserContext } from "../UserContext";
import { UserContextType } from "../interfaces";

/** Homepage view for Movie Bucket
 *
 * State: none
 * Props: none
 *
 * App -> Homepage -> BucketList, Navigation
 */
export default function Homepage({ login, logout }) {
  const { currentUser } = useContext(UserContext) as UserContextType
  console.log("currentUser", currentUser)
  return (
    <>
      {currentUser === null ? (
        <>
          <WelcomeContainer />
          <MainContainer logout={logout}>
            <AnonOptions login={login}/>
          </MainContainer>
        </>
      ) :
        <MainContainer logout={logout}>
          <LandingOptions />
        </MainContainer>}
    </>
  );
}
