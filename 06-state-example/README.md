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
### Hozzárendelés a gombhoz

```jsx
<button onClick={increaseAge}>Increase Age</button>
```
Az `onClick` esemény meghívja az `increaseAge` függvényt, amely növeli az `currentAge` értékét.

## Automatikus újrarenderelés
React automatikusan újrarendereli a komponenst, ha egy állapot (`useState`) vagy `props` megváltozik. Ez biztosítja, hogy a felhasználói felület mindig az aktuális állapotot tükrözze.