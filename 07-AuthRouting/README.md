# React védett oldalak *(Protected Routes)*

Vannak oldalak, amelyeket csak adott felhasználók érhetnek el. pl. admin felület, saját profil, rendelési tételek, ...
Ahhoz, hogy védett lapokat készíts React alkalmazásban *(pl. csak bejelentkezett felhasználók számára elérhető oldalakat)*, React Router (v6) és hook-ok kombinációját kell használnod.

## 1. React Router hook-ok (kötelező)

- `useNavigate()` - navigáláshoz *(pl. bejelentkezés utáni átirányítás)*
- `useLocation()` - az aktuális útvonal információinak lekérdezéséhez
- `useParams()` - útvonal paraméterek olvasásához

## 2. Állapotkezeléshez *(bejelentkezési státusz)*

- `useState()` - egyszerű állapotkezelésre
- `useContext()` - komplexebb, globális állapotkezelésre (auth kontextus)
- `useReducer()` - összetett állapotlogikára

## AuthContext – bejelentkezési állapot kezelése

A hitelesítési állapotot Context segítségével kezeljük.

### AuthContext létrehozása

Minden bejelentkezésssel kapcsolatos adatot *(user, login, logout)* itt hozunk lére, vagy itt módosítunk.

    ```jsx
    import { createContext, useContext, useState } from "react";


    const AuthContext = createContext();


    export function AuthProvider({ children }) {
        const [user, setUser] = useState(null);


        const login = (username) => {
            setUser({ name: username });
        };


        const logout = () => {
            setUser(null);
        };


        return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
        );
    }


    export function useAuth() {
        return useContext(AuthContext);
    }
    ```
👉 A `useAuth()` hook segítségével bárhonnan elérjük a bejelentkezési állapotot.

### ProtectedRoute komponens

Ez a komponens eldönti, hogy megjeleníti az oldalt vagy átirányít a bejelentkezésre

    ```jsx
    import { Navigate } from "react-router-dom";
    import { useAuth } from "./AuthContext";


    function ProtectedRoute({ children }) {
        const { user } = useAuth();

        if (!user) {
            return <Navigate to="/login" />;
        }

        return children;
    }

    export default ProtectedRoute;
    ```

### Routes és védett oldalak

A védett oldalakat *(pl. profile)* a `ProtectedRoute` komponensbe ágyazzuk

    ```jsx
    import { Routes, Route } from "react-router-dom";
    import ProtectedRoute from "./ProtectedRoute";

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route
            path="/profile"
            element={
                <ProtectedRoute>
                    <Profile />
                </ProtectedRoute>
            }
        />
    </Routes>
    ```

### NavLink – navigáció kezelése

A navigációnál az `AuthContext` tartalmától függően irányítunk

    ```jsx
    import { NavLink } from "react-router-dom";
    import { useAuth } from "./AuthContext";


    function Navbar() {
    const { user, logout } = useAuth();


    return (
        <nav>
            <NavLink to="/">Főoldal</NavLink>

            {user && <NavLink to="/profile">Profil</NavLink>}

            {!user && <NavLink to="/login">Belépés</NavLink>}

            {user && <button onClick={logout}>Kilépés</button>}
        </nav>
    );
    }
    ```

### Login oldal

A Login oldalon aktualizáljuk az `AuthContext` változóit

    ```jsx
    import { useAuth } from "./AuthContext";
    import { useNavigate } from "react-router-dom";


    function Login() {
        const { login } = useAuth();
        const navigate = useNavigate();

        const handleLogin = () => {
            login("Diák");
            navigate("/profile");
        };

        return (
            <div>
                <h2>Bejelentkezés</h2>
                <button onClick={handleLogin}>Belépés</button>
            </div>
        );
    }

    export default Login;
    ```
