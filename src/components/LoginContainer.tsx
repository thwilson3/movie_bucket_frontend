import { LoginFunction } from "../interfaces";
import LoginForm from "./LoginForm";
import MainContainer from "./MainContainer";

export default function LoginContainer({ login }: {login: LoginFunction}){
    return(
        <MainContainer>
            <LoginForm login={login}/>
        </MainContainer>
    )
}