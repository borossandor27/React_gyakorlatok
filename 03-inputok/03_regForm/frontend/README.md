# Beviteli mezők

## 1. Vezérelt (Controlled) Komponensek (State)

- **Használat**: Vezetéknév, Keresztnév, Jelszó, Dátum, Hírlevél (Checkbox), Érdeklődési terület (Select).
- **Mechanizmus**: Ezeknél a mezőknél a React komponens állapota (formData a useState-ben) tárolja az aktuális értéket.
  - Minden beviteli mezőnek van egy value (vagy checked a checkboxnál) propja, ami az állapotból származik.
  - Minden beviteli mezőnek van egy onChange eseménykezelője (handleChange), amely a beviteli változáskor azonnal frissíti a React állapotot.

- **Előny**: A React könnyen tudja kezelni a validációt és a valós idejű felhasználói visszajelzést, mert mindig tudja, mi a mező aktuális tartalma.

## 2. Vezérletlen (Uncontrolled) Komponensek (useRef)

- **Használat**: Irányítószám.
- **Mechanizmus**: Ezeknél a mezőknél a DOM (a böngésző) tárolja az aktuális értéket. A React nem frissül minden karakter beírásakor.
  - A mezőre egy ref={zipCodeRef} attribútumot helyezünk.
  - Amikor szükségünk van az értékre (a `handleSubmit` függvényben), közvetlenül a DOM-ból kérjük le a `zipCodeRef.current.value` használatával.
- **Előny**: Gyorsabb lehet apróbb, egyszerűbb űrlapoknál, ahol nem kell valós idejű visszajelzés.
- **Hátrány**: Nehezebben kezelhető validáció és komplex űrlapoknál nem ajánlott.

## 3. Adatküldés (Axios)

A `handleSubmit` függvényben:

1. Összegyűjtjük a Controlled adatokat a `formData` állapotból.
1. Összegyűjtjük az Uncontrolled adatokat a `zipCodeRef.current.value`-ból.
1. Összefűzzük az adatokat egyetlen objektummá: `dataToSend`.
1. Elküldjük a kérést az `axios.post(API_URL, dataToSend)` paranccsal.
