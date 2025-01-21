# Első lépések

## Létrehozás

'''bash
npm create vite@latest my-react-app -- --template react

cd my-react-app

npm install

npm run dev
'''
## Tartalom módosítása

### index.html

Az `index.html`-ben látható, hogy csak a `<div id="root"></div>` elemet tartalmazza, ezt használhatjuk megjelenítésre.  A tartalom előállításra a 
`<script type="module" src="/src/main.jsx"></script>` az egyetlen lehetőség.

### main.jsx

A `main.jsx`-ben látható, hogy a `root` elemhez az `App`-ot rendereljük

### App.jsx

A minta alkalmazás minden eleme itt található. A felhasználó számára látható összes elem ezen keresztül jelenik meg. Tartalmát a normál HTML5 tag elhelyezésével is tudjuk módosítani.


## Tartalom formázása
A Vite/React alkalmazásban a `index.css` és az `App.css` segítségével tudunk formázni. Ezek két különböző szerepet töltenek be. A felosztásuk célja, hogy a stílusokat logikusan elkülönítsük, és a fejlesztést átláthatóbbá tegyük.

### `index.css` – Globális stílusok
Ebben olyan formázásokat helyezünk el, amelyek az egész alkalmazásra érvényesek. Alapértelmezett betűtípusok, színek, háttérszínek, layout-ok és konténer stílusok. Már a `main.jsx`-ben importáljuk, hogy minden komponens számára elérhetőek legyenek. Pl.:

```CSS 
/* index.css */
body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
    color: #333;
}

h1, h2, h3 {
    margin: 0;
}
```

### `App.css` – Komponens-szintű stílusok
Lehetőség van az adott komponenshez tartozó formázások komponens mellé helyezésére, amelyet importálunk a komponensbe. Jellemzően az `App.jsx`-ben szokás létrehozni a dokumentum főbb elemeit `header`-t, `footer`-t, `main`-t, ... * Pl.: az **App** komponenshez tartozó formázásokat el tudjuk helyezni az `App.css` fájlban. * 

```CSS
/* App.css */
.App {
    text-align: center;
}

.App-header {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
}
```

## Komponensek formázása
Elég sok lehetőség közül választhatunk

### modul szerűen
A komponens mellé egy css fájlt helyezünk `komponens_neve.modul.css` mellé és a komponensbe importáljuk.

### CSS-in-JS
A komponens létrehozásakor megadjuk a formázásra vonatkozó szabályokat is. (*`styled-components`*)


