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
- arrow function-ek (```js let myFunction = (a, b) => a * b;```)
- destrukturálás (*tömbökből vagy objektumokból értékek kiemelése*)
- template literals ```js `string text ${expression} string text` ```
- Aszinkron JavaScript (*Promise-ok, async/await, ...*)
- Array és Object metódusok (*pl. map, filter, reduce, ...*)

## React Alapok
A React megértésében kulcsfontosságú a ReactDOM megértése. A böngésző **DOM** (*Document Object Model*) és a ReactDOM

### Létrehozás
```Shell
npm create vite@latest my-react-app -- --template react
cd my-react-app
npm install
npm run dev
```

Már többször előfordult, hogy a policy letiltotta a futást a `File C:\Program Files\nodejs\npm.ps1 cannot be loaded because running scripts is disabled on this system.` hibaüzenettel. Az engedélyezéshez a Power Shell-t rendszergazdaként kell futtatni és a 
```PowerShell
  Set-ExecutionPolicy RemoteSigned
```
paranccsal engedélyt adhatunk a node.js számára a futáshoz.

Sikeres futatás után az alábbi könyvtárszerkezetet kapjuk:
```
hello-vite-app/
├── node_modules/
├── public/
│   ├── favicon.ico
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

#### Funkcionális komponensek
```jsx
import React from 'react';

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
import React from 'react';
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
import React, { Component } from 'react';

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
import React from 'react';
import Greeting from './Greeting';

