import LoginForm from "./LoginForm";
import MainContainer from "./MainContainer";

export default function LoginContainer({ login, logout }){
    return(
        <MainContainer logout={logout}>
            <LoginForm login={login}/>
        </MainContainer>
    )
}