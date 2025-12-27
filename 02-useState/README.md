# Memória változók létrehozása

A React egy saját DOM-ot épít és újraépít. Ha szeretnénk a böngésző-DOM elemeivel és adataival dolgozni, akkor memóriaváltozókat kell használni erre a célra. Ezt a szolgáltatást is inicializálni kell az alábbi utasítással:

```javascript
import {useState} from "react"
```

## `useState` szintaxis

```javascript
function FavoriteColor() {
  const [color, setColor] = useState("red");
}
```

A fenti kód egy `color` változót hoz létre "red" értékkel és egy `setColor` függvényt, amelynek a segítéségével változtatni tudjuk.

> Ezek a nevek olyan változók, amelyeket bármilyen néven elnevezhetünk!
