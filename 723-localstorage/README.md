# Localstorage

A `localStorage `a böngésző beépített *Web Storage API* része (nem React-specifikus).
Lehetővé teszi, hogy a weboldalak kulcs–érték párokat tároljanak a felhasználó gépén, **lejárati idő nélkül**. A React csak kényelmesen használja a komponenslogikában.

Három fő metódusa van:

```javascript
localStorage.setItem("kulcs", "érték")    // mentés
localStorage.getItem("kulcs")            // lekérés
localStorage.removeItem("kulcs")         // törlés
```

## Cookie

Másik lehetőség adatok tárolására a kliens számítógépén. Kis méretű adatfájl, amit a szerver küld a böngészőnek, és a böngésző **minden további kérésnél visszaküldi** a szervernek.

## Localstorage és Cookie összehasonlítása

| Tulajdonság             | **localStorage**                                       | **Cookie**                                                        |
| ----------------------- | ------------------------------------------------------ | ----------------------------------------------------------------- |
| **Adat tárolás helye**  | Böngészőben, csak kliens oldalon                       | Böngészőben és elküldésre kerül a szervernek is                   |
| **Méretkorlát**         | kb. 5–10 MB/domain                                     | kb. 4 KB/süti                                                     |
| **Lejárat**             | Nincs automatikus lejárat                              | Beállítható `expires` vagy `max-age` attribútummal                |
| **Elérhetőség**         | Csak JavaScriptből (vagy böngésző developer tools-ból) | JavaScriptből és HTTP fejlécekből is                              |
| **Küldés szerver felé** | Nem küldődik automatikusan                             | Minden kérésnél automatikusan elküldődik                          |
| **Biztonság**           | Kliens oldalon marad, kevésbé veszélyes a túlhasználat | Ha nincs `HttpOnly` és `Secure`, sebezhető lehet (XSS, adatlopás) |
| **Tipikus használat**   | Frontend adatok, beállítások                           | Hitelesítés, session kezelés, tracking                            |


Ebben a példában, ha beírod a neved, majd újratöltöd az oldalt, akkor már azon a néven fog köszönteni, a neved megmarad ebben a böngészőben.
