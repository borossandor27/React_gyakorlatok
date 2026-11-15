import { useContext } from "react";
import UserContext from "./UserContext.jsx";

// Saját hook: a komponenseknek nem kell a contextet külön importálniuk
export default function useAuth() {
    return useContext(UserContext);
}
