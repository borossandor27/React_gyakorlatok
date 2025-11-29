const CountryCard = ({ countryData }) => {
  console.log("CountryCard komponens countryData prop:", countryData);
  console.log(
    "CountryCard komponens countryData prop tipus:",
    typeof countryData
  );
  console.log(
    "címer adat:",
    countryData ? countryData.coatOfArms.svg : "Nincs adat"
  );
  return (
    <>
      <img src={countryData ? countryData.flags.svg : ""} alt={countryData ? countryData.flags.alt : ""} className="flag flag-left" />
      <img src={countryData ? countryData.flags.png : ""} alt={countryData ? countryData.flags.alt : ""} className="flag flag-right" />
      <h1>{countryData ? countryData.name.common : "Loading..."}</h1>
      {countryData && countryData.coatOfArms && countryData.coatOfArms.svg && (
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
            <th>Property</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Főváros</td>
            <td>{countryData ? countryData.capital : "N/A"}</td>
          </tr>
          <tr>
            <td>Fizető eszköz</td>
            <td>
              {countryData && countryData.currencies
                ? Object.values(countryData.currencies)[0].name
                : "Nincs adat"}
            </td>
          </tr>
          <tr>
            <td>Terület</td>
            <td>
              {countryData
                ? countryData.area
                    .toLocaleString('hu-HU') + " km²"
                : "N/A"}
            </td>
          </tr>
          <tr>
            <td>Népesség</td>
            <td>
              {countryData
                ? countryData.population
                    .toLocaleString('hu-HU') + " fő"
                : "N/A"}
            </td>
          </tr>
          <tr>
            <td>Vele határos országok</td>
            <td>{countryData && countryData.borders && countryData.borders.length ? countryData.borders.join(", ") : "N/A"}</td>
          </tr>
        </tbody>
      </table>
      {/* TÉRKÉP MEGJELENÍTÉSE */}
      {countryData && countryData.latlng && (
        <div id="terkep">
          <iframe
            title={`${countryData.name.common} elhelyezkedése`}
            src={`https://maps.google.com/maps?q=${countryData.latlng[0]},${countryData.latlng[1]}&t=&z=6&ie=UTF8&iwloc=&output=embed`}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      )}
    </>
  );
};

export default CountryCard;
