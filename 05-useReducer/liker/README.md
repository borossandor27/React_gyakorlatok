# Liker

Az <https://retoolapi.dev/jr8663/liker> végpontok segítségével megjelenítjük a felhasználót és megdjuk a lehetőséget az 1-5-ig való értékeléshez.

## [Font Awesome használata](https://docs.fontawesome.com/web/use-with/react)

### keretrendszer telepítése

```javascript
npm i --save @fortawesome/react-fontawesome
```

### Free ikonok telepítése

Ingyenes verziók stílusai:

- Solid (Tömör): npm i --save @fortawesome/free-solid-svg-icons
- Regular (Körvonalas): npm i --save @fortawesome/free-regular-svg-icons
- Brands (Márkajelzések): npm i --save @fortawesome/free-brands-svg-icons

```javascript
npm install --save @fortawesome/free-solid-svg-icons
npm install --save @fortawesome/free-regular-svg-icons
npm install --save @fortawesome/free-brands-svg-icons   
```

### Használat a komponensben

```jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';   


<FontAwesomeIcon icon={faCoffee} />
<FontAwesomeIcon icon="coffee" />
<FontAwesomeIcon icon={["fas", "coffee"]} />   
```

| **fontawesome-svg-core** | Az ikonok logikáját, keresését és renderelését végzi. |
| **free-solid-svg-icons** | Maguk az ikon fájlok (adatok). |
| **react-fontawesome** | Lehetővé teszi, hogy `<FontAwesomeIcon />` elemként használd őket. |