import { useState, useContext, createContext, Children } from "react";
const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: "DEO-DECODE",
    page: 1,
    itemLimit: 10,
  });
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom Hook
const useAuth = () => useContext(AuthContext);
export { AuthProvider, useAuth };