class App extends React.Component {
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
import React from 'react';

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

### Állapotok kezelése egy komponensen belül (`state`).
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

### Komponens Életciklus
A `useEffect` hookot használhatjuk, hogy a komponens különböző életciklus-eseményeire reagáljunk, például:

- Komponens betöltésekor (mounting).
- Állapot vagy props változásakor (updating).
- Komponens eltávolításakor (unmounting). 


(pl. `componentDidMount`, `componentDidUpdate`).

### [Hook-ok](https://react.dev/reference/react/hooks)
React-ben a hookok olyan speciális függvények, amelyek segítségével a funkcionális komponensekben állapotot kezelhetünk, és hozzáférhetünk az életciklushoz kapcsolódó funkciókhoz.

### A `useState` hook
Hsználni kell, ha a komponensnek változtatható elemei vannak (_pl. űrlap mezők értékei, gomb állapota_), amelyek idővel változhatnak.
```jsx
import React, { useState } from 'react';

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
import React, { useState, useEffect } from 'react';

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
### `useContext` hook
Feladata a globális állapot vagy adat megosztása komponensek között.
Használnunk kell ha egy állapotot vagy adatot több komponensnek kell használnia (_pl. felhasználói bejelentkezési állapot_).
```jsx
import React, { createContext, useContext } from 'react';

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
import React, { useReducer } from 'react';

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
import React, { useMemo } from 'react';

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
import React, { useState, useCallback } from 'react';

const Button = React.memo(({ onClick }) => {
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
import React, { useRef } from 'react';

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
Használható a DOM manipuláció előtt, de általában csak speciális esetekben szükséges.
```jsx
import React, { useLayoutEffect, useRef } from 'react';

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
| `useState` | Állapot kezelés | Használati javaslatok |
| `useEffect` | Életciklus események | API hívások, időzítők |
| `useContext` | Globális állapot vagy adat megosztása | Témák, nyelvi beállítások |
| `useReducer` | Összetett állapot kezelés | Bejelentkezési állapot, kosár adatok, ... |
| `useMemo` | Számított értékek memorizálása | Teljesítmény optimalizálás |
| `useCallback` | Függvények memorizálása | Propként átadott függvények |
| `useRef` | DOM elemek kezelése vagy állandó tárolás | Fókuszkezelés, régi érték tárolása |
| `useLayoutEffect` | DOM manipuláció közvetlen renderelés előtt | Méretre igazítás, vizuális manipuláció |


### Context API
Tanuld meg, hogyan lehet megosztani adatokat a komponensek között anélkül, hogy props-okat kellene lefelé küldeni minden szinten.

### React Router
Ismerd meg az útvonalkezelést, hogy hogyan lehet különböző oldalakra navigálni egy egyoldalas alkalmazásban (SPA).

## Állapotkezelés

### Redux vagy MobX
Tanuld meg, hogyan lehet komplex állapotokat kezelni egy alkalmazásban. A Redux a legnépszerűbb állapotkezelő könyvtár Reacthez, de az alternatívák, mint a MobX vagy a Context API is érdemesek lehetnek a tanulásra.

## Styling Technológiák

### CSS-in-JS
Tanuld meg, hogyan lehet CSS-t írni JavaScript-ben, például a Styled Components vagy az Emotion segítségével.

### CSS keretrendszerek
Ismerkedj meg néhány népszerű CSS keretrendszerrel, mint a Bootstrap vagy a Tailwind CSS, amelyeket React-tel gyakran használnak.

## Integrációk és API Hívások

### REST API és GraphQL
Ismerd meg, hogyan hívj meg külső API-kat, és hogyan dolgozz fel adatokat React alkalmazásban. A fetch API és az Axios a két leggyakrabban használt megoldás a REST API-khoz, míg az Apollo Client a legnépszerűbb a GraphQL-hez.

## Build eszközök és deployment

### Create React App
Kezdj ezzel az eszközzel, amely gyorsan felállít egy React fejlesztői környezetet minden szükséges konfigurációval.

### Webpack és Babel
Érdemes megérteni a modern JavaScript alkalmazások felépítéséhez és fordításához használt eszközöket.

### Deployment
Tanuld meg, hogyan lehet a React alkalmazásokat különböző környezetekbe deploy-olni, például Netlify, Vercel, Heroku vagy saját szerverre.

## Tesztelés

### Unit tesztelés
Tanuld meg a komponensek unit tesztelését, például a Jest és a React Testing Library segítségével.

### End-to-End tesztelés
Tanuld meg az alkalmazás teljes folyamatainak tesztelését eszközök segítségével, mint például a Cypress.

## Projektek Építése
Készíts saját kis projekteket, hogy gyakorold a tanultakat. Kezdd egyszerűbb projektekkel, mint például egy teendő lista, majd haladj komplexebb alkalmazások felé, mint például egy e-kereskedelmi oldal vagy egy blog platform.

### Online kódolási lehetőségek

| Funkció/Jellemző | [CodeSandbox](https://codesandbox.io/) | [StackBlitz](https://stackblitz.com/) | [React Playground](https://playcode.io/react) |[Create React App Online](https://create-react-app.dev/) |
|---|---|---|---|---|
| Alapvető funkciók |  |  |  |  |
| Kód szerkesztő | Kiváló, sokféle nyelv támogatásával | Kiváló, gyors és intuitív | Egyszerű, de hatékony | Beépített a létrehozott projektbe |
| Élő előnézet | Valós idejű frissítés | Valós idejű frissítés | Valós idejű frissítés | Beépített a fejlesztési szerverbe |
| Debugger | Beépített debugger | Beépített debugger | Néhány esetben külső debugger szükséges | Chrome DevTools |
| Tematizálás | Számos sablon és téma | Testre szabható megjelenés | Alapszintű testreszabás | Alapszintű testreszabás |
| Integrációk |  |  |  |  |
| Verziókövetés | Git integráció | Git integráció | Korlátozott támogatás | Git integráció |
| Build eszközök | Webpack, Babel, stb. | Webpack, Babel, stb. | Előre konfigurált beállítások | Webpack, Babel, stb. |
| Külső könyvtárak | NPM, Yarn támogatás | NPM, Yarn támogatás | Korlátozott támogatás | NPM, Yarn támogatás |
| Sebesség |  |  |  |  |
| Indítási idő | Gyors | Nagyon gyors | Gyors | Némi időt igényel a projekt létrehozása |
| Frissítési idő | Valós idejű | Valós idejű | Valós idejű | Valós idejű |
| Megosztás |  |  |  |  |
| Projekt megosztása | Könnyű megosztás, verziókövetéssel | Könnyű megosztás, verziókövetéssel | Egyszerű URL megosztás | Az elkészült alkalmazás deploy-ozása |
| Együttműködés | Valós idejű együttműködés | Valós idejű együttműködés | Korlátozott együttműködés | Nem támogatja az egyidejű szerkesztést |

## Frissítések és Új Technológiák Követése
A JavaScript és a React gyorsan változó világában fontos, hogy naprakész maradj. 
Kövess blogokat, podcastokat, és React konferenciákat, hogy megtudd, 
mik az új trendek és best practice-ek.

- [The Stack Overflow Blog](https://stackoverflow.blog/react/)
- [Reddit](https://www.reddit.com/r/reactjs/)
- [Thinking in React](https://react.dev/learn/thinking-in-react)
- [ReactJS Best Practices for Developers](https://dev.to/infrasity-learning/reactjs-best-practices-for-developers-5gjf)
- ...
