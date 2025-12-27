# A `useReducer` hook

A `useReducer` egy React hook, amely **összetett állapotkezelést** tesz lehetővé. Olyan esetekben használjuk, amikor:

- Komplex állapot logika van (több alállapot, egymástól függő értékek)
- Form kezelés (sok mező, validáció, egymástól függő mezők)
- Több művelet befolyásolja ugyanazt az állapotot
- Kiszámítható állapotátmenetekre van szükség
- Az állapot nagy és összetett objektum

## Hogyan működik?

Három fő része van:

1. **State** - az aktuális állapot
2. **Action** - mi történik *(típus + opcionális adat)*
3. **Reducer** - függvény, ami az előző állapotból és az actionból kiszámítja az új állapotot

## Hogyan használható?

### Alap szintaxis

```javascript
const [state, dispatch] = useReducer(reducer, initialState);
```

### Reducer függvény struktúra

```javascript
function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      return state; // Mindig vissza kell adni valamilyen állapotot!
  }
}
```
