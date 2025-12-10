import React, { useReducer } from 'react';

function App() {

// 1. Reducer függvény definiálása
function counterReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { 
        ...state, 
        count: state.count + 1,
        lastAction: 'növelés'
      };
    case 'DECREMENT':
      return { 
        ...state, 
        count: state.count - 1,
        lastAction: 'csökkentés'
      };
    case 'RESET':
      return { 
        count: 0,
        lastAction: 'nullázás'
      };
    case 'SET_VALUE':
      return {
        ...state,
        count: action.payload,
        lastAction: `érték beállítás: ${action.payload}`
      };
    default:
      return state;
  }
}

// 2. Kezdeti állapot
const initialState = {
  count: 0,
  lastAction: 'nincs'
};

function Counter() {
  // 3. useReducer használata
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <h1>Számláló: {state.count}</h1>
      <p>Utolsó művelet: {state.lastAction}</p>
      
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>
        Növelés
      </button>
      
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>
        Csökkentés
      </button>
      
      <button onClick={() => dispatch({ type: 'RESET' })}>
        Reset
      </button>
      
      <button onClick={() => dispatch({ 
        type: 'SET_VALUE', 
        payload: 42 
      })}>
        Beállítás 42-re
      </button>
    </div>
  );
}
  return (
    <>
      <Counter />
    </>
  )
}

export default App
