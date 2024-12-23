import  { useState, useEffect } from 'react';

const Timer = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Komponens betöltődött!'); // Mounting log

        // Időzítő indítása
        const interval = setInterval(() => {
            setCount((prevCount) => prevCount + 1);
        }, 1000);

        // Takarítás (cleanup) unmount esetén
        return () => {
            console.log('Komponens eltávolítva!'); // Unmounting log
            clearInterval(interval); // Időzítő leállítása
        };
    }, []); // Üres függőséglista: csak a komponens betöltésekor és eltávolításakor fut

    return (
        <div>
            <h1>Timer: {count} másodperc</h1>
        </div>
    );
};

export default Timer;
