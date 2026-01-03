import { useState } from 'react';

const MouseTracker = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event) => {
        setPosition({ x: event.clientX, y: event.clientY });
    };

    return (
        <>
            <div
                style={{ height: '200px', border: '1px solid black', backgroundColor: 'lightgray' }}    
                onMouseMove={handleMouseMove}
            >
            </div>
            <p>Egér pozíciója: ({position.x}, {position.y})</p>
        </>
    );
};

export default MouseTracker;