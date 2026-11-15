import { useState } from "react";
import axios from "axios";
import UserContext from "./UserContext.jsx";
import { guestUser } from "./guestUser.js";

const backendURL = "https://retoolapi.dev/DGdNBJ/authdatas";

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(guestUser);

    // Bejelentkezés: igazzal tér vissza, ha sikerült.
    // FIGYELEM: a példa kedvéért a kliens tölti le az összes felhasználót, és ő hasonlítja
    // össze a jelszót. Éles alkalmazásban az ellenőrzést mindig a szerver végzi!
    const login = async ({ email, password }) => {
        // kapott adatok ellenőrzése
        if (!email || !password) {
            return false;
        }

        // friss felhasználói adatok lekérése az API-ról
        const response = await axios.get(backendURL);
        const foundUser = response.data.find(
            // az API-ban a jelszó szám, az űrlapból szöveg érkezik
            (u) => u.email === email && String(u.password) === String(password)
        );

        if (!foundUser) {
            return false;
        }

        setUser({
            ...foundUser,
            role: foundUser.role ?? "registered",
            loggedIn: true,
        });
        return true;
    };

    const logout = () => {
        setUser(guestUser);
    };

    return (
        <UserContext.Provider value={{ user, setUser, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};
