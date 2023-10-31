import LoginForm from "./LoginForm";
import MainContainer from "./MainContainer";

export default function LoginContainer({ login }){
    return(
        <MainContainer>
            <LoginForm login={login}/>
        </MainContainer>
    )
}