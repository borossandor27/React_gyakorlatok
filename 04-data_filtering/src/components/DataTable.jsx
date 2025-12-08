import { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import LoadingData from "./LoadingData";
import FilterForm from "./FilterForm";

const DataTable = () => {
  const { adatok } = useContext(UserContext);

  const [filters, setFilters] = useState({});
  const [szurtAdatok, setSzurtAdatok] = useState([]);

  useEffect(() => {
    setSzurtAdatok(adatok);
  }, [filters]);

  const szuresInditasa = () => {
    let eredmeny = adatok.filter((sor) => {
      return (
        (!filters.TeljesNev ||
          sor.TeljesNev
            .toLowerCase()
            .includes(filters.TeljesNev.toLowerCase())) &&
        (!filters.Gyerekek || sor.Gyerekek == filters.Gyerekek)
      );
    });

    setSzurtAdatok(eredmeny);
  };

  return (
    <div>
      <LoadingData szurtAdatok={szurtAdatok} />

      <table>
        <thead>
          <tr>
            <th>
              <button type="button" onClick={szuresInditasa}>
                🔍
              </button>
            </th>
            <th>Teljes Név</th>
            <th>Született</th>
            <th>Magasság</th>
            <th>Gyerekek</th>
            <th>Hírlevél</th>
          </tr>

          <tr>
            <FilterForm filters={filters} setFilters={setFilters} />
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
    </div>
  );
};

export default DataTable;
