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
- arrow function-ek
- destrukturálás (tömbökből vagy objektumokból értékek kiemelése)
- template literals stb.
- Aszinkron JavaScript (Promise-ok, async/await)
- Array és Object metódusok (pl. map, filter, reduce)

## React Alapok

### Létrehozás
```bash
npm create vite@latest my-react-app -- --template react
cd my-react-app
npm install
npm run dev
```

Az alábbi könyvtárszerkezetet kapjuk:
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

### Komponens Életciklus
A `useEffect` hookot használhatjuk, hogy a komponens különböző életciklus-eseményeire reagáljunk, például:

- Komponens betöltésekor (mounting).
- Állapot vagy props változásakor (updating).
- Komponens eltávolításakor (unmounting). 


(pl. `componentDidMount`, `componentDidUpdate`).

## Fejlettebb React Fogalmak

### Hook-ok
Ismerd meg a React hook-okat, különösen a `useState` és `useEffect` hook-okat. Ezek a funkcionális komponensek állapotkezelésére és mellékhatások kezelésére szolgálnak.

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

## Frissítések és Új Technológiák Követése
A JavaScript és a React gyorsan változó világában fontos, hogy naprakész maradj. Kövess blogokat, podcastokat, és React konferenciákat, hogy megtudd, mik az új trendek és best practice-ek.
