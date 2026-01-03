# useState használata több mezőhöz

 React-ban az űrlapelemek *(input, textarea, select)* értékének frissítéséhez szükséges az `onChange` eseménykezelő használata, hogy a felhasználói bevitel megjelenjen az állapotban (`state`), és ezáltal a React-DOM frissüljön.

 Mivel a React űrlapelemei kontrollált komponensekként működnek, az állapot (`useState`) és az input mező értéke (`value attribútum`) össze van kötve.
> [!WARNING]
> Ha nincs `onChange`, a mező értéke nem frissül megfelelően.
