# Állapotok kezelése egy komponensen belül (`state`).

```jsx
const [currentAge, setCurrentAge] = useState(age);
```
- Az első érték (`currentAge`) az aktuális állapot értéke.
- A második érték (`setCurrentAge`) egy függvény, amellyel az állapotot módosíthatjuk.
```jsx
// Funkció az életkor növelésére
    const increaseAge = () => {
        setCurrentAge(currentAge + 1);
    };
```

## Automatikus újrarenderelés

React automatikusan újrarendereli a komponenst, ha egy állapot (`useState`) vagy `props` megváltozik. Ez biztosítja, hogy a felhasználói felület mindig az aktuális állapotot tükrözze.