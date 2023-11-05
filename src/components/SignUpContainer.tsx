import { SignupFunction } from "../interfaces";
import MainContainer from "./MainContainer";
import SignUpForm from "./SignUpForm";

export default function SignUpContainer({ signup }: {signup: SignupFunction}){
    return(
        <MainContainer>
            <SignUpForm signup={signup}/>
        </MainContainer>
    )
}