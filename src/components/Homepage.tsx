import BucketList from "./BucketList";
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
export default function Homepage() {
    const test = true
  return (
    <>
    {test ? <WelcomeContainer/> : null}
        <MainContainer>
        <LandingOptions/>
        </MainContainer>
    </>
  );
}
