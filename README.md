# React jegyzet

Segédlet a React frontend keretrendszer megismeréséhez. Lépésről lépésre

## HTML, CSS és JavaScript Alapok

### HTML

Ismerni kell a HTML alapjait, mivel a React komponensek végül HTML kódot renderelnek.

### CSS

A stílusok kezeléséhez szükséges alapok. A React-ben gyakran használnak CSS-t vagy CSS-in-JS megoldásokat.

### JavaScript

A React JavaScript alapú, így nélkülözhetetlenek a JavaScript ismeretek. pl.:

- változók deklarálása
- arrow function-ek (``` let myFunction = (a, b) => a * b; ```)
- destrukturálás (*tömbökből vagy objektumokból értékek kiemelése*)
- template literals ``` `string text ${expression} string text` ```
- Aszinkron JavaScript (*Promise-ok, async/await, ...*)
- Array és Object metódusok (*pl. map, filter, reduce, ...*)

## React Alapok

A React megértésében kulcsfontosságú a ReactDOM megértése. 
A böngésző **DOM** (*Document Object Model*) és a **ReactDOM** is 
ugyanazokat a feladatokat (*a weboldal felhasználói felületét (UI) kezelje és frissítse.*), de teljesen más technikákat használva.
A felhasználói interakciókat előbb a ReactDOM kezeli és átvezeti
a böngésző DOM-ján úgy, hogy minimalizálja a szükséges változásokat.

### Létrehozás

  ```Shell
  npm create vite@latest my-react-app 
  cd my-react-app
  npm install
  npm run dev
  ```

vagy

  ```Shell
  npx create-vite@latest my-react-app
  cd my-react-app
  npm install
  npm run dev
  ```

A windows `ExecutionPolicy` legtöbbször tiltja a futást az npm-nek, és a következő hibaüzenetet kapjuk:

  ```cmd
    File C:\Program Files\nodejs\npm.ps1 cannot be loaded because running scripts is disabled on this system.
  ```

Az engedélyezéshez a PowerShellben a

  ```PowerShell
    Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
    Get-ExecutionPolicy -List
  ```

paranccsal engedélyt adhatunk a node.js számára a futáshoz. A `CurrentUser` hatókör csak a saját felhasználónkra vonatkozik, ezért nem kell hozzá rendszergazdai jog. (Ha a gép minden felhasználójának engedélyezni szeretnénk, akkor rendszergazdaként, `-Scope LocalMachine` kapcsolóval kell futtatni.)

Sikeres project létrehozása után az alábbi könyvtárszerkezetet kapjuk:

  ```Shell
  my-react-app/
  ├── node_modules/
  ├── public/
  │   └── vite.svg
  ├── src/
  │   ├── assets/
  │   │   └── react.svg
  │   ├── App.css
  │   ├── App.jsx
  │   ├── index.css
  │   └── main.jsx
  ├── .gitignore
  ├── index.html
  ├── package.json
  ├── README.md
  └── vite.config.js
  ```

Az alapértelmezett project szerkesztését az `src` mappában lévő fájlokkal, leginkább az `App.jsx` fájl-al kezdjük.

### React komponensek

Funkcionális és osztály alapú komponenseket is készíthetünk.
Az osztály alapúak már kevésbé elterjedtek, mivel a React 16.8 verziótól kezdve a hooks bevezetésével a funkcionális komponensek is képesek kezelni az állapotot és az életciklusokat, így az osztály alapú komponensek használata ritkábbá vált.

#### Funkcionális komponensek

> A React 17 óta a JSX használatához nem kell a `React`-et importálni (`import React from 'react'`), elég azt behozni, amit ténylegesen használunk, például `import { useState } from 'react'`.

  ```jsx
  // Egy egyszerű funkcionális komponens, amely köszönti a felhasználót
  const Greeting = ({ name }) => {
    return (
      <div>
        <h1>Szia, {name}!</h1>
        <p>Üdvözlünk a React világában!</p>
      </div>
    );
  };

  // Ezt a komponenst használhatod máshol is:
  export default Greeting;
  ```

Használata:

  ```jsx
  import Greeting from './Greeting';

  const App = () => {
    return (
      <div>
        <Greeting name="Anna" />
      </div>
    );
  };

  export default App;
  ```

#### Osztály alapú komponensek

Az osztály alapú komponenseket akkor használták, amikor a komponenseknek belső állapotra (state) vagy lifecycle metódusokra volt szükségük. Azonban a React 16.8 verziótól kezdve, a hooks bevezetésével a funkcionális komponensek is képesek kezelni az állapotot és az életciklusokat, így az osztály alapú komponensek használata ritkábbá vált.

  ```jsx
  import { Component } from 'react';

  // Egy osztály alapú komponens, amely köszönti a felhasználót
  class Greeting extends Component {
    render() {
      const { name } = this.props; // Props de-strukturálása
      return (
        <div>
          <h1>Szia, {name}!</h1>
          <p>Üdvözlünk a React világában!</p>
        </div>
      );
    }
  }

  // Ezt a komponenst használhatod máshol is:
  export default Greeting;
  ```

Használat:

  ```jsx
  import { Component } from 'react';
  import Greeting from './Greeting';

  class App extends Component {
    render() {
      return (
        <div>
          <Greeting name="Anna" />
        </div>
      );
    }
  }

  export default App;
  ```

### JSX (JavaScript XML)

A React egyedi szintaxisa, ami lehetővé teszi a JavaScript és HTML kombinációját. Kibővíti a JavaScript lehetőségeit, segítségével deklaratív módon írjuk le a felhasználói felületeket. Használata olvashatóbbá és struktúráltabbá teszi a kódot.

  ```jsx
  const App = () => {
    const user = {
      name: 'Anna',
      age: 28,
      hobbies: ['reading', 'coding', 'hiking'],
    };

    return (
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1>Welcome to React with Vite!</h1>
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Age:</strong> {user.age}
        </p>
        <h3>Hobbies:</h3>
        <ul>
          {user.hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </div>
    );
  };

  export default App;
  ```

### Props

A props (_az angol "properties" szóból származik_) a React komponensek közötti adatátvitel mechanizmusa. Ez egy objektum, amelyet a szülő komponens továbbít a gyermek komponensnek. A props segítségével dinamikus adatokat adhatunk át a gyermek komponenseknek, hogy azok testreszabottan jelenítsenek meg tartalmat vagy működjenek.

  ```jsx
  function Car(props) {
    return <h2>I am a {props.brand}!</h2>;
  }

  function Garage() {
    return (
      <>
        <h1>Who lives in my garage?</h1>
        <Car brand="Ford" />
      </>
    );
  }
  ```

### Állapotok kezelése egy komponensen belül (`state`)

React-ben az állapotkezelés a `useState` hook segítségével történik, amely lehetővé teszi, hogy a funkcionális komponensek saját állapotokat definiáljanak és azok változásait kezeljék. Amikor az állapot megváltozik, React automatikusan újrarendereli a komponenst, így az mindig az aktuális állapotot jeleníti meg.

### Összetett adatok állapot kezelése

Több összefüggő adat esetén használjunk objektumokat és ezek állapotához rendeljünk feldolgozást

  ```jsx
  const [user, setUser] = useState({
      name: 'Anna',
      age: 28,
      hobbies: ['reading', 'coding'],
  });

  // Életkor növelése
  const increaseAge = () => {
      setUser({ ...user, age: user.age + 1 });
  };
  ```

### Komponens életciklus

A `useEffect` hookot használhatjuk, hogy a komponens különböző életciklus-eseményeire reagáljunk, például:

- Komponens betöltésekor (mounting). `[]` → egyszer fut (*adatlekérés tipikusan így megy*)
- nincs `[]` → minden render után fut.
- Állapot vagy props változásakor (updating). `[valtozo]` → fut, ha `valtozo` megváltozik.
- Komponens eltávolításakor (unmounting) → az effekt által visszaadott takarító (cleanup) függvény fut le.

