import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);
export const AuthContextProvider = ({ children }) => {
  // const navigate = useNavigate();
  const [refetchUser, setRefetchUser] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  useEffect(() => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
  }, [token, user]);

  const logout = () => {
    setToken("");
    setUser(null);
  };
  const login = (token) => {
    setToken(token);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        login,
        logout,
        setUser,
        refetchUser,
        setRefetchUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
