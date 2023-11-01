import { Route, Routes, Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./UserContext";
import { UserContextType } from "./interfaces";

import Homepage from "./components/Homepage";
import SignUpForm from "./components/SignUpForm";
import LoginContainer from "./components/LogInContainer";
import BucketsContainer from "./components/BucketsContainer";
import MoviesContainer from "./components/MoviesContainer";
import BucketForm from "./components/BucketForm";
import AddBucketContainer from "./components/AddBucketContainer";

export default function RoutesList({ signup, login, logout }) {
    const { currentUser } = useContext(UserContext) as UserContextType;

    return (
      <Routes>
        <Route path="/" element={<Homepage login={login} logout={logout}/>} />
        <Route path="/login" element={<LoginContainer login={login} logout={logout}/>} />
        <Route path="/signup" element={<SignUpForm signup={signup} />} />
        <Route path="/buckets" element={currentUser !== null ? <BucketsContainer /> : <Navigate to={"/"} />} />
        <Route path="/buckets/add" element={currentUser !== null ? <AddBucketContainer /> : <Navigate to={"/"} />}/>
        <Route path="/buckets/:id" element={currentUser !== null ? <MoviesContainer /> : <Navigate to={"/"} />}/>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    );
  }