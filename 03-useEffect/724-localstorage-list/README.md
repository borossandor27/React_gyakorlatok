# LocalStorage

Ha nyitsz valamelyik böngészőben egy konzolt, az alábbi kóddal az **összes** tárolt adatot elérheted ezzel az egy utasítással:

```javascript
// Összes kulcs-érték pár
console.log(localStorage);
```

__NOTE** A saját oldaladról, csak a saját adataidat érheted el, másik oldalét nem!

__NOTE** Inkognitó ablak másik tárolót használ!

## Biztonságosabb alternatívák

- **SessionStorage**: Böngésző bezárásával törlődik
- **Memory storage**: Csak JavaScript változóban
- **HttpOnly cookies**: Nem olvasható JavaScript-ből
- **Backend session**: Legbiztonságosabb
