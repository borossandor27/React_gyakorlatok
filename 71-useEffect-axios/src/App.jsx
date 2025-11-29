import { useState, useEffect } from "react";
import axios from "axios";
import CountryCard from "./components/CountryCard";

function App() {
  const [countryDatas, setCountryDatas] = useState(null);
  const [countryCode, setCountryCode] = useState("hu");

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function fetchCountries() {
      try {
        const res = await axios.get(
          "https://restcountries.com/v3.1/all?fields=name,cca2"
        );
        const sortedCountries = res.data.sort((a, b) =>
          a.name.common.localeCompare(b.name.common, "hu")
        );
        setCountries(sortedCountries);
      } catch (error) {
        console.error("Hiba az országok lekérésekor:", error);
      }
    }
    fetchCountries();
  }, []);

  async function fetchCountryDatas() {
    try {
      const res = await axios.get(
        `https://restcountries.com/v3.1/alpha/${countryCode}`
      );
      // 1. Lépés: Kinyeri a letöltött adatokat a 'data' tulajdonságból
      const countryArray = res.data[0];

      //console.log("Letöltött ország adatok (tömb):", countryArray);

      // 2. Lépés: Átadja a setCountryDatas-nak a TÖMB ELSŐ ELEMÉT (az ország objektumot)
      setCountryDatas(countryArray);
    } catch (error) {
      console.log("Hiba tortent az adatok lekeresekor:", error);
    }
  }

  useEffect(() => {
    fetchCountryDatas();
  }, [countryCode]);

  return (
    <>
      <div className="country-selector">
        <select
          onChange={(e) => setCountryCode(e.target.value)}
          value={countryCode}
        >
          {countries.map((country) => (
            <option key={country.cca2} value={country.cca2.toLowerCase()}>
              {country.name.common}
            </option>
          ))}
        </select>
      </div>

      <CountryCard countryData={countryDatas ? countryDatas : null} />
    </>
  );
}

export default App;
