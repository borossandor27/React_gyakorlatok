import "./App.css";

function App() {
  const allData = {};
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    allData[key] = localStorage.getItem(key);
  }

  return (
    <>
      <h1>Ebben a böngészőben a gépeden tárolt adatok</h1>
      <div>
        {Object.entries(allData).map(([key, value]) => (
          <div key={key} className="data-item">
            <strong>{key}:</strong> {value}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
