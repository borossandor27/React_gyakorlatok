import React, { createContext, useState, useContext, useEffect } from "react";

// Firestore helyett LocalStorage-ot használunk az adatok megőrzésére,
// de éles alkalmazásban Firebase Firestore lenne a javasolt.
const LOCAL_STORAGE_KEY = 'authUser';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({
        isLoggedIn: false,
        role: "guest",
    });
    const [isLoading, setIsLoading] = useState(true); // ÚJ: Betöltési állapot

    // JSON tömb a felhasználói adatokkal (ez lehetne egy külső adatbázis)
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

    // Alkalmazás indításakor betöltjük a mentett adatokat a LocalStorage-ból
    useEffect(() => {
        const loadUserFromStorage = () => {
            setIsLoading(true); // Betöltés kezdete
            
            // Ellenőrizni kell, hogy a környezetben elérhető-e a localStorage (pl. szerveroldali renderelés esetén nem)
            if (typeof window !== 'undefined' && window.localStorage) {
                const savedUser = localStorage.getItem(LOCAL_STORAGE_KEY);
                if (savedUser) {
                    try {
                        // Adatok betöltése és user állapot beállítása
                        const parsedUser = JSON.parse(savedUser);
                        setUser(parsedUser);
                    } catch (error) {
                        console.error('Hibás user adat a localStorage-ban. Törölve:', error);
                        // Hiba esetén töröljük a hibás bejegyzést
                        localStorage.removeItem(LOCAL_STORAGE_KEY);
                    }
                }
            }
            
            setIsLoading(false); // Betöltés vége
        };

        loadUserFromStorage();
    }, []);

    const login = (username, password) => {
        // Ellenőrzés a JSON tömbben
        const userData = users.find(user => 
            user.username === username && user.password === password
        );

        if (userData) {
            // Létrehozzuk a bejelentkezett felhasználói objektumot
            const loggedInUser = {
                isLoggedIn: true,
                role: userData.role,
                userName: userData.username,
                userId: userData.userId,
                userEmail: userData.userEmail
            };

            // 1. Állapot frissítése
            setUser(loggedInUser);

            // 2. Tartós tárolás localStorage-ban (a következő rendereléshez)
            // Itt használjuk a localStorage.setItem() függvényt
            if (typeof window !== 'undefined' && window.localStorage) {
                localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(loggedInUser));
            }

            return { success: true, message: `Sikeres bejelentkezés! Üdvözöljük, ${userData.username}!` };
        } else {
            // Sikertelen bejelentkezés
            return { success: false, message: 'Hibás felhasználónév vagy jelszó!' };
        }
    };

    const logout = () => {
        console.log(`Kijelentkezés: ${user.userName}`);
        
        // 1. Tartós tároló törlése
        // Itt használjuk a localStorage.removeItem() függvényt
        if (typeof window !== 'undefined' && window.localStorage) {
            localStorage.removeItem(LOCAL_STORAGE_KEY);
        }

        // 2. Állapot visszaállítása
        setUser({ isLoggedIn: false, role: "guest" });
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, isLoading }}> {/* ÚJ: isLoading hozzáadva */}
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);