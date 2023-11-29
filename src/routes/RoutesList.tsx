import { Route, Routes, Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../shared/UserContext";
import {
  LoginFunction,
  LogoutFunction,
  SignupFunction,
  UserContextType,
} from "../types";

import Homepage from "../components/Homepage";
import BucketsContainer from "../containers/BucketsContainer";
import MoviesContainer from "../containers/MoviesContainer";
import AddBucketContainer from "../containers/AddBucketContainer";
import SignUpContainer from "../containers/SignUpContainer";
import LoginContainer from "../containers/LoginContainer";

export default function RoutesList({
  signup,
  login,
  logout,
}: {
  signup: SignupFunction;
  login: LoginFunction;
  logout: LogoutFunction;
}) {
  const { currentUser } = useContext(UserContext) as UserContextType;

  return (
    <Routes>
      <Route path="/" element={<Homepage logout={logout} />} />
      <Route path="/login" element={<LoginContainer login={login} />} />
      <Route path="/signup" element={<SignUpContainer signup={signup} />} />
      {/* //TODO: could make private route component */}
      <Route
        path="/buckets"
        element={
          currentUser !== null ? <BucketsContainer /> : <Navigate to={"/"} />
        }
      />
      <Route
        path="/buckets/add"
        element={
          currentUser !== null ? <AddBucketContainer /> : <Navigate to={"/"} />
        }
      />
      <Route
        path="/buckets/:id"
        element={
          currentUser !== null ? <MoviesContainer /> : <Navigate to={"/"} />
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
