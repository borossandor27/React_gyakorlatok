# Hitelesítési Állapot Kezelése (Authentication State)

Az alkalmazás egy pontján tároljuk a felhasználó szerepkörét és hitelesítési állapotát. Erre a célra általában a **Context API**-t vagy egy globális állapotkezelő könyvtárat *(pl. Redux, Zustand)* használunk.

## Útvonalvédelem (Route Protection)

Ahhoz, hogy megakadályozd a jogosulatlan hozzáférést a teljes oldalakhoz, védett útvonalakat kell beállítanod a routeredben (pl. React Router használatával).

Ezt egy dedikált `PrivateRoute` vagy `RoleBasedRoute` komponenssel éred el.

### `RoleBasedRoute` Komponens

Ez a komponens ellenőrzi, hogy a bejelentkezett felhasználó szerepköre szerepel-e a megengedett szerepkörök listájában.

## Felhasználói adatok tárolása

### Local Storage vagy Session Storage

A React alkalmazás újrarendelődik minden oldalfrissítéskor, így a komponens állapota elveszik, ezért fontos, hogy a felhasználói adatokat tartósan tárold.
A felhasználói hitelesítési állapotot és szerepkört a böngésző `localStorage` vagy `sessionStorage` segítségével is tárolhatod, hogy a felhasználó bejelentkezve maradjon az oldalak közötti navigáció során. Ez azonban kevésbé biztonságos, mint a szerveroldali tárolás, ezért érzékeny adatok esetén körültekintően kell eljárni. 

#### Local Storage
A `localStorage` egy böngésző által biztosított tároló, amely lehetővé teszi az adatok kulcs-érték párokban történő tárolását. **Az itt tárolt adatok a böngésző bezárása után is megmaradnak**.

#### Példa Local Storage használatára
```javascript
// Bejelentkezéskor
localStorage.setItem('userRole', 'admin');
```

```javascript
// Hitelesítési állapot ellenőrzése
const userRole = localStorage.getItem('userRole');
if (userRole === 'admin') {
  // Engedélyezett hozzáférés
} else {
  // Hozzáférés megtagadva
}
```
```
#### Session Storage
A `sessionStorage` szintén egy böngésző által biztosított tároló, amely lehetővé teszi az adatok kulcs-érték párokban történő tárolását. **Az itt tárolt adatok csak a böngésző munkamenetének idejére maradnak meg**, és a böngésző vagy fül bezárásakor törlődnek.

#### Példa Session Storage használatára
```javascript
// Bejelentkezéskor
sessionStorage.setItem('userRole', 'editor');
```
```javascript
// Hitelesítési állapot ellenőrzése
const userRole = sessionStorage.getItem('userRole');
if (userRole === 'editor') {
  // Engedélyezett hozzáférés
} else {
  // Hozzáférés megtagadva
}
```

## Biztonsági megfontolások

Fontos megjegyezni, hogy a kliensoldali tárolás *(például localStorage vagy sessionStorage)* nem biztonságos módja érzékeny adatok tárolásának, mivel ezek az adatok könnyen hozzáférhetők a böngészőben futó JavaScript kód által. Ezért mindig ügyelj arra, hogy csak **nem** érzékeny adatokat tárolj kliensoldalon, és használj szerveroldali hitelesítési mechanizmusokat az érzékeny információk kezelésére.
