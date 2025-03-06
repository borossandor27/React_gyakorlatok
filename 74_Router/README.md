# React router
A React keretrendszer segítségével SPA (*Single-page application*)-t hozunk létre.

Az egyoldalas alkalmazás olyan webalkalmazás vagy webhely, amely a teljes új oldalak betöltésének alapértelmezett módja helyett dinamikusan átírja az aktuális weboldalt a webszervertől származó új adatokkal, és interakcióba lép a felhasználóval. A cél a gyorsabb átmenetek, amelyek révén a webhely natív alkalmazásnak tűnik.

SPA-ban soha nem történik oldalfrissítés, ehelyett az összes szükséges `HTML`- , `JavaScript`- és `CSS`- kódot vagy lekéri a böngésző egyetlen oldalbetöltéssel, vagy a megfelelő erőforrásokat dinamikusan betölti és szükség szerint hozzáadja az oldalhoz, általában a felhasználói műveletek hatására. 

## React vs MVC
Az **MVC**-ben a Controller szerepe a bejövő kérések kezelése, az adatok továbbítása a modell és a nézet között. A `React Router` nem felel meg teljesen ezeknek az elvárásoknak, hiszen az adatok frissítése a komponenseken belül, általában felhasználói interakció hatására történik. Bár pl.: a `useEffect` segítségével automatizálható az adatfrissítés, ennek ellenére a `Router` csak útválasztónak tekinthető, így a **React** keretrendszert nem tekinthetjük teljesen **MVC** alapúnak.

# A [`react-router-dom`](https://reactrouter.com/) főbb komponensei

## `<BrowserRouter>`
Az alkalmazás fő router komponense.
Gondoskodik arról, hogy a React alkalmazás URL-alapú navigációja működjön.
A HTML5 History API-t (*[pushState](https://developer.mozilla.org/en-US/docs/Web/API/History/pushState), [replaceState](https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState)*) használja a kliensoldali navigációhoz.
> [!IMPORTANT] 
> Az alkalmazásban csak egyetlen `BrowserRouter` lehet.

> [!IMPORTANT]
> Az egész alkalmazást be kell *burkolni* vele, hogy a router működjön.
```jsx
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <h1>Üdv az alkalmazásban!</h1>
    </BrowserRouter>
  );
}

export default App;
```

## `<Routes>`
Az alkalmazásban található különböző útvonalak (`Route`-ok) kezelésére szolgál.
```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

> [!IMPORTANT]  
> A `Switch` komponens helyett kell használni a **React Router v6**-tól.

> [!NOTE]  
> A `Route` komponensek csak `Routes`-on belül használható.

## `<Route>`
Meghatározza, hogy egy adott útvonal (path) esetén melyik komponenst kell megjeleníteni.
- A `Routes` komponensen belül kell elhelyezni.
- A `path` prop határozza meg az útvonalat.
- Az `element` prop adja meg a megjelenítendő komponenst.
```jsx
    <Route path="/home" element={<Home />} />
```
> [!NOTE]  
> A `path="*"` használható alapértelmezett oldalként (404):

```jsx
    <Route path="*" element={<NotFound />} />
```

> [!NOTE]  
> Dinamikus útvonalak is használhatóak például:
```jsx
    <Route path="/user/:id" element={<UserProfile />} />
```

## `<Link>`
Kliensoldali navigációt biztosít, az **oldal újratöltése nélkül**.
- Az `<a>` HTML elem React-alternatívája.
- A **`to`** propban kell megadni az útvonalat.

# Összegzés

| Komponens       | Feladata                                                      | Fontos tudnivalók                                                                 |
|-----------------|---------------------------------------------------------------|-----------------------------------------------------------------------------------|
| `<BrowserRouter>` | A React alkalmazás alaproutere, kezeli az URL-változásokat.  | Az egész alkalmazást be kell burkolni vele. HTML5 History API-t használ.          |
| `<Routes>`       | Az útvonalak listáját tartalmazza, és eldönti, melyik Route jelenjen meg. | Csak a Routes belsejében lehet Route, az első találatot rendereli.                |
| `<Route>`        | Egy adott útvonalhoz tartozó komponenst jelenít meg.         | A **path** prop határozza meg az útvonalat, az element prop adja meg a komponenst.    |
| `<Link>`         | Kliensoldali navigáció újratöltés nélkül.                    | A **to** prop adja meg az útvonalat, NavLink változattal kiemelhető az aktív link.    |
