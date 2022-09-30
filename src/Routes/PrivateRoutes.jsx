
import React from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const { isAuth } = React.useContext(AuthContext);

  if (!isAuth) {
    return <Navigate to="/selectcountry" />;
  }

  return children;
}

export default PrivateRoute;

// <PrivateRoute>children</PrivateRoute>
