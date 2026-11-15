const CountryCard = ({ countryData }) => {
  // Amíg nincs adat, nem jelenítünk meg üres képeket és táblázatot
  if (!countryData) {
    return <h1>Betöltés...</h1>;
  }

  return (
    <>
      <img src={countryData.flags.svg} alt={countryData.flags.alt} className="flag flag-left" />
      <img src={countryData.flags.png} alt={countryData.flags.alt} className="flag flag-right" />
      <h1>{countryData.name.common}</h1>
      {countryData.coatOfArms && countryData.coatOfArms.png && (
        <div id="orszagcimer">
          <img
            src={countryData.coatOfArms.png}
            alt={countryData.name.common + " címer"}
          />
        </div>
      )}
      <table>
        <thead>
          <tr>
            <th>Tulajdonság</th>
            <th>Érték</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Főváros</td>
            <td>{countryData.capital?.length ? countryData.capital.join(", ") : "N/A"}</td>
          </tr>
          <tr>
            <td>Fizető eszköz</td>
            <td>
              {countryData.currencies && Object.keys(countryData.currencies).length
                ? Object.values(countryData.currencies)[0].name
                : "Nincs adat"}
            </td>
          </tr>
          <tr>
            <td>Terület</td>
            <td>
              {countryData.area.toLocaleString('hu-HU') + " km²"}
            </td>
          </tr>
          <tr>
            <td>Népesség</td>
            <td>
              {countryData.population.toLocaleString('hu-HU') + " fő"}
            </td>
          </tr>
          <tr>
            <td>Vele határos országok</td>
            <td>{countryData.borders?.length ? countryData.borders.join(", ") : "N/A"}</td>
          </tr>
        </tbody>
      </table>
      {/* TÉRKÉP MEGJELENÍTÉSE */}
      {countryData.latlng && (
        <div id="terkep">
          <iframe
            title={`${countryData.name.common} elhelyezkedése`}
            src={`https://maps.google.com/maps?q=${countryData.latlng[0]},${countryData.latlng[1]}&t=&z=6&ie=UTF8&iwloc=&output=embed`}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      )}
    </>
  );
};

export default CountryCard;
