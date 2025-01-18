# CSS-in-JS
A web oldalak formázásához természetesen itt is lehet külső CSS fájlt is használni, de akkor nem használjuk ki azt a lehetőséget, hogy egy komponenst egészben kezelhetünk. Ha szeretnénk növelni az alkalmazásunk átláthatóságát, csökkenteni az ütközések lehetőségét, akkor használjuk a CSS-in-JS-t.

## Prioritások (növekvő sorrendben):
1. Böngésző alapértelmezett stílusai.
2. Külső CSS fájlok (általánosabb szelektorok).
3. Komponens szintű CSS (*pl. CSS Modules vagy CSS-in-JS*).
4. Inline stílusok.
5. '!important' utasítással ellátott szabályok.