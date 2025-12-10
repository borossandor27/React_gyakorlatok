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

## Egy példa a megvalósításra

A megjelenési stílus váltásának a megvalósítása Context-el

### Context létrehozása

Hozzunk létre egy fájlt `ThemeContext.jsx` néven az alábbi tartalommal

```javascript
import React, { createContext, useState } from 'react';

// 1. Context objektum létrehozása
// Adunk neki egy alapértelmezett értéket (ami akkor lesz használva, ha a komponens nincs Providerbe csomagolva)
export const ThemeContext = createContext({
    theme: 'light',
    toggleTheme: () => {},
});

// 2. Provider komponens létrehozása (a logikáért felel)
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
    };

    // Az érték, amit átadunk a fának
    const contextValue = { theme, toggleTheme };

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
};
```

### Provider elhelyezése

A `ThemeProvider`-t helyezzük a komponensfa csúcsára, vagy ahol az adatokra szükség van *(pl. App.js-ben)*.

```javascript
// App.js
import React from 'react';
import { ThemeProvider } from './ThemeContext';
import Toolbar from './Toolbar';

function App() {
  return (
    // Itt állítjuk be a context értékét az egész alkalmazás számára
    <ThemeProvider>
      <Toolbar /> 
      {/* ... további komponensek */}
    </ThemeProvider>
  );
}

export default App;
```

### Context használata

Bármelyik utód komponensben *(pl. Toolbar.js vagy annak egy utódjában)* használhatjuk a `useContext` hook-ot az adatok lekérdezéséhez.

```javascript
// ThemeToggleButton.js (a Toolbar utódja)
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function ThemeToggleButton() {
  // A useContext hook használata
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      A téma jelenleg: {theme} (Kattints a váltáshoz)
    </button>
  );
}

export default ThemeToggleButton;
```

## Több Context használata

```javascript
// Több Context kombinálása
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { UserContext } from './UserContext';
import { LanguageContext } from './LanguageContext';

function Profile() {
  const { theme } = useContext(ThemeContext);
  const { user } = useContext(UserContext);
  const { language } = useContext(LanguageContext);

  return (
    <div className={`profile ${theme}`}>
      <h2>{language === 'hu' ? 'Profil' : 'Profile'}</h2>
      <p>{user.name}</p>
    </div>
  );
}
```

## Adattípusok

A megjelenítésnél és a keresésnél is hasznos, ha az adattípust ismerjük. A JavaScript az alábbi adattípusokat különbözteti meg:

- Number.
- String.
- Boolean.
- Null.
- Undefined.
- BigInt.
- Symbol.
- Object.

A megjelenítés és a keeresés szempontjából az alábbi adatípusokatszeretném megkülönböztetni:

- lebegőpontos szám
- numerikus egész
- logikai érték
- dátum
- szöveg

[Endpoint URL](https://retoolapi.dev/ljArL9/dataTypes)