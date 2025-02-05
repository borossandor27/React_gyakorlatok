# KeyPressTracker

1.     A `useState('')` inicializál egy key nevű állapotot, amely az utoljára lenyomott billentyűt fogja tárolni.
2.    A `handleKeyPress` függvény frissíti a key értékét az event.key alapján.
3.    Az `useEffect` egy eseményfigyelőt (keydown) csatol a window objektumhoz.
4.    Az eseményfigyelő minden billentyűlenyomáskor meghívja a `handleKeyPress` függvényt.
5.    Az állapot módosul, ezért elvileg az új értéknek meg kell jelennie az oldalon.

## Mikor fut le a removeEventListener?
```jsx
return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
```        
A `return () => {...}` egy cleanup function, amely akkor fut le, amikor:
- A komponens unmountolódik.
- Az useEffect újrafut (például ha függőségi listában lévő változó megváltozik).

## Miért fontos az eseményfigyelő eltávolítása?

### Memóriaszivárgás megelőzése
Ha nem távolítjuk el, akkor a handleKeyPress függvény továbbra is megmaradna a memóriában, és a böngésző továbbra is meghívná még akkor is, ha a komponens már nem létezik.

### Többszörös eseményfigyelő elkerülése
Ha a komponens újrarenderelődik (például egy másik useEffect futása miatt), akkor új eseményfigyelőt adnánk hozzá, miközben a régi is aktív maradna. Ez duplikált hívásokat eredményezne.

### Jobb teljesítmény és stabil működés
Ha sok eseményfigyelő marad a memóriában eltávolítás nélkül, az lassítja a weboldalt és felesleges erőforrást használ.