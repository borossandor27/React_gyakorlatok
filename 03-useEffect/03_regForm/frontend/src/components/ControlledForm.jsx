import React, { useState, useRef } from "react";
import axios from "axios";

const API_URL = "http://localhost:3000/api/user";

function ControlledForm() {
  // ----------------------------------------------------
  // A. CONTROLLED MEZŐK (Vezetéknév, Keresztnév, Jelszó, Szül.idő, Hírlevél, Érdeklődési terület)
  // Az állapot (state) tárolja az aktuális értéket, és a React "vezérli" azt.
  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    password: "",
    dob: "", // Dátum (controlled)
    newsletter: false, // Checkbox (controlled)
    interest: "frontend", // Select (controlled)
    loading: false, // Betöltés jelző
    message: "", // Visszajelzés a felhasználónak
  });

  // ----------------------------------------------------
  // B. UNCONTROLLED MEZŐ (Irányítószám)
  // A ref (useRef) közvetlenül a DOM-elemet éri el, a React nem "vezérli" az értékét.
  const zipCodeRef = useRef(null);

  // ----------------------------------------------------
  // C. ESEMÉNYKEZELŐK

  // Általános kezelő a Controlled szöveges mezőkhöz, dátumhoz és select-hez.
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Kezeli a checkboxot (boolean érték) és a többit (string érték)
    const newValue = type === "checkbox" ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  // Űrlap elküldésének kezelése
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormData((prevData) => ({ ...prevData, loading: true, message: "" }));

    // 1. Összegyűjtjük az adatokat
    // A Controlled adatok az állapotból származnak
    const controlledData = {
      lastName: formData.lastName,
      firstName: formData.firstName,
      password: formData.password,
      dob: formData.dob,
      newsletter: formData.newsletter,
      interest: formData.interest,
    };

    // Az Uncontrolled adat közvetlenül a ref-ből származik
    const uncontrolledData = {
      zipCode: zipCodeRef.current ? zipCodeRef.current.value : "",
    };

    // Az elküldendő teljes adatcsomag
    const dataToSend = { ...controlledData, ...uncontrolledData };

    console.log("Adatok küldésre készen:", dataToSend);

    // 2. POST kérés az Axios-szal
    try {
      // Megjegyzés: Mivel ez csak egy példa, a valós szerver nem biztos, hogy létezik vagy
      // válaszol, de itt látod az Axios használatát.
      const response = await axios.post(API_URL, dataToSend);

      setFormData((prevData) => ({
        ...prevData,
        message: `Sikeres regisztráció! Szerver válasz: ${response.status}`,
        // Tisztíthatod az űrlapot itt, ha sikeres volt
        // lastName: '', firstName: '', password: '', dob: '', zipCode: '', newsletter: false, interest: 'frontend'
      }));
    } catch (error) {
      console.error("Hiba a regisztráció során:", error);

      let errorMessage = "Hiba történt a kommunikáció során.";
      if (error.response) {
        // A szerver 4xx/5xx hibát küldött
        errorMessage = `Hiba: ${error.response.status} - ${
          error.response.data?.message || "Ismeretlen szerverhiba"
        }`;
      } else if (error.request) {
        // A kérés elment, de nem kaptunk választ (pl. a szerver nem fut)
        errorMessage = `A kérés elküldve, de a szerver (${API_URL}) nem válaszolt. Lehet, hogy nem fut.`;
      }

      setFormData((prevData) => ({
        ...prevData,
        message: errorMessage,
      }));
    } finally {
      setFormData((prevData) => ({ ...prevData, loading: false }));
    }
  };

  // ----------------------------------------------------
  // D. KOMPONENS RENDERELÉSE
  return (
    <div
      style={{
        id: "formContainer",
        padding: "20px",
        maxWidth: "400px",
        margin: "auto",
        border: "1px solid #ccc",
      }}
    >
      <h3>👤 Regisztrációs Űrlap</h3>
      <form onSubmit={handleSubmit}>
        {/* --- CONTROLLED MEZŐK --- */}
        <h4>Vezérelt (Controlled) mezők</h4>

        {/* Vezetéknév */}
        <div className="inputRow">
          <label htmlFor="firstName">Vezetéknév:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Keresztnév */}
        <div className="inputRow">  
        <label htmlFor="lastName">Keresztnév:</label>
        <input
          type="text"
          id="lasttName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />

        {/* Jelszó */}
        <div className="inputRow">  
        <label htmlFor="password">Jelszó:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        </div>

        {/* Születési idő */}
        <div className="inputRow">
        <label htmlFor="dob">Születési idő:</label>
        <input
          type="date"
          id="dob"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
        />
        </div>

        {/* Érdeklődési terület (Select) */}
        <div className="inputRow"></div>
        <label htmlFor="interest">Érdeklődési terület:</label>
        <select
          id="interest"
          name="interest"
          value={formData.interest}
          onChange={handleChange}
        >
          <option value="frontend">Frontend Fejlesztés</option>
          <option value="backend">Backend Fejlesztés</option>
          <option value="devops">DevOps</option>
        </select>
        </div>
        {/* Hírlevél (Checkbox) */}
        <div className="inputRow">
        <label>
          <input
            type="checkbox"
            name="newsletter"
            checked={formData.newsletter}
            onChange={handleChange}
          />
          Kérek hírlevelet
        </label>
        </div>
        <hr />

        {/* --- UNCONTROLLED MEZŐ --- */}
        <h4>Vezérletlen (Uncontrolled) mező</h4>

        {/* Irányítószám (useRef-fel érjük el) */}
        <label htmlFor="zipCode">Irányítószám:</label>
        <input
          type="text"
          id="zipCode"
          name="zipCode"
          ref={zipCodeRef}
          placeholder="Pl.: 4000"
          required
        />

        <hr />

        {/* Gomb és visszajelzés */}
        <button type="submit" disabled={formData.loading}>
          {formData.loading ? "Küldés..." : "Regisztráció"}
        </button>

        {formData.message && (
          <p style={{ marginTop: "10px", fontWeight: "bold" }}>
            {formData.message}
          </p>
        )}
      </form>

      {/* Űrlap adatok debuggolása */}
      <pre
        style={{
          backgroundColor: "#f4f4f4",
          padding: "10px",
          marginTop: "20px",
        }}
      >
        Controlled adatok (State):
        <br />
        {JSON.stringify(formData, null, 2)}
      </pre>
    </div>
  );
}

export default ControlledForm;
