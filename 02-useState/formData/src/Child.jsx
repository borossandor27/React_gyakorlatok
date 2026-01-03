import React from "react";

const Child = ({ sendDataToParent }) => {
  return (
    <div>
      <h2>Gyermek komponens</h2>
      <button onClick={() => sendDataToParent("Helló, Szülő!")}>
        Adat küldése
      </button>
    </div>
  );
};

export default Child;
