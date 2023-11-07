import { LoginFunction } from "../types";
import LoginForm from "../forms/LoginForm";
import MainContainer from "../shared/MainContainer";

export default function LoginContainer({ login }: {login: LoginFunction}){
    return(
        <MainContainer>
            <LoginForm login={login}/>
        </MainContainer>
    )
}