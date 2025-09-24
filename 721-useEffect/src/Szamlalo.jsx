import { useState, useEffect } from "react";

const Szamlalo = () => {
    const [szam, setSzam] = useState(0);
    const [query, setQuery] = useState("rock");

    // 1️⃣ Lefut egyszer, amikor betöltődik a komponens
    useEffect(() => {
        console.log("Komponens betöltve 🚀");
    }, []);

    // 2️⃣ Lefut minden render után
    useEffect(() => {
        console.log("Render után mindig lefut (szám =", szam, ")");
    });

    // 3️⃣ Lefut, ha a szam változik
    useEffect(() => {
        console.log("A szam értéke megváltozott 👉", szam);
    }, [szam]);

    // 4️⃣ Lefut, ha a query változik
    useEffect(() => {
        console.log("A keresési kifejezés megváltozott 👉", query);
    }, [query]);

    // 5️⃣ Cleanup példa (timer törlése)
    useEffect(() => {
        const timer = setInterval(() => {
            console.log("Másodpercenként fut (szám:", szam, ")");
        }, 1000);

        return () => {
            clearInterval(timer);
            console.log("Timer leállítva ⏹");
        };
    }, [szam]);

    return (
        <div className="container mt-4">
            <h2>Számláló példaprogram</h2>
            <p>Aktuális szám: {szam}</p>
            <button className="btn btn-primary me-2" onClick={() => setSzam(szam + 1)}>
                Növelés
            </button>
            <button className="btn btn-danger" onClick={() => setSzam(0)}>
                Visszaállítás
            </button>

            <div className="mt-3">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Írj be egy keresési kifejezést"
                    className="form-control"
                />
            </div>
        </div>
    );
};

export default Szamlalo;
