// Az útvonal adatbetöltő (loader) függvénye külön fájlban van,
// hogy a komponenst tartalmazó fájl csak komponenst exportáljon.
export async function usersLoader() {
  // Szimulálunk egy lassú API hívást
  await new Promise((res) => setTimeout(res, 2000));

  return [
    { id: 1, name: "Anna" },
    { id: 2, name: "Bence" },
    { id: 3, name: "Csilla" },
  ];
}
