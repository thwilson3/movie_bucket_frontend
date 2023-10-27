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
export default function Homepage({ login, currentUser }) {
  return (
    <>
      {!currentUser ? (
        <>
          <WelcomeContainer />
          <MainContainer>
            <AnonOptions login={login}/>
          </MainContainer>
        </>
      ) :
        <MainContainer>
          <LandingOptions />
        </MainContainer>}
    </>
  );
}
