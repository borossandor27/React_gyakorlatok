# Props

A komponensek újra felhasználhatósága miatt elengedhetetlen, hogy paramétrezni tudjuk őket. A paraméterként átadott értékeket nevezzük röviden `props`-nak *(properties?)*

## PropTypes

Az átadott adatokat célszerű több szempont miatt is ellenőrízni.
A JavaScript dinamikus típusossága miatt nagyon hasznos, ha a kollégáknak is egyértelműen jelezzük a várt adat jellegét. Erre a célra használjuk a `PropTypes`-t. Az adattípus meghatározáson kívül nagyon sok egyéb ellenőrzési funkciót is kínál. A  `PropTypes` segít az egységes adatstruktúra betartásában.

```jsx
import PropTypes from 'prop-types';
```

> [!CAUTION]
> A React 19 már **nem végzi el** a `propTypes` ellenőrzését: a megadott szabályokat szó nélkül figyelmen kívül hagyja, hibás prop esetén sem jelenik meg figyelmeztetés a konzolban. Ez a projekt React 19-et használ, ezért a `propTypes` itt csak dokumentációként szolgál. A propok típusának ellenőrzésére ma a TypeScript az ajánlott megoldás.

> [!NOTE]
> React 18-ig a PropTypes csak fejlesztési módban futott (a production buildben nem ellenőrizte a propokat), és a kötelező propok (`isRequired`) elhagyása esetén a fejlesztői konzolban jelent meg figyelmeztetés.
