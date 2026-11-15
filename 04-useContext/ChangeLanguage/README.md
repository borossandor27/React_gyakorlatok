# Nyelv változtató alkalmazás

A kiválasztott nyelvet a `LanguageContext` teszi elérhetővé az egész alkalmazásban, így nem kell propként továbbadni.

- `src/context/LanguageContext.jsx` – a context létrehozása
- `src/context/LanguageProvider.jsx` – a nyelv állapotát tároló Provider
- `src/translations.js` – a felület szövegei nyelvenként (`hu`, `en`, `de`)
- A fejlécben lévő zászlókra kattintva a `setLanguage` függvény vált nyelvet, és minden, a contextet használó komponens újrarenderelődik.
