# CSS-in-JS
A CSS-in-JS egy olyan technológia, amely lehetővé teszi a CSS kódok JavaScript kódokkal való kezelését.
A formázott komponensek használatához szükségünk van a `styled-components` modulra. Ugyanúgy telepíthetjük, mint a bármelyik npm-et.

```shell
npm install styled-components
```

Styled-components segítségével a CSS kódokat a komponensekhez rendelhetjük, így a CSS kódokat a komponensekkel együtt tárolhatjuk. Ha szeretnénk növelni az alkalmazásunk átláthatóságát, csökkenteni az ütközések lehetőségét, akkor használjuk a CSS-in-JS-t.

A web oldalak formázásához továbbra is lehet külső CSS fájlt is használni (pl.: `index.css` vagy `App.css`). Ezekben célszerű az egész dokumentumra vonatkozó beállításokat elhelyezni. 


## Prioritások (növekvő sorrendben):
1. Böngésző alapértelmezett stílusai.
2. Külső CSS fájlok (általánosabb szelektorok).
3. Komponens szintű CSS (*pl. CSS Modules vagy CSS-in-JS*).
4. Inline stílusok.
5. '!important' utasítással ellátott szabályok.

## Install


