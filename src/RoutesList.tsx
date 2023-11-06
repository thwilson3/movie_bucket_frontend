import { Route, Routes, Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./UserContext";
import {
  LoginFunction,
  LogoutFunction,
  SignupFunction,
  UserContextType,
} from "./interfaces";

import Homepage from "./components/Homepage";
import BucketsContainer from "./components/BucketsContainer";
import MoviesContainer from "./components/MoviesContainer";
import AddBucketContainer from "./components/AddBucketContainer";
import SignUpContainer from "./components/SignUpContainer";
import LoginContainer from "./components/LoginContainer";

export default function RoutesList({
  signup,
  login,
  logout,
}: {
  signup: SignupFunction;
  login: LoginFunction;
  logout: LogoutFunction;
}) {
  const { userContext } = useContext(UserContext) as UserContextType;

  return (
    <Routes>
      <Route path="/" element={<Homepage logout={logout} />} />
      <Route path="/login" element={<LoginContainer login={login} />} />
      <Route path="/signup" element={<SignUpContainer signup={signup} />} />
      <Route
        path="/buckets"
        element={
          userContext !== null ? <BucketsContainer /> : <Navigate to={"/"} />
        }
      />
      <Route
        path="/buckets/add"
        element={
          userContext !== null ? <AddBucketContainer /> : <Navigate to={"/"} />
        }
      />
      <Route
        path="/buckets/:id"
        element={
          userContext !== null ? <MoviesContainer /> : <Navigate to={"/"} />
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
