# Navigáció védett lapokkal

## Projekt struktúra

```css
src/
 ├─ components/
 │   ├─ Navbar.jsx
 │   └─ PrivateRoute.jsx
 ├─ pages/
 │   ├─ Home.jsx
 │   ├─ Login.jsx
 │   ├─ Dashboard.jsx
 │   ├─ Users.jsx
 │   └─ UserDetails.jsx
 ├─ data/
 │   └─ users.js
 ├─ App.jsx
 └─ main.jsx
```

## Telepítés

```bash
npm create vite@latest mini-admin
cd mini-admin
npm install
npm install react-router-dom
npm run dev
```

### Lépések

1. Router beállítása a `main.jsx`-ben
1. Navigáció a `Navbar.jsx`-ben
1. Védett útvonal megadása a `PrivateRouter.jsx`-ben
1. Route-ok megadása az `App.jsx`-ben
1. Felhasználó adatok a `users.js` fájlba *(teszteléshez)*
1. Felhasználókat megjelenítő oldal `Users.jsx`
...
