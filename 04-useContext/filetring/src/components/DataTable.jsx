import { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import LoadingData from "./LoadingData";
import FilterForm from "./FilterForm";
import "./DataTable.css";

const DataTable = () => {
  const { adatok } = useContext(UserContext);

  const [filters, setFilters] = useState({
    TeljesNev: "",
    ev: "",
    honap: "",
    nap: "",
    Magassag: "",
    Gyerekek: "",
    Hirlevel: false,
  });

  const [szurtAdatok, setSzurtAdatok] = useState(adatok);

  useEffect(() => {
    setSzurtAdatok(adatok);
  }, [adatok]);

  // ✅ KOMPLEX SZŰRÉS EGY HELYEN
  const szuresInditasa = () => {
    console.log("Szűrés indítva a következő feltételekkel:", filters);
    let eredmeny = adatok.filter((sor) => {
      // ✅ NÉV
      const nevOK =
        !filters.TeljesNev ||
        sor.TeljesNev.toLowerCase().includes(filters.TeljesNev.toLowerCase());

      // ✅ MAGASSÁG (MIN)
      const magassagOK =
        !filters.Magassag || sor.Magassag >= Number(filters.Magassag);

      // ✅ GYEREKEK (PONTOS)
      const gyerekOK =
        !filters.Gyerekek || sor.Gyerekek === Number(filters.Gyerekek);

      // ✅ HÍRLEVÉL
      const hirlevelOK = !filters.Hirlevel || sor.HirleveletKer === true;

      // ✅ SZÜLETÉSI DÁTUM (ÉV-HÓ-NAP)
      let datumOK = true;
      if (filters.ev || filters.honap || filters.nap) {
        const d = new Date(sor.Szuletett);

        if (filters.ev && d.getFullYear() !== Number(filters.ev))
          datumOK = false;
        if (filters.honap && d.getMonth() + 1 !== Number(filters.honap))
          datumOK = false;
        if (filters.nap && d.getDate() !== Number(filters.nap)) datumOK = false;
      }

      return nevOK && magassagOK && gyerekOK && hirlevelOK && datumOK;
    });

    setSzurtAdatok(eredmeny);
  };

  return (
    <div>
      <LoadingData />
      <table>
        <thead>
          <tr>
            <th>
              <button type="button" onClick={szuresInditasa}>
                🔍
              </button>
            </th>
            <th>Teljes név</th>
            <th>Született</th>
            <th>Magasság</th>
            <th>Gyerekek</th>
            <th>Hírlevél</th>
          </tr>

          <tr>
            <FilterForm setFilters={setFilters} />
          </tr>
        </thead>

        <tbody>
          {szurtAdatok.map((data) => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.TeljesNev}</td>
              <td>{new Date(data.Szuletett).toLocaleDateString()}</td>
              <td>{data.Magassag}</td>
              <td>{data.Gyerekek}</td>
              <td>
                <input type="checkbox" checked={data.HirleveletKer} readOnly />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <p>Találatok száma: {szurtAdatok.length}</p>
    </div>
  );
};

export default DataTable;
