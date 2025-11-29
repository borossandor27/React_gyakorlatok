import { useState, useEffect } from "react";
import axios from "axios";
import CountryCard from "./components/CountryCard";

function App() {
  const [countryDatas, setCountryDatas] = useState(null);
  let countryCode = "pl";
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
  }, []);

  return (
    <>
      <CountryCard countryData={countryDatas ? countryDatas : null} />
    </>
  );
}

export default App;
