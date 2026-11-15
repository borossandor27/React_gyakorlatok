import { useState } from "react";
import useAuth from "../context/useAuth.js";

const LoginPage = () => {
    const { login } = useAuth();
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);
        try {
            const success = await login(credentials);
            if (!success) {
                setError("Hibás email vagy jelszó!");
            }
        } catch (err) {
            console.error("Bejelentkezési hiba:", err);
            setError("A szerver nem érhető el.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Bejelentkezés</h2>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={credentials.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="password">Jelszó:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit" disabled={loading}>
                {loading ? "Belépés..." : "Belépés"}
            </button>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
    );
};

export default LoginPage;
