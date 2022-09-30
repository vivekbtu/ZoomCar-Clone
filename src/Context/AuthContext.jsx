
import React, { useState } from "react";

//  CREATE
// PROVIDE
// CONSUME

export const AuthContext = React.createContext();

function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(true);

  const toggleAuth = () => {
    setIsAuth(!isAuth);
  };

  return (
    <AuthContext.Provider value={{ isAuth, toggleAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
