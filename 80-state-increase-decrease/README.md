# HOOKS - felhasználói esemény kezelés

A felhasználói interaktivitás figyelésére a [hooks](https://react.dev/reference/react/hooks)-t használjuk. A `hooks` nevet azért kapta a koncepció, mert ezek a függvények olyan *kampóként* működnek, amelyekkel be lehet *akasztani* a React funkcionalitásába, például az állapotkezelésbe vagy az életciklus események kezelésébe, anélkül hogy osztályokat (*class componenteket*) kellene használni.
Korábban az állapot és az életciklus kezeléséhez osztály alapú komponenseket kellett használni. A hookok bevezetésével már funkcionális komponensekben is *bekapcsolódhatunk* ezekbe a mechanizmusokba. A hookok segítségével funkcionális komponenseken belül hozzáférhetsz olyan React-funkciókhoz, mint például az ***állapot*** (`useState`), az ***életciklusok*** (`useEffect`), vagy épp a ***kontextus*** (`useContext`).


```jsx
const [state, setState] = useState(initialState)
```
A fenti kódsorral egy `state` változót hoztunk létre, amelyet a `useState(0)` segítségével inicializáltuk az állapotot 0 értékkel. Az állapot neve `count`, a hozzá tartozó állapotfrissítő függvény pedig `setCount`.