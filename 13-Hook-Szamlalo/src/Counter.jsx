import  { useState } from 'react';

const Counter = () => {
    // useState használata: állapot és az állapot módosító függvény deklarálása
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Számláló: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Növel</button>
            <button onClick={() => setCount(count - 1)}>Csökkent</button>
            <button onClick={() => setCount(0)}>Nulláz</button>
        </div>
    );
};

export default Counter;
