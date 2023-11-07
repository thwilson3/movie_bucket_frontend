import { SignupFunction } from "../types";
import MainContainer from "../shared/MainContainer";
import SignUpForm from "../forms/SignUpForm";

export default function SignUpContainer({
  signup,
}: {
  signup: SignupFunction;
}) {
  return (
    <MainContainer>
      <SignUpForm signup={signup} />
    </MainContainer>
  );
}
