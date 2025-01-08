// egy N nevű egész típusú változónak bekéri az értékét, majd egy N elemű tömböt hoz létre
// az ES6-ban nincs lehetőség konzolról beolvasni, ezért a N értékét fixen adtam meg
N=5;
let T = new Array(N);
// A tömb  elemeit bekéri a felhasználótól. 
Array.from({length: N}, (_, i) => {
    T[i] = Math.floor(Math.random() * 90)+10;
});
// A tömb elemeit buborékos rendezéssel növekvő sorrendbe rendezi
for (let i = 0; i < N-1; i++) {
    for (let j = 0; j < N-i-1; j++) {
        if (T[j] > T[j+1]) {
            let temp = T[j];
            T[j] = T[j+1];
            T[j+1] = temp;
        }
    }
}
// kiírja a rendezett tömb elemeit.
console.log(T);