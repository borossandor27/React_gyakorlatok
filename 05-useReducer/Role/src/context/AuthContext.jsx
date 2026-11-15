import { createContext, useContext } from "react";

// A context és a hozzá tartozó saját hook külön fájlban van a Provider komponenstől.
// Így a komponenst tartalmazó fájl csak komponenst exportál, ami a fejlesztés közbeni
// gyors frissítés (Fast Refresh) megbízható működéséhez kell.
export const AuthContext = createContext(null);

// Saját hook a context könnyű eléréséhez
export const useAuth = () => useContext(AuthContext);
