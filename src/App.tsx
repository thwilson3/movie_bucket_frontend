import { BrowserRouter as Router, Route, Switch, json } from "react-router-dom";
import Navigation from "./components/Navigation";
import Homepage from "./components/Homepage";
import MovieBucketAPI from "./api";
import { useState } from "react";
import RoutesList from "./RoutesList";

export const TOKEN_STORAGE_ID = "Movie-Bucket-Token";

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(TOKEN_STORAGE_ID);

  async function login({ username, password }) {
    const { access_token, message, status, success, user } =
      await MovieBucketAPI.login(username, password);
    if (success) {
      setToken(access_token);
      setCurrentUser(user);
    } else throw new Error(JSON.stringify({ message, status }));
  }

  return (
    <>
      <Navigation />
      <Homepage login={login} currentUser={currentUser}/>
      <RoutesList login={login} currentUser={currentUser}/>
    </>
  );
}
