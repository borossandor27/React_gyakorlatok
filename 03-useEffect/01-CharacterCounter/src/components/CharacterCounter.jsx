import React, { useState } from "react";

function CharacterCounter() {
  // 1. Állapot definiálása a beviteli mező értékének tárolására
  const [text, setText] = useState("");

  // 2. Kezelő függvény a beviteli mező változásaihoz
  const handleInputChange = (event) => {
    // A mező aktuális értékének beállítása a böngésző esemény objektumából
    setText(event.target.value);
  };

  // 3. Függvény a szöveg hossza alapján a kategória meghatározására
  const getLengthCategory = (currentText) => {
    const length = currentText.length;

    if (length < 3) {
      return "rövid";
    } else if (length <= 7) {
      return "átlagos";
    } else {
      return "hosszú";
    }
  };

  // Kategória meghatározása a jelenlegi szöveghez
  const category = getLengthCategory(text);

  return (
    <div>
      <h2>Karakterszámláló</h2>

      {/* Szöveges beviteli mező */}
      <input
        type="text"
        value={text} // Az input értéke az állapotból
        onChange={handleInputChange} // A böngésző DOM esemény kezelése
        placeholder="Írj be valamilyen szöveget..."
      />

      {/* Karakterhossz megjelenítése (opcionális) */}
      <p>Karakterek száma: <strong>{text.length}</strong></p>

      {/* A kért kategória megjelenítése */}
      <p>Hossz kategória: <strong>{category}</strong></p>
    </div>
  );
}

export default CharacterCounter;
