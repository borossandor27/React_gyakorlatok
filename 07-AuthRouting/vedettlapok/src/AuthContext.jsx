import { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext({});
const users=[
  {email: "user@example.com", password: "password123", token: "abcd1234"},
  {email: "admin@example.com", password: "adminpass", token: "admin1234"}
];
const tokenKey = "auth_token";
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Token ellenőrzése localStorage-ből vagy API-ból
    const token = localStorage.getItem(tokenKey);
    if (token) {
      // Validálás API hívással (vagy helyileg)
      const fetchUserData = async (token) => {
        // Itt szimuláljuk az API hívást
        const foundUser = users.find(u => u.token === token);
        if (foundUser) {
          setUser(foundUser);
        } else {
          localStorage.removeItem(tokenKey);
        }
        setLoading(false);
      };
      fetchUserData(token);
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (credentials) => {
    // Bejelentkezési logika
    const foundUser = users.find(
      (u) => u.email === credentials.email && u.password === credentials.password
    );
    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem(tokenKey, foundUser.token);
    } else {
      throw new Error("Invalid credentials");
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(tokenKey);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook a könnyű hozzáféréshez
export const useAuth = () => useContext(AuthContext);
