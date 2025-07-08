import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setAuth] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (auth) setAuth(true);
  }, []);

  const login = (user, pass) => {
    if (user === "admin" && pass === "1234") {
      localStorage.setItem("auth", true);
      setAuth(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem("auth");
    setAuth(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
