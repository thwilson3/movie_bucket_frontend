import { Route, Routes, Navigate } from "react-router-dom";
import { useContext } from "react";
import Homepage from "./components/Homepage";
import LoginForm from "./components/LoginForm";

export default function RoutesList({ register, login, profile, currentUser }) {
    const { activeUser } = useContext(userContext);

    return (
      <Routes>
        <Route path="/" element={<Homepage login={login}/>} />
        <Route
          path="/companies"
          element={activeUser.username ? <CompanyList /> : <Navigate to={"/"} />}
        />
        {/* <Route
          path="/companies/:handle"
          element={
            activeUser.username ? <CompanyDetail /> : <Navigate to={"/"} />
          }
        />
        <Route
          path="/jobs"
          element={activeUser.username ? <JobList /> : <Navigate to={"/"} />}
        /> */}
        <Route path="/login" element={<LoginForm login={login} />} />
        <Route path="/signup" element={<SignUpForm handleRequest={register} />} />
        <Route
          path="/profile"
          element={
            activeUser.username ? (
              <ProfileForm handleRequest={profile} currentUser={currentUser} />
            ) : (
              <Navigate to={"/"} />
            )
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    );
  }