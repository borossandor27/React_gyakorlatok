import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // ✅ 1. useEffect → FUT MINDEN RENDER UTÁN (dependency NÉLKÜL)
  useEffect(() => {
    console.log("🔁 Minden render után lefut");
  });

  // ✅ 2. useEffect → CSAK EGYSZER FUT (üres dependency [])
  useEffect(() => {
    console.log("✅ Csak egyszer fut le (komponens betöltésekor)");

    return () => {
      console.log("🧹 Takarítás unmount-kor");
    };
  }, []);

  // ✅ 3. useEffect → CSAK AKKOR FUT, HA A DEPENDENCY VÁLTOZIK
  useEffect(() => {
    console.log("🎯 A count megváltozott:", count);
  }, [count]);

  return (
    <>
      <h1>Számláló: {count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Számláló növelése
      </button>

      <hr />

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Ide írj..."
      />
    </>
  );
}

export default App;
