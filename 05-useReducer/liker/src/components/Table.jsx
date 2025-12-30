import Hearts from "./Hearts";
import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import { initialState, reducer } from "../reducers/Reducer";
import "./Table.css";

const Table = () => {
  // A useState helyett useReducer-t használunk
  const [state, dispatch] = useReducer(reducer, initialState);
  const backendUsers = "https://retoolapi.dev/jr8663/liker";

  useEffect(() => {
    dispatch({ type: 'SET_LOADING', payload: true });
    axios
      .get(backendUsers)
      .then((response) => {
        // Frissítés a reduceren keresztül
        dispatch({ type: "SET_USERS", payload: response.data });
      })
      .catch((error) => console.error("Hiba:", error));
  }, []);

  // Ez a függvény küldi el az "üzenetet" a reducernek
const handleLikeClick = (index, userId) => {
    if (state.isLoading) return; // Megakadályozzuk a dupla kattintást

    dispatch({ type: 'SET_LOADING', payload: true });
    
    axios.patch(`${backendUsers}/${userId}`, { like: index + 1 })
      .then(() => {
        dispatch({ type: 'UPDATE_LIKE', index, userId });
      })
      .catch(() => {
        dispatch({ type: 'SET_LOADING', payload: false });
        alert("Hiba történt!");
      });
  };

  return (
    <div style={{ position: 'relative' }}>
      {/* Töltő ikon megjelenítése */}
      {state.isLoading && (
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(255,255,255,0.5)', display: 'flex', 
          justifyContent: 'center', alignItems: 'center', zIndex: 10
        }}>
          <div className="spinner">Betöltés...</div>
        </div>
      )}

      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Felhasználó</th>
            <th>Kedvelések</th>
          </tr>
        </thead>
        <tbody>
          {state.data.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.fullname}</td>
              <td>
                <Hearts 
                  likecount={user.like} 
                  handleClick={(idx) => handleLikeClick(idx, user.id)} 
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
