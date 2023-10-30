import { Route, Routes, Navigate } from "react-router-dom";
import { useContext } from "react";
import Homepage from "./components/Homepage";
import LoginForm from "./components/LoginForm";
import { UserContext } from "./UserContext";
import { UserContextType } from "./interfaces";
import SignUpForm from "./components/SignUpForm";
import LoginContainer from "./components/LogInContainer";
import BucketContainer from "./components/BucketContainer";

export default function RoutesList({ signup, login, logout }) {
    const { currentUser } = useContext(UserContext) as UserContextType;

    return (
      <Routes>
        <Route path="/" element={<Homepage login={login} logout={logout}/>} />
        {/* <Route
          path="/buckets"
          element={currentUser?.username ? <CompanyList /> : <Navigate to={"/"} />}
        /> */}
        <Route path="/login" element={<LoginContainer login={login} logout={logout}/>} />
        <Route path="/signup" element={<SignUpForm signup={signup} />} />
        <Route path="/buckets" element={<BucketContainer />} />
        {/* <Route
          path="/profile"
          element={
            currentUser?.username ? (
              <ProfileForm handleRequest={profile} currentUser={currentUser} />
            ) : (
              <Navigate to={"/"} />
            )
          }
        /> */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    );
  }