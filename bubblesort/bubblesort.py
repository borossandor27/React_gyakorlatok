# egy N nevű egész típusú változónak bekéri az értékét, majd egy N elemű tömböt hoz létre
N = int(input("N="))
tomb = [0]*N

# A tömb  elemeit bekéri a felhasználótól. 
for i in range(N):
    tomb[i] = int(input("tomb["+str(i)+"]="))

# A tömb elemeit buborékos rendezéssel növekvő sorrendbe rendezi
for i in range(N-1):
    for j in range(N-1,i,-1):
        if tomb[j-1]>tomb[j]:
            tmp = tomb[j-1]
            tomb[j-1] = tomb[j]
            tomb[j] = tmp

# kiírja a rendezett tömb elemeit.
for i in range(N):
    print(tomb[i],end=" ")

# A program futásának befejezése
print()