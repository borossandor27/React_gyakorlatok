import { useState } from "react";

const Login = ({ setToken, setShowRegister }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        const res = await fetch("http://localhost:5000/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password })
        });

        const data = await res.json();
        if (data.token) {
            localStorage.setItem("token", data.token);
            setToken(data.token);
        } else {
            alert(data.error);
        }
    };

    return (
        <div>
            <h2>Bejelentkezés</h2>
            <form onSubmit={handleLogin}>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Felhasználónév" required />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Jelszó" required />
                <button type="submit">Bejelentkezés</button>
            </form>
            <p>Még nincs fiókod? <button onClick={() => setShowRegister(true)}>Regisztráció</button></p>
        </div>
    );
};

export default Login;