Ezek az osztály alapú komponensek `componentDidMount`, `componentDidUpdate` és `componentWillUnmount` metódusainak felelnek meg.

> Fejlesztői módban a `StrictMode` minden komponenst kétszer renderel, és az effekteket is kétszer futtatja (betöltés → takarítás → betöltés), hogy a hiányzó takarítás hamar kiderüljön. Az éles (build) változatban ez nem történik meg.

### [Hook-ok](https://react.dev/reference/react/hooks)

React-ben a hookok olyan speciális függvények, amelyek segítségével a funkcionális komponensekben állapotot kezelhetünk, és hozzáférhetünk az életciklushoz kapcsolódó funkciókhoz.

### A `useState` hook

Használni kell, ha a komponensnek változtatható elemei vannak (_pl. űrlap mezők értékei, gomb állapota_), amelyek idővel változhatnak.

  ```jsx
  import { useState } from 'react';

  const Counter = () => {
    const [count, setCount] = useState(0);

    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increase</button>
      </div>
    );
  };
  ```

### A `useEffect` hook

Elsődleges feladat az életciklus események kezelése (pl. komponens betöltésekor, frissítésekor, vagy eltávolításakor végrehajtandó műveletek).
De használható API hívásokhoz, eseményfigyelők beállításához, időzítők indításához/tisztításához.

  ```jsx
  import { useState, useEffect } from 'react';

  const Timer = () => {
    const [time, setTime] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);

      return () => clearInterval(interval); // Cleanup
    }, []);

    return <p>Time: {time}</p>;
  };
  ```

  ```jsx
  useEffect(() => {
    console.log("lefut egyszer, amikor a komponens betöltődik");
  }, []);
  ```

  ```jsx
  useEffect(() => {
    console.log("minden render után lefut");
  });
  ```

  ```jsx
  useEffect(() => {
    console.log("lefut, amikor változik a 'query'");
  }, [query]);
  ```

### `useContext` hook

Feladata a globális állapot vagy adat megosztása komponensek között.
Használnunk kell ha egy állapotot vagy adatot több komponensnek kell használnia (pl. felhasználói bejelentkezési állapot).

  ```jsx
  import { createContext, useContext } from 'react';

  const ThemeContext = createContext('light');

  const ThemedComponent = () => {
    const theme = useContext(ThemeContext);
    return <p>Current theme: {theme}</p>;
  };

  const App = () => {
    return (
      <ThemeContext.Provider value="dark">
        <ThemedComponent />
      </ThemeContext.Provider>
    );
  };
  ```

### `useReducer` hook

Összetett állapotkezeléshez (pl. több kapcsolódó állapot kezelése egy helyen).
Használni kell, ha a komponens állapota bonyolult logikát igényel, vagy ha egy `useState` túl nagyra nő.

  ```jsx
  import { useReducer } from 'react';

  const reducer = (state, action) => {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 };
      case 'decrement':
        return { count: state.count - 1 };
      default:
        throw new Error();
    }
  };

  const Counter = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
      <div>
        <p>Count: {state.count}</p>
        <button onClick={() => dispatch({ type: 'increment' })}>+</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      </div>
    );
  };
  ```

### `useMemo` hook

Számított értékek átmeneti tárolására a teljesítmény javítása érdekében.
Használd, ha egy függvény vagy érték újraszámítása művelet igényes.

  ```jsx
  import { useMemo } from 'react';

  const ExpensiveCalculation = ({ num }) => {
    const compute = useMemo(() => {
      console.log('Computing...');
      return num * 2;
    }, [num]);

    return <p>Computed value: {compute}</p>;
  };
  ```

### `useCallback` hook

