import { BrowserRouter as Router, Route, Switch, json } from "react-router-dom";
import Navigation from "./components/Navigation";
import Homepage from "./components/Homepage";
import MovieBucketAPI from "./api";
import { useEffect, useState } from "react";
import RoutesList from "./RoutesList";
import { UserContext } from "./UserContext";
import { jwtDecode } from "jwt-decode";

export const TOKEN_STORAGE_ID = null;

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(TOKEN_STORAGE_ID);

  // useEffect(
  //   function loadUserInfo() {
  //     console.debug("App useEffect loadUserInfo", "token=", token);

  //     async function getCurrentUser() {
  //       if (token) {
  //         try {
  //           let { username } = jwtDecode(token);
  //           // put the token on the Api class so it can use it to call the API.
  //           MovieBucketAPI.token = token;
  //           // let currentUser = await MovieBucketAPI.getCurrentUser(username);

  //           setCurrentUser({
  //             infoLoaded: true,
  //             data: currentUser
  //           });
  //         } catch (err) {
  //           console.error("App loadUserInfo: problem loading", err);
  //           setCurrentUser({
  //             infoLoaded: true,
  //             data: null
  //           });
  //         }
  //       } else {
  //         setCurrentUser(currentUser);
  //       }
  //     }
  //     getCurrentUser();
  //   },
  //   [token]
  // );

  async function login({ username, password }) {
    const { access_token, message, status, success, user } =
      await MovieBucketAPI.login(username, password);
    if (success) {
      setToken(access_token);
      setCurrentUser(user);
      MovieBucketAPI.token = access_token;
    } else throw new Error(JSON.stringify({ message, status }));
  }

  async function signup({ username, password, email, }) {
    const { access_token, message, status, success, user } =
      await MovieBucketAPI.signup(username, password, email);
    if (success) {
      setToken(access_token);
      setCurrentUser(user);
      MovieBucketAPI.token = access_token;
    } else throw new Error(JSON.stringify({ message, status }))
  }

  function logout(){
    setCurrentUser(null)
    setToken(null)
  }

  return (
    <UserContext.Provider value={{currentUser, setCurrentUser}}>
      <>
        <Navigation />
        <RoutesList login={login} signup={signup} logout={logout}/>
      </>
    </UserContext.Provider>
  );
}
