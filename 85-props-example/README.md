# Props

A komponensek újra felhasználhatósága miatt elengedhetetlen, hogy paramétrezni tudjuk őket. A paraméterként átadott értékeket nevezzük röviden `props`-nak

# PropTypes
Az átadott adatokat célszerű több szempont miatt is ellenőrízni. 
A JavaScript dinamikus típusossága miatt nagyon hasznos, ha a kollégáknak is egyértelműen jelezzük a várt adat jellegét. Erre a célra használjuk a `PropTypes`-t. Az adattípus meghatározáson kívül nagyon sok egyéb ellenőrzési funkciót is kínál. A  `PropTypes` segít az egységes adatstruktúra betartásában.

```jsx
import PropTypes from 'prop-types';
```

[!CAUTION]
A PropTypes csak fejlesztési módban fut. A termelési (production) buildben nem ellenőrzi a props-okat.

[!CAUTION]
A kötelező props-ok (isRequired) elhagyása esetén a fejlesztői konzolban figyelmeztetést kapsz.
