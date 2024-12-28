import { useState } from 'react';
import Timer from './Timer';
import './App.css';

const App = () => {
    const [showTimer, setShowTimer] = useState(true);

    return (
        <div >
            <h1>React Komponens Életciklus Példa</h1>
            <button onClick={() => setShowTimer(!showTimer)}>
                {showTimer ? 'Stop Timer' : 'Start Timer'}
            </button>
            {showTimer && <Timer />}
        </div>
    );
};

export default App;
