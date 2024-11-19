"use client";
import React, { createContext, useEffect, useState } from "react";
import { setCookie, getCookie, deleteCookie } from "cookies-next";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(getCookie("token") || "");
  const [userType, setUserType] = useState(null);

  const logIn = (authToken, username, userType) => {
    setToken(authToken);
    setUser({ username });
    setUserType(userType); // Store userType as a direct value
    setCookie("token", authToken);
    setCookie("username", username);
    setCookie("userType", userType); // Save userType in cookies
  };

  const logOut = () => {
    setToken("");
    setUser(null);
    setUserType(null);
    deleteCookie("token");
    deleteCookie("username");
    deleteCookie("userType");
  };

  useEffect(() => {
    const savedUsername = getCookie("username");
    const savedUserType = getCookie("userType");

    if (savedUsername) {
      setUser({ username: savedUsername });
    }

    if (savedUserType) {
      setUserType(savedUserType); 
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, token, logIn, logOut, userType }}>
      {children}
    </AuthContext.Provider>
  );
};
