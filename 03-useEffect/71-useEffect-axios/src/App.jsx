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

  // Lefut betöltéskor és minden alkalommal, amikor a kiválasztott ország megváltozik
  useEffect(() => {
    // Ha a válasz megérkezése előtt másik országot választanak, a régi választ eldobjuk,
    // különben egy később beérkező, elavult válasz felülírhatná a frisset.
    let ignore = false;

    async function fetchCountryDatas() {
      try {
        const res = await axios.get(
          `https://restcountries.com/v3.1/alpha/${countryCode}`
        );
        // A válasz egy tömb, az első eleme az ország objektuma
        if (!ignore) {
          setCountryDatas(res.data[0]);
        }
      } catch (error) {
        console.error("Hiba történt az adatok lekérésekor:", error);
      }
    }

    fetchCountryDatas();

    return () => {
      ignore = true;
    };
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

      <CountryCard countryData={countryDatas} />
    </>
  );
}

export default App;
