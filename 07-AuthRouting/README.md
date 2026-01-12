# Vádett lapok

Ahhoz, hogy védett lapokat készíts React alkalmazásban (pl. csak bejelentkezett felhasználók számára elérhető oldalakat), React Router (v6) és hook-ok kombinációját kell használnod.

## 1. React Router hook-ok (kötelező)

- `useNavigate()` - navigáláshoz *(pl. bejelentkezés utáni átirányítás)*
- `useLocation()` - az aktuális útvonal információinak lekérdezéséhez
- `useParams()` - útvonal paraméterek olvasásához

## 2. Állapotkezeléshez *(bejelentkezési státusz)*

- `useState()` - egyszerű állapotkezelésre
- `useContext()` - komplexebb, globális állapotkezelésre (auth kontextus)
- `useReducer()` - összetett állapotlogikára
