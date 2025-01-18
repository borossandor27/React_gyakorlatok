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
***UserDetails:*** Egy kiválasztott felhasználó részleteit jeleníti meg.
***UserForm:*** Új felhasználó hozzáadására vagy meglévő módosítására szolgáló űrlap.
***UserItem:*** Egyéni felhasználói elem a listában (opcionális).



[base URL](https://retoolapi.dev/E6LSEs/user)
GET [Összes felhasználó lekérdezése](https://api-generator.retool.com/E6LSEs/user)
GET [Felhasználó id alapján](https://api-generator.retool.com/E6LSEs/user/1)
POST [új felhasználó](https://api-generator.retool.com/E6LSEs/user)
PUT [Felhasználó adatainak a módosítása](https://api-generator.retool.com/E6LSEs/user/1)
DELETE [Felhasználó adatainak a törlése](https://api-generator.retool.com/E6LSEs/user/1)