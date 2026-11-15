# A React Routerek típusai

A React Router háromféle klasszikus routert kínál:

1. **BrowserRouter**: A `BrowserRouter` a leggyakrabban használt útválasztó a modern React alkalmazásokhoz. A HTML5 History API-t használja az útválasztás kezeléséhez, amely lehetővé teszi az URL dinamikus frissítését, miközben biztosítja a böngésző címsorának és előzményeinek szinkronban tartását.
1. **HashRouter**: A `HashRouter` akkor hasznos, ha URL hash-t (#) szeretnél használni az útvonalválasztáshoz a HTML5 history API helyett. Nem igényel szerverkonfigurációt, és akkor is működik, ha a szerver nem támogatja az URL átírását.
1. **MemoryRouter**: A `MemoryRoutert` nem böngészős környezetekben használják, például a React Native-ban vagy tesztek futtatásakor.

## A React Router összetevői

1. `BrowserRouter` vagy `HashRouter`
Az útválasztók csak akkor működnek, ha ezek valamelyikébe ágyazzuk

2. `Routes` és `Route`
    A navigációt meghatározó komponensek
    - **Routes**: Egy tároló az összes útvonaldefiníciónak.
    - **Route**: Egyetlen útvonalat definiál egy elérési úttal és a renderelendő komponenssel.

    ```jsx
    <Routes> 
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} /> 
    </Routes>
    ```

3. `Link` és `NavLink`
Link : Navigációs hivatkozásokat hoz létre az alkalmazásban.
NavLink : A Link fejlesztett változata. Az aktív hivatkozás automatikusan megkapja az `active` CSS osztályt, a `className` propnak pedig függvényt is adhatunk, amely megkapja az `isActive` és `isPending` értéket.

    ```jsx
    <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/users" className={({ isActive }) => (isActive ? "kiemelt" : "")}>Users</NavLink>
        <Link to="/about">About</Link>
    </nav>
    ```

    > A régebbi leírásokban szereplő `activeClassName` propot a React Router v6 megszüntette.

4. `createBrowserRouter` és `RouterProvider`
A v6.4 óta elérhető *data router*: az útvonalakat objektumokkal írjuk le, és minden útvonalhoz megadhatunk adatbetöltő (`loader`) függvényt. A `NavLink` `isPending` állapota csak ilyen routerrel működik. Példa: [ispending](./ispending/).

## Install React Router

    ```bash
    npm install react-router-dom
    ```
