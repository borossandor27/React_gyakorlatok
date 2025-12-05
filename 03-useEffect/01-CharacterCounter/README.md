# Karakter számláló - megfigyelt elem kezelése

Vannak olyan beviteli mezők, amelyek változásait folyamatosan követni akarjuk. Ebben az esetben az alábbi műveletekre van szükségünk:

- A beviteli mező értékét React állapotban (`useState`) tárolod.
- Az input `value` attribútuma mindig az állapothoz van kötve.
- Az `onChange` esemény szükséges ahhoz, hogy a felhasználó által beírt értéket visszaírd az állapotba.

```jsx
function App() {
  const [name, setName] = React.useState("");

  return (
    <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
}
```

## Nem figyelt elemek

Egy űrlapon lehetnek olyan elemek, amelyek értékét a `React`-ben nem kell tárolnunk, megfigyelnünk. Ezeket teljes egészében a böngésző DOM kezeli, de jeleznünk kell, hogy ezek is az űrlap részei. Erre a célra szolgál a `useref`.

```jsx
function App() {
  const inputRef = React.useRef();

  function handleSubmit() {
    alert(inputRef.current.value);
  }

  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={handleSubmit}>Küldés</button>
    </>
  );
}
```
