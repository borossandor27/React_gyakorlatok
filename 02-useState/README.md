# Állapot (state) létrehozása

A komponens függvénye minden rendereléskor újra lefut, ezért a benne deklarált közönséges változók értéke elveszik, és a módosításuk nem frissíti a képernyőt. Ha azt szeretnénk, hogy egy érték megmaradjon a renderelések között, és a változása újrarenderelje a komponenst, akkor állapotot (*state*) kell használnunk. Ehhez a `useState` hookot importáljuk:

```javascript
import {useState} from "react"
```

## `useState` szintaxis

```javascript
function FavoriteColor() {
  const [color, setColor] = useState("red");
}
```

A fenti kód egy `color` változót hoz létre "red" értékkel és egy `setColor` függvényt, amelynek a segítéségével változtatni tudjuk.

> Ezek a nevek olyan változók, amelyeket bármilyen néven elnevezhetünk!

## Adatátadás a komponensek között

Az adat a szülőtől a gyerek felé áramlik, propokon keresztül. A gyerek komponens nem fér hozzá közvetlenül a szülő állapotához, és a testvér komponensek sem látják egymásét.

Ha a gyereknek módosítania kell a szülő adatát, akkor a szülő az értékkel együtt a beállító függvényt is átadja propként:

```jsx
<SharedDataButton count={count} setCount={setCount} />
```

## Több komponens ugyanazt az adatot

Ha több komponensnek ugyanarra az adatra van szüksége, az állapotot a legközelebbi közös szülőbe kell felemelni (*lifting state up*), és onnan propként átadni.

A [privateData](./privateData/) példában a `PrivateDataButton` példányai saját, egymástól független állapotot tárolnak, a `SharedDataButton` viszont a szülőben tárolt, megosztott értéket jeleníti meg és módosítja.
