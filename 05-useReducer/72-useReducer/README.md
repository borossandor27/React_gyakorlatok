# Virtuális DOM

A React DOM nem külön DOM, hanem egy **köztes réteg**

## Egy kattintás lépései

A **böngésző DOM** érzékeli a kattintást, továbbítja az eseményt a **React „event system”**-jének *(ami a React DOM rétegben van)*, a React meghívja a te komponensed eseménykezelőjét, majd ha az állapot *(state)* változik, React újrarendereli a virtuális DOM-ot, összehasonlítja a valódi DOM-mal, és csak a szükséges részt frissíti.

1. A böngésző érzékeli az eseményt
1. `React DOM` elkapja és továbbítja a Reactnek
1. React feldolgozza (pl. setState)
1. React új `Virtual DOM`-ot készít
1. React DOM frissíti a böngésző DOM-ot *(ahol változott!)*
1. A felhasználó a frissített DOM-ot látja

## A Szintetikus Eseményrendszer (Synthetic Events)

### Eseménydelegálás (Event Delegation)

### A `SyntheticEvent` Objektum

### Az Események Pool-ozása *(Pooling)*
