# `useEffect` gyakorló feladatok

## Számláló alkalmazás fejlesztése

**Leírás**: Készíts egy számlálót, ami növelni, csökkenteni és nullázni tud egy értéket. A számláló értékét jelenítsd meg nagy, olvasható betűkkel.

**useState fókusz**: Egyetlen szám típusú állapot kezelése.

**useEffect fókusz**: Minden alkalommal, amikor a számláló értéke megváltozik, írd ki a konzolra egy üzenetet: `A számláló értéke most: X`. (Itt `X` a számláló aktuális értéke).

**Kihívás**: Legyen egy gomb, amivel a számláló értékét egy véletlenszámra (1-100 között) állíthatjuk.

## Világos/Sötét mód váltó

**Leírás**: Készíts egy komponenst, ami egy gomb segítségével vált a "világos" és "sötét" témák között. A háttér és a szöveg színe váltson ennek megfelelően.

**useState fókusz**: Egy logikai (`boolean`) vagy szöveges (`string`) állapot kezelése, ami a téma nevét tárolja.

**useEffect fókusz**: Amikor a téma megváltozik, mentsd el az új téma nevét a böngésző `localStorage`-ába. Amikor az oldal betöltődik, olvasd ki az értéket a `localStorage`-ból és állítsd be kezdőértéknek.

**Kihívás**: Az oldal `<title>`-jét is állítsd át úgy, hogy tükrözze az aktuális témát (pl. "MyApp - Dark Mode").

## Todo lista *(klasszikus, de kiváló)*

**Leírás**: Hozz létre egy egyszerű todo listát, ahol új feladatot lehet hozzáadni egy input mezőből, és a feladatokat ki lehet pipálni (kész).

**useState fókusz**: Tömb típusú állapot kezelése, amely objektumokat (`{id: 1, text: "Tanulni Reactet", completed: false}`) tárol. Helyes frissítés a `map` és `filter` metódusokkal.

**useEffect fókusz**: Minden alkalommal, amikor a todo lista megváltozik, számold ki és jelenítsd meg a **még befejezetlen feladatok számát**.

**Kihívás**: Legyen lehetőség törölni egy feladatot, és szűrj külön gombokkal a "Mind", "Active", "Completed" feladatokra.

## Időzítő *(Timer/Stopwatch)*

**Leírás**: Készíts egy időzítőt, amely elindítható, megállítható és nullázható. Az időt másodpercben (és esetleg ezredmásodpercben) kell mérni.

**useState fókusz**: Több állapot (idő értéke, fut-e) kezelése.

**useEffect fókusz**: Az `useEffect` itt kulcsfontosságú. Ha az időzítő fut, indíts egy `setInterval`-t, ami másodpercenként növeli az időt.

> **FIGYELEM**: A `setInterval`-t mindig törölni kell a cleanup függvényben (return `() => clearInterval(...)`)!

**Kihívás**: Legyen "Köridő" funkció, ami lementi az aktuális időt egy listába anélkül, hogy megállítaná az időzítőt.

## Véletlen felhasználó lekérő *(Random User Fetcher)*

**Leírás**: Hozz létre egy alkalmazást, ami a [Random User Generator API](https://randomuser.me/api) segítségével jelenít meg egy véletlen személy adatait *(név, kép, email)*.

**useState fókusz**: Objektum típusú állapot kezelése (a felhasználó adatai) és egy másik állapot a betöltés állapotának (`isLoading`) és esetleges hibák tárolására (`error`).

**useEffect fókusz**: Az alkalmazás betöltésekor (`[]` üres függőségi lista) automatikusan hívjon meg egy felhasználót. Legyen egy "Új betöltése" gomb, ami újra meghívja az API-t.

**Kihívás**: Implementálj debounce-ot a "Új betöltése" gombra, hogy ne lehessen 2 másodpercnél gyorsabban kattintani rajta *(elkerülve a felesleges API hívásokat)*.

## Keresés élő találatokkal *(Live Search)*

**Leírás**: Hozz létre egy keresőmezőt, ami egy fix lista alapján *(pl. városnevek, termékek)* szűr élőben. A szűrt listát jelenítsd meg alatta.

**useState fókusz**: Két állapot: a beírt keresőkifejezés (`searchTerm`) és a szűrt lista eredményei (`results`).

**useEffect fókusz**: Az `useEffect` függjön a `searchTerm` változásától. Amikor az változik, indíts egy `setTimeout`-ot (debouncing), ami 300 ms után hajtja végre a szűrést. **Ne felejtsd el törölni a timeout-ot a cleanup-ban**!

**Kihívás**: Használj egy nyilvános API-t *(pl. [The Movie Database - TMDB](https://developer.themoviedb.org/docs/getting-started))* a filmek kereséséhez, és a szűrés helyett tényleges API kérést indíts a `useEffect`-ből.

## [Fontawesome használata](https://docs.fontawesome.com/v5/web/use-with/react)

```bash
npm i --save @fortawesome/fontawesome-svg-core
npm install --save @fortawesome/free-solid-svg-icons
npm install --save @fortawesome/react-fontawesome
```