Feladata a függvények memorizálása, hogy ne hozzunk létre új függvényt minden renderelésnél.
Jól használható, ha egy függvényt propként adsz át egy al-komponensnek, és szeretnéd elkerülni az új függvények létrejöttét.

  ```jsx
  import { memo, useState, useCallback } from 'react';

  const Button = memo(({ onClick }) => {
    console.log('Button rendered');
    return <button onClick={onClick}>Click me</button>;
  });

  const App = () => {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
      setCount((prev) => prev + 1);
    }, []);

    return <Button onClick={handleClick} />;
  };
  ```

### `useRef` hook

DOM elemek elérésére vagy állandó értékek tárolására újrarenderelés nélkül.
Ha manuálisan szeretnél DOM elemet kezelni, vagy ha olyan adatot szeretnél tárolni, amely nem vált ki új renderelést.

  ```jsx
  import { useRef } from 'react';

  const InputFocus = () => {
    const inputRef = useRef();

    const focusInput = () => {
      inputRef.current.focus();
    };

    return (
      <div>
        <input ref={inputRef} type="text" />
        <button onClick={focusInput}>Focus Input</button>
      </div>
    );
  };
  ```

### `useLayoutEffect` hook

Ugyanúgy működik, mint a `useEffect`, de szinkron módon fut le: a DOM módosítása után, még mielőtt a böngésző kirajzolná a képernyőt. Akkor van rá szükség, ha a megjelenítés előtt kell egy elemet megmérni vagy igazítani (különben villanás látszana). Mivel blokkolja a kirajzolást, csak speciális esetekben használjuk.

  ```jsx
  import { useLayoutEffect, useRef } from 'react';

  const LayoutEffectExample = () => {
    const ref = useRef();

    useLayoutEffect(() => {
      ref.current.style.color = 'red';
    }, []);

    return <div ref={ref}>This text is red!</div>;
  };
  ```

### Hookok összefoglalása

  | Hook | Funkció | Használati javaslatok |
  | --- | --- | --- |
  | `useState` | Állapot kezelés | Űrlapmezők, számlálók, kapcsolók |
  | `useEffect` | Életciklus események | API hívások, időzítők |
  | `useContext` | Globális állapot vagy adat megosztása | Témák, nyelvi beállítások |
  | `useReducer` | Összetett állapot kezelés | Bejelentkezési állapot, kosár adatok, ... |
  | `useMemo` | Számított értékek memorizálása | Teljesítmény optimalizálás |
  | `useCallback` | Függvények memorizálása | Propként átadott függvények |
  | `useRef` | DOM elemek kezelése vagy állandó tárolás | Fókuszkezelés, régi érték tárolása |
  | `useLayoutEffect` | Effekt a DOM frissítése után, a képernyő kirajzolása előtt | Elemek mérése, pozicionálás villanás nélkül |

### [Context API](https://react.dev/learn/passing-data-deeply-with-context)

A komponensek között a propok átadása bonyolulttá és kényelmetlenné válhat, ha egy propot mélyen kell továbbadni a komponensfában, vagy ha sok komponensnek van szüksége ugyanarra az adatra.
Ez a jelenség `prop drilling` néven ismert.

A `context` lehetővé teszi, hogy propok átadása nélkül juttassunk el adatokat a komponensfa bármely szintjén lévő komponensekhez.

> Fontos:
A context nem állapotkezelő megoldás, hanem egy adatmegosztási mechanizmus.
Az állapotot általában `useState` vagy `useReducer` kezeli, a context pedig ezt az állapotot teszi elérhetővé.

#### Context létrehozása

  ```jsx
  import { createContext } from 'react';

  export const MyContext = createContext();
  ```

- A `createContext()` létrehoz egy kontextus objektumot, amely két fő komponenst tartalmaz: a `Provider`-t és a `Consumer`-t.
- Opcionálisan megadható **alapértelmezett érték**
- Az alapértelmezett érték csak akkor használódik, ha nincs Provider

Példa alapértelmezett értékkel:

  ```jsx
  export const ThemeContext = createContext('light');
  ```

#### Provider – az adatok betöltése

A context csak akkor használható, ha a komponenseket **Providerbe** csomagoljuk.

```jsx
import { MyContext } from './MyContext';

function App() {
  const value = 'Hello Context';

  return (
    <MyContext.Provider value={value}>
      <Child />
    </MyContext.Provider>
  );
}

```

- A value prop tartalmazza az átadott adatot
- Minden alatta lévő komponens eléri ezt az értéket

#### useContext – az adatok elérése

  ```jsx
  import { useContext } from 'react';
  import { MyContext } from './MyContext';

  function Child() {
    const value = useContext(MyContext);

    return <p>{value}</p>;
  }
  ```

- A `useContext` feliratkozik a context értékére
- Ha a value változik, a komponens újrarenderelődik

#### Context és state együtt használva

Ez a leggyakoribb és ajánlott használat.

````jsx
import { createContext, useState } from 'react';

export const CounterContext = createContext();

export function CounterProvider({ children }) {
  const [count, setCount] = useState(0);

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  );
}
````

Használat:

````jsx
import { useContext } from 'react';
import { CounterContext } from './CounterContext';

function Counter() {
  const { count, setCount } = useContext(CounterContext);

  return (
    <>
      <p> {count} </p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}
````

#### Saját hook készítése (*best practice*)

Ez tisztább, olvashatóbb kódot eredményez.

````jsx
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
````

Használat:

````jsx
const { user, setUser } = useAuth();
````

### Redux vagy MobX

Tanuld meg, hogyan lehet komplex állapotokat kezelni egy alkalmazásban. A Redux a legismertebb állapotkezelő könyvtár Reacthez; ma a hivatalosan ajánlott formája a [Redux Toolkit](https://redux-toolkit.js.org/). Érdemes megismerni a könnyebb alternatívákat is, mint a [Zustand](https://zustand.docs.pmnd.rs/) vagy a MobX. Kisebb alkalmazásban gyakran elég a Context API a `useReducer` hookkal.

## Styling Technológiák

### CSS-in-JS

Tanuld meg, hogyan lehet CSS-t írni JavaScript-ben, például a Styled Components vagy az Emotion segítségével.

### CSS keretrendszerek

Ismerkedj meg néhány népszerű CSS keretrendszerrel, mint a Bootstrap vagy a Tailwind CSS, amelyeket React-tel gyakran használnak.

## Integrációk és API Hívások

### REST API és GraphQL

Ismerd meg, hogyan hívj meg külső API-kat, és hogyan dolgozz fel adatokat React alkalmazásban. A fetch API és az Axios a két leggyakrabban használt megoldás a REST API-khoz, míg az Apollo Client a legnépszerűbb a GraphQL-hez.

## Build eszközök és deployment

### Vite

Új projektet a [Vite](https://vite.dev/)-tel érdemes indítani (`npm create vite@latest`): gyorsan felállít egy React fejlesztői környezetet minden szükséges konfigurációval.

> A korábban elterjedt **Create React App**-et a React csapata 2025 februárjában elavulttá nyilvánította, és már nem tartja karban. Régebbi leírásokban és projektekben még találkozhatsz vele, de új projekthez ne használd.

### Webpack és Babel

Érdemes megérteni a modern JavaScript alkalmazások felépítéséhez és fordításához használt eszközöket. Régebbi projektek jellemzően Webpackre és Babelre épülnek; a Vite ezek feladatát látja el.

### Deployment

Tanuld meg, hogyan lehet a React alkalmazásokat különböző környezetekbe deploy-olni, például Netlify, Vercel, Heroku vagy saját szerverre.

## Tesztelés

A program fejlesztése során folyamatosan teszteled az elkészült kódot, ezért
sokan feleslegesnek tartják a tesztesetek készítését. Kisebb, egyszeri, egyszemélyes alkalmazások esetén én is feleslegesnek tartom. 

Abban az esetben, ha nagyobb és hosszútávú a project, több szempontból is hasznos:

- **Dokumentációként szolgálhat** a megrendelő felé és a később bekapcsolódó kollégák számára
- **Hibák megelőzése és feltárása** a későbbi módosítások ellenőrzése - amelyet esetleg már más programozók végeztek - biztosítja a hosszú távú megbízhatóságot
- **Kódminőség javítása:** A tesztelés rákényszerít strukturált, olvasható és karbantartható kód írására.

### Egységtesztelés *(Unit Testing)*

Kis kódrészek (függvények, osztályok) tesztelése elszigetelten.

### Integrációs tesztelés *(Integration Testing)*

Több modul vagy komponens együttműködését teszteli.
Például egy API hívás eredményének tesztelése, amely adatbázist is elér.

### Végponti *(end-to-end, E2E)* tesztelés

A teljes alkalmazás működését ellenőrzi a felhasználó szemszögéből. Valamely  
a felhasználó számára fontosabb műveletsort vizsgálunk

## JavaScript teszt framework-ök

- [**Jest**](https://jestjs.io) - Egységtesztelés, snapshot teszt, integrációs teszt *(Készítette: Facebook (Meta))*
- [**Mocha**](https://mochajs.org) - Egység- és integrációs teszt keretrendszer
- [**Vitest**](https://vitest.dev/) - Modern egységteszt keretrendszer, Vite alapú projektekhez ez a kézenfekvő választás *(Készítette: Vite közösség)*
- [**React Testing Library**](https://testing-library.com/docs/react-testing-library/intro/) - React komponensek tesztelése a felhasználó szemszögéből; a Jesttel vagy a Vitesttel együtt használjuk
- [**Cypress**](https://www.cypress.io/) - End-to-End (`E2E`) tesztelés

## Projektek Építése

Készíts saját kis projekteket, hogy gyakorold a tanultakat. Kezdd egyszerűbb projektekkel, mint például egy teendő lista, majd haladj komplexebb alkalmazások felé, mint például egy e-kereskedelmi oldal vagy egy blog platform.

### Online kódolási lehetőségek

| Funkció/Jellemző | [CodeSandbox](https://codesandbox.io/) | [StackBlitz](https://stackblitz.com/) | [React Playground](https://playcode.io/react) |
|---|---|---|---|
| Alapvető funkciók |  |  |  |
| Kód szerkesztő | Kiváló, sokféle nyelv támogatásával | Kiváló, gyors és intuitív | Egyszerű, de hatékony |
| Élő előnézet | Valós idejű frissítés | Valós idejű frissítés | Valós idejű frissítés |
| Debugger | Beépített debugger | Beépített debugger | Néhány esetben külső debugger szükséges |
| Tematizálás | Számos sablon és téma | Testre szabható megjelenés | Alapszintű testreszabás |
| Integrációk |  |  |  |
| Verziókövetés | Git integráció | Git integráció | Korlátozott támogatás |
| Build eszközök | Webpack, Babel, stb. | Webpack, Babel, stb. | Előre konfigurált beállítások |
| Külső könyvtárak | NPM, Yarn támogatás | NPM, Yarn támogatás | Korlátozott támogatás |
| Sebesség |  |  |  |
| Indítási idő | Gyors | Nagyon gyors | Gyors |
| Frissítési idő | Valós idejű | Valós idejű | Valós idejű |
| Megosztás |  |  |  |
| Projekt megosztása | Könnyű megosztás, verziókövetéssel | Könnyű megosztás, verziókövetéssel | Egyszerű URL megosztás |
| Együttműködés | Valós idejű együttműködés | Valós idejű együttműködés | Korlátozott együttműködés |

## Frissítések és Új Technológiák Követése

A JavaScript és a React gyorsan változó világában fontos, hogy naprakész maradj. 
Kövess blogokat, podcastokat, és React konferenciákat, hogy megtudd, 
mik az új trendek és best practice-ek.

- [The Stack Overflow Blog](https://stackoverflow.blog/react/)
- [Reddit](https://www.reddit.com/r/reactjs/)
- [Thinking in React](https://react.dev/learn/thinking-in-react)
- [ReactJS Best Practices for Developers](https://dev.to/infrasity-learning/reactjs-best-practices-for-developers-5gjf)
- ...
