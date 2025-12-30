import Hearts from "./Hearts";
import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import { initialState, reducer } from "../reducers/Reducer";

const Table = () => {
  // A useState helyett useReducer-t használunk
  const [users, dispatch] = useReducer(reducer, initialState);
  const backendUsers = "https://retoolapi.dev/jr8663/liker";

  useEffect(() => {
    axios
      .get(backendUsers)
      .then((response) => {
        // Frissítés a reduceren keresztül
        dispatch({ type: "SET_USERS", payload: response.data });
      })
      .catch((error) => console.error("Hiba:", error));
  }, []);

  // Ez a függvény küldi el az "üzenetet" a reducernek
  // Table.jsx - A handleLikeClick függvény módosítása
  const handleLikeClick = (index, userId) => {
    const newLikeValue = index + 1;

    // 1. Küldés a backendre (aszinkron módon)
    axios
      .patch(`${backendUsers}/${userId}`, { like: newLikeValue })
      .then(() => {
        // 2. Ha a szerver sikeresen válaszolt, frissítjük a lokális state-et
        dispatch({
          type: "UPDATE_LIKE",
          index: index, // Itt az indexet küldjük, a reducer hozzáad +1-et
          userId: userId,
        });
        console.log(`Sikeres mentés: User ${userId}, Like: ${newLikeValue}`);
      })
      .catch((error) => {
        console.error("Hiba a mentés során:", error);
        alert("Nem sikerült menteni a kedvelést!");
      });
  };

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
                <Hearts
                  likecount={user.like}
                  // Itt adjuk át a logikát a Hearts-nak
                  handleClick={(idx) => handleLikeClick(idx, user.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </form>
  );
};

export default Table;
