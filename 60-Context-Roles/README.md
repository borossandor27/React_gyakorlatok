# Hitelesítési Állapot Kezelése (Authentication State)

Az alkalmazás egy pontján tároljuk a felhasználó szerepkörét és hitelesítési állapotát. Erre a célra általában a **Context API**-t vagy egy globális állapotkezelő könyvtárat *(pl. Redux, Zustand)* használunk.

## Útvonalvédelem (Route Protection)

Ahhoz, hogy megakadályozd a jogosulatlan hozzáférést a teljes oldalakhoz, védett útvonalakat kell beállítanod a routeredben (pl. React Router használatával).

Ezt egy dedikált `PrivateRoute` vagy `RoleBasedRoute` komponenssel éred el.

### `RoleBasedRoute` Komponens

Ez a komponens ellenőrzi, hogy a bejelentkezett felhasználó szerepköre szerepel-e a megengedett szerepkörök listájában.