<?php
// egy N nevű egész típusú változónak bekéri az értékét, majd egy N elemű tömböt hoz létre
echo "Kérem adja meg a tömb méretét: ";
$N = (int)trim(fgets(STDIN));
$T = array();

// A tömb  elemeit bekéri a felhasználótól. 
for ($i = 0; $i < $N; $i++) {
    echo "Kérem adja meg a tömb " . ($i + 1) . ". elemét: ";
    $T[$i] = (int)trim(fgets(STDIN));
}
// A tömb elemeit buborékos rendezéssel növekvő sorrendbe rendezi
for ($i = 0; $i < $N - 1; $i++) {
    for ($j = 0; $j < $N - $i - 1; $j++) {
        if ($T[$j] > $T[$j + 1]) {
            $temp = $T[$j];
            $T[$j] = $T[$j + 1];
            $T[$j + 1] = $temp;
        }
    }
}

// kiírja a rendezett tömb elemeit.
echo "A rendezett tömb elemei: ";
for ($i = 0; $i < $N; $i++) {
    echo $T[$i] . " ";
}
?>