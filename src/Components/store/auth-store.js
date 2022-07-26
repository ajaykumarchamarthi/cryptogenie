import React, { useState } from "react";

const AuthContext = React.createContext({
  isLoggedIn: "false",
  accessToken: "",
  login: () => {},
});

export const AuthProvider = (props) => {
  const [accessToken, setAccessToken] = useState("");

  const loginHandler = (token) => {
    setAccessToken(token);
    localStorage.setItem("persistloggedIn", "1");
  };

  const isLoggedIn = localStorage.getItem("persistloggedIn");

  const contextValue = {
    isLoggedIn: isLoggedIn,
    accessToken: accessToken,
    setAccessToken: setAccessToken,
    login: loginHandler,
  };

  return (
    <AuthContext.Provider value={{ contextValue }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
