# MouseTracker
Készíts egy komponenst, amely figyeli az egér mozgását egy adott területen, és megjeleníti az egér pozícióját.

Amikor az egér mozog a div felett:
1. Az `onMouseMove` esemény aktiválja a handleMouseMove függvényt.
2. A `setPosition` frissíti az állapotot.
3. A komponens újrarenderelődik az új állapottal.

**Megjegyzés**: A React optimalizálja a rendereléseket, így ha az állapot nem változik, akkor nem frissíti újra az UI-t.