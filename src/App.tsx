import { useState } from "react";
import { UserContext } from "./shared/UserContext";

import Navigation from "./components/Navigation";
import MovieBucketAPI from "./api/api";
import RoutesList from "./routes/RoutesList";

/** Homepage
 *
 * State: currentUser
 * Props: none
 *
 * App -> Context<UserContext> -> { Navigation, RoutesList }
 */
export default function App() {
  const [currentUser, setCurrentUser] = useState(null);

  //TODO: these function could live inside a custom hook
  async function login({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) {
    const { access_token, message, status, success, user } =
      await MovieBucketAPI.login(username, password);
    if (success) {
      setCurrentUser(user);
      //TODO: Set token inside api class
      MovieBucketAPI.token = access_token;
    } else throw new Error(JSON.stringify({ message, status }));
  }

  async function signup({
    username,
    password,
    email,
  }: {
    username: string;
    password: string;
    email: string;
  }) {
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
    <UserContext.Provider value={{ currentUser }}>
      <>
        <Navigation />
        <RoutesList login={login} signup={signup} logout={logout} />
      </>
    </UserContext.Provider>
  );
}
