/*
A CSS-szelektorokat öt kategóriába sorolhatjuk:

- Egyszerű kiválasztók (elemek kiválasztása név, azonosító, osztály alapján)
- Kombinátorválasztók (az elemek kiválasztása a köztük lévő konkrét kapcsolat alapján)
- Pszeudoosztály szelektorok (elemek kiválasztása egy bizonyos állapot alapján)
- Pszeudoelem-választók (egy elem egy részének kijelölése és stílusa)
- Attribútumválasztók (elemek kiválasztása attribútum vagy attribútumérték alapján)
*/
import './App.css';
import ButtonPszeudo from './components/ButtonPszeudo';
import ButtonBase from './components/ButtonBase';
import ButtonProps from './components/ButtonProps';
import ListUnordered from './components/ListUnordered';
// A CSS-in-JS egy olyan technológia, amely lehetővé teszi a CSS kódok JavaScript kódokkal való kezelését.
// Styled-components segítségével a CSS kódokat a komponensekhez rendelhetjük, így a CSS kódokat a komponensekkel együtt tárolhatjuk.


export default function App() {
  const fruits = ['Apple', 'Banana', 'Cherry', 'Dates'];
  const vegetables = ['Carrot', 'Potato', 'Spinach', 'Broccoli'];
  
  return  (
    <div>
      <ButtonBase>Standard CSS</ButtonBase>
      <ButtonProps primary>Props</ButtonProps>
      <ButtonProps>Props</ButtonProps>
      <ButtonPszeudo primary>Pszeudo</ButtonPszeudo>
      <ButtonPszeudo>Pszeudo</ButtonPszeudo>
      <h1>Fruits</h1>
      <ListUnordered items={fruits} />

      <h1>Vegetables</h1>
      <ListUnordered items={vegetables} />
    </div>
  )
  
}
