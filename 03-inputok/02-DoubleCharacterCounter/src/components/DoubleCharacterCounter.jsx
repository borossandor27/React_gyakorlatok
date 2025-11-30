import React, { useState } from 'react';

function DoubleCharacterCounter() {
  // 1. Állapot definiálása egy objektumként, ami tárolja mindkét mező értékét
  const [inputs, setInputs] = useState({
    input1: '',
    input2: ''
  });

  // 2. Kezelő függvény a beviteli mező változásaihoz
  // Itt a 'name' attribútumot használjuk annak eldöntésére, melyik mező változott
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    
    // Frissítjük az állapotot, megőrizve a másik mező értékét (spread operator: ...inputs)
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value // A [] jelenti, hogy a 'name' változó értékét használjuk kulcsként (pl. 'input1')
    }));
  };

  // 3. Függvény a kategória meghatározására (ez nem változik)
  const getLengthCategory = (currentText) => {
    const length = currentText.length;

    if (length < 3) {
      return 'rövid';
    } else if (length >= 3 && length <= 7) {
      return 'átlagos';
    } else {
      return 'hosszú';
    }
  };

  return (
    <div>
      <h2>Két Karakter számláló</h2>
      
      {/* --- Első beviteli mező --- */}
      <div>
        <label htmlFor="input1">Első szöveg:</label><br/>
        <input
          type="text"
          id="input1"
          name="input1" // Fontos: a 'name' attribútum megegyezik az állapot kulcsával
          value={inputs.input1}
          onChange={handleInputChange}
          placeholder="Írj ide..."
        />
        <p>
          Hossz kategória: <strong>{getLengthCategory(inputs.input1)}</strong>
          (Karakterek: <strong>{inputs.input1.length}</strong>)
        </p>
      </div>
      
      <hr/>

      {/* --- Második beviteli mező --- */}
      <div>
        <label htmlFor="input2">Második szöveg:</label><br/>
        <input
          type="text"
          id="input2"
          name="input2" // Fontos: a 'name' attribútum megegyezik az állapot kulcsával
          value={inputs.input2}
          onChange={handleInputChange}
          placeholder="Írj ide is..."
        />
        <p>
          Hossz kategória: <strong>{getLengthCategory(inputs.input2)}</strong>
          (Karakterek száma: <strong>{inputs.input2.length}</strong>)
        </p>
      </div>
      
    </div>
  );
}

export default DoubleCharacterCounter;