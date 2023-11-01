import { useState } from "react";
import { UserContext } from "./UserContext";

import Navigation from "./components/Navigation";
import MovieBucketAPI from "./api";
import RoutesList from "./RoutesList";

export const TOKEN_STORAGE_ID = null;

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);

  async function login({ username, password }) {
    console.log("login in app", username, password);

    const { access_token, message, status, success, user } =
      await MovieBucketAPI.login(username, password);
    if (success) {
      setCurrentUser(user);
      MovieBucketAPI.token = access_token;
    } else throw new Error(JSON.stringify({ message, status }));
  }

  async function signup({ username, password, email }) {
    const { access_token, message, status, success, user } =
      await MovieBucketAPI.signup(username, password, email);
    if (success) {
      setCurrentUser(user);
      MovieBucketAPI.token = access_token;
    } else throw new Error(JSON.stringify({ message, status }));
  }

  function logout() {
    setCurrentUser(null);
    MovieBucketAPI.token = null;
  }

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      <>
        <Navigation />
        <RoutesList login={login} signup={signup} logout={logout} />
      </>
    </UserContext.Provider>
  );
}
