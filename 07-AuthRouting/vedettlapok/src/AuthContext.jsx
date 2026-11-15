import { createContext, useState, useContext } from "react";

const AuthContext = createContext({});
const users=[
  {email: "user@example.com", password: "password123", token: "abcd1234"},
  {email: "admin@example.com", password: "adminpass", token: "admin1234"}
];
const tokenKey = "auth_token";
export const AuthProvider = ({ children }) => {
  // A kezdőállapotot a localStorage-ben tárolt tokenből állítjuk elő.
  // A useState-nek átadott függvény csak az első rendereléskor fut le.
  const [user, setUser] = useState(() => {
    const token = localStorage.getItem(tokenKey);
    const foundUser = users.find((u) => u.token === token);
    // A jelszót nem tartjuk az állapotban
    return foundUser ? { email: foundUser.email } : null;
  });

  // Itt a token ellenőrzése helyben, azonnal megtörténik, ezért nincs várakozás.
  // Ha a tokent API hívással ellenőriznénk, a válasz megérkezéséig true lenne.
  const loading = false;

  const login = async (credentials) => {
    // Bejelentkezési logika
    const foundUser = users.find(
      (u) => u.email === credentials.email && u.password === credentials.password
    );
    if (foundUser) {
      setUser({ email: foundUser.email });
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
