# `useContext` használat

A `useContext` egy React Hook, amely lehetővé teszi a Context API használatát funkcionális komponensekben. A Context lehetőséget biztosít adatok globális elérésére a komponensfában, anélkül, hogy props-okat kellene átadni minden szinten *("prop drilling")*.

## Mire használható?

- **Globális állapot kezelés**: például felhasználói adatok, témabeállítások, nyelvi preferenciák
- **Prop drilling elkerülése**: mélyen egymásba ágyazott komponensek közötti adatmegosztás
- **Téma- vagy stílusváltás**: világos/sötét mód kezelése
- **Autentikáció**: bejelentkezett felhasználó adatainak elérése
- **Nyelvi lokalizáció**: alkalmazás nyelvének kezelése

## Hogyan működik?

1. **Context létrehozása**: Létrehozunk egy Context objektumot a `React.createContext()` hívással. Ez ad nekünk két komponenst: egy **Provider**-t és egy **Consumer**-t *(bár a Consumer-t a `useContext` hook váltotta fel)*.
1. **Provider komponens**: Adatokat szolgáltat a leszármazott komponenseknek. Úgy kell elhelyeznünk, hogy minden Consumer hozzáférhessen. A Provider komponensnek van egy `value` nevű prop-ja, ami tartalmazza azokat az adatokat, amiket a Context-en keresztül szeretnénk továbbítani.
1. **Consumer komponensek**: Bármely utód komponens *(ami a Provider-en belül van)* a `useContext(MyContext)` hook meghívásával azonnal hozzáférhet a Provider által beállított `value`-hoz.

> **Note** Minden Consumer újrarenderelődik, ha a Context értéke változik, gyakran változó adatokhoz ne használd!
