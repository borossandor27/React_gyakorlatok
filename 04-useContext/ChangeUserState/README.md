# Login/Logout – Felhasználói állapot megosztása

Cél: Objektum alapú state contextben.
Feladatok: 

1. Készíts egy `UserContext`-et `user` és `setUser` értékekkel.

    Legyen induláskor:

        ```json
        user = {
                    "id": null,
                    "email": null,
                    "fullname": null,
                    "password": null,
                    "role": "guest",
                    "loggedIn": false
                }
        ```    

    Belépés után:

        ```json
        user = {
            "id": 1,
            "email": "tmenzies6p@hexun.com",
            "fullname": "Chloe Brockman",
            "password": 682,
                    "role": "admin",
                    "loggedIn": true
                }
        ```        

1. Készíts LoginForm komponenst → beállítja a usert.

1. Készíts Profile komponenst → kiírja a user adatait.