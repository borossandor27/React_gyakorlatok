import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import LoadingData from "./LoadingData";

const DataTable = () => {
  const { adatok } = useContext(UserContext);

  return (
    <div>
      <LoadingData />

      {adatok.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>TeljesNev</th>
              <th>Szuletett</th>
              <th>Magassag</th>
              <th>Gyerekek</th>
              <th>HirleveletKer</th>
            </tr>
          </thead>
          <tbody>
            {adatok.map((data) => (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.TeljesNev}</td>
                <td>{new Date(data.Szuletett).toLocaleDateString()}</td>
                <td>{data.Magassag}</td>
                <td>{data.Gyerekek}</td>
                <td>{data.HirleveletKer.toString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Nincs megjeleníthető adat.</p>
      )}
    </div>
  );
};

export default DataTable;
