import { useState } from "react";
import { UserContext } from "./context/UserContext";
import DataTable from "./components/DataTable";
import "./App.css";

function App() {
  const [adatok, setAdatok] = useState([]);

  return (
    <>
      <UserContext.Provider value={{ adatok, setAdatok }}>
        <div className="App">
          <h1>Adatok szűrése</h1>
          <DataTable />
        </div>
      </UserContext.Provider>
    </>
  );
}

export default App;
