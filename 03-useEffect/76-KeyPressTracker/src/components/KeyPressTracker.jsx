import { useState, useEffect } from 'react';

const KeyPressTracker = () => {
    const [key, setKey] = useState('');


    useEffect(() => {
        const handleKeyPress = (event) => {
            setKey(event.key);
        };

        window.addEventListener('keydown', handleKeyPress);
        
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    return (
        <div>
            <p>Legutóbb lenyomott billentyű: {key}</p>
        </div>
    );
};

export default KeyPressTracker;