import BucketList from "./BucketList";
import LandingOptions from "./LandingOptions";
import MainContainer from "./MainContainer";

/** Homepage view for Movie Bucket
 *
 * State: none
 * Props: none
 *
 * App -> Homepage -> BucketList, Navigation
 */
export default function Homepage() {
  return (
    <MainContainer>
      <LandingOptions/>
    </MainContainer>
  );
}
