import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    isLoggedIn: false,
    role: "guest",
  });

  // JSON tömb a felhasználói adatokkal
  const users = [
    { 
      username: "admin", 
      password: "admin123", 
      role: "admin", 
      userId: 1, 
      userEmail: "admin@example.com" 
    },
    { 
      username: "user", 
      password: "user123", 
      role: "registered", 
      userId: 2, 
      userEmail: "user@example.com" 
    },
    { 
      username: "test", 
      password: "test123", 
      role: "registered", 
      userId: 3, 
      userEmail: "test@example.com" 
    }
  ];

  const login = (username, password) => {
    // Ellenőrzés a JSON tömbben
    const userData = users.find(user => 
      user.username === username && user.password === password
    );

    if (userData) {
      // Sikeres bejelentkezés
      setUser({
        isLoggedIn: true,
        role: userData.role,
        userName: userData.username,
        userId: userData.userId,
        userEmail: userData.userEmail
      });
      return { success: true, message: `Sikeres bejelentkezés! Üdvözöljük, ${userData.username}!` };
    } else {
      // Sikertelen bejelentkezés
      return { success: false, message: 'Hibás felhasználónév vagy jelszó!' };
    }
  };

  const logout = () => {
    setUser({ isLoggedIn: false, role: "guest" });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);