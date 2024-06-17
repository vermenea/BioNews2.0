import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import {AuthContextProviderProps, AuthContextType, User} from '../types/types'

export const AuthContext = createContext<AuthContextType>({
  currentUser: null,
  login: async () => {},
  logout: async () => {}
});

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(
    JSON.parse(localStorage.getItem("user") || "null")
  );

  const login = async (inputs: { username: string; password: string }) => {
    const response = await axios.post("http://localhost:8800/api/auth/login", inputs);
    setCurrentUser(response.data);
  };

  const logout = async () => {
    await axios.post("http://localhost:8800/api/auth/logout");
    setCurrentUser(null);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
