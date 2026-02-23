import { Context, useState } from "react";
import UserContext from "./UserContext.jsx";
import { useContext } from "react";
import axios from "axios";

export const UserProvider = ({ children }) => {
    const backendURL = "https://retoolapi.dev/DGdNBJ/authdatas";

    const [user, setUser] = useState(
        {
            "id": null,
            "email": null,
            "fullname": null,
            "password": null,
            "role": "guest",
            "loggedIn": false
        });

    const login = async (userData) => {
        {/* kapott adatok ellenőrzése */ }
        if (!userData.email || !userData.password) {
            return;
        }
        {/* friss felhasználói adatok lekérése az API-ról */ }
        const users = await axios.get(backendURL).then((response) => {
            const foundUser = response.data.find((user) => user.email === userData.email && user.password === userData.password);
        });

        if (foundUser) {
            setUser({
                ...userData,
                loggedIn: true
            });
        } else {
            alert("Hibás email vagy jelszó!");
        }

    }
    const logout = () => {
        setUser({
            id: null,
            email: null,
            fullname: null,
            password: null,
            role: "guest",
            loggedIn: false
        });
    };

    return (
        <UserContext.Provider value={{ user, setUser, login, logout }}>
            {children}
        </UserContext.Provider>
    );
}

export default function useAuth() {
    return useContext(UserContext);
}
