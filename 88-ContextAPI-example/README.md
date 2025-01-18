# Context API

Készítünk egy egyszerű alkalmazást, ahol a felhasználó témáját (dark vagy light) a Context API segítségével osztjuk meg a komponensek között.

A `Header` és `Content` komponensekben a `useContext` hookot használjuk a `ThemeContext` értékeinek elérésére.
A `Header` módosítja a témát, míg a `Content` megjeleníti.