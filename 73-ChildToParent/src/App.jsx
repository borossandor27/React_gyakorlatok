import React, { useState } from "react";
import Child from "./Child";

const App = () => {
  const [data, setData] = useState("");

  // A gyermek komponens meghívja ezt az adatküldéshez
  const handleChildData = (childData) => {
    setData(childData);
  };

  return (
    <div>
      <h1>Szülő komponens</h1>
      <p>Gyermektől kapott adat: {data}</p>
      <Child sendDataToParent={handleChildData} />
    </div>
  );
};

export default App;
