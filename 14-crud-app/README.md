# Felhasználó nyilvántartó alkalmazás

API végpontok elérése az axios és ```useState``` segítségével. Különálló User osztály helyett API-kezelő függvények. Osztályt akkor lenne célszerű készíteni, ha lennének származtatott adatok és bonyolult ellenőrzések. 

## Főbb funkciók

- Felhasználók listázása – ```GET /user```
- Felhasználó adatainak a megjelenítése – ```GET /user/:id```
- Új felhasználó hozzáadása – ```POST /user```
- Felhasználó adatainak módosítása – ```PUT /user/:id```
- Felhasználó törlése – ```DELETE /user/:id```

## Felhasználókhoz kapcsolódó komponensek:

***UserList:*** A felhasználók listáját jeleníti meg.
- Hívja a ```getUsers```-t az összes felhasználó betöltésére és megjelenítésére.
- Adjon lehetőséget törlésre (```deleteUser```).

***UserDetails:*** Egy kiválasztott felhasználó részleteit jeleníti meg.
***AddUser:*** Új felhasználó hozzáadására vagy meglévő módosítására szolgáló űrlap.
***EditUser:*** Felhasználó adatainak módosítása.

user JSON:
{
    "id": 2,
    "home": "Cape Girardeau, Missouri, United States",
    "name": "Anatollo Lavall",
    "email": "ddevanny3h@senate.gov"
}

[base URL](https://retoolapi.dev/E6LSEs/user)
GET [Összes felhasználó lekérdezése](https://api-generator.retool.com/E6LSEs/user)
GET [Felhasználó id alapján](https://api-generator.retool.com/E6LSEs/user/1)
POST [új felhasználó](https://api-generator.retool.com/E6LSEs/user)
PUT [Felhasználó adatainak a módosítása](https://api-generator.retool.com/E6LSEs/user/1)
DELETE [Felhasználó adatainak a törlése](https://api-generator.retool.com/E6LSEs/user/1)

```bash
npm install react-router-dom
npm install axios
```
```bash
npm install --save @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons @fortawesome/fontawesome-svg-core
```
```javascript
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
```