import { useState } from "react";
import PrivateDataButton from "./components/PrivateDataButton";
import SharedDataButton from "./components/SharedDataButton";
import "./App.css";

// App.jsx
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <h1>Adatok átadása a komponensek között</h1>
    <div id="buttons-container">
      <PrivateDataButton instanceId={"A"} className="private-data-button" />
      <PrivateDataButton instanceId={"B"} className="private-data-button" />
      <SharedDataButton count={count} setCount={setCount} className="shared-data-button" />
    </div>
    </>

  );
}

export default App;
