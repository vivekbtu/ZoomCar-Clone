import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContextProvider";

export default function PrivateRoute({ children }) {
  const { isAuth } = useContext(AuthContext);
  const LoggedInStatusLS = localStorage.getItem("isLoggedIn");

  if (!isAuth || !LoggedInStatusLS) {
    return <Navigate to="/search" />;
  }

  return children;
}
