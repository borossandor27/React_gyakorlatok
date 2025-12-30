import Hearts from "./Hearts";
import axios from "axios";
import { use, useEffect, useReducer, useState } from "react";

const Table = () => {
  const [users, setUsers] = useState([]);
  const backendUsers = "https://retoolapi.dev/jr8663/liker";
  useEffect(() => {
    function fetchUsers() {
      axios
        .get(backendUsers)
        .then((response) => {
          setUsers(response.data);
        })
        .catch((error) => {
          console.error("Hiba az adatok lekérésekor:", error);
        });
    }

    fetchUsers();
  }, [users]);

  return (
    <form action="">
      <table>
        <thead>
          <tr>
            <th>Felhasználó neve</th>
            <th>Kedvelés mértéke</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.fullname}</td>
              <td>
                <Hearts likecount={user.like} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </form>
  );
};

export default Table;
