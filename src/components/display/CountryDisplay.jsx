import { useEffect, useState } from "react";

export default function CountryList({ selectedCountry }) {
  const [countryData, setCountryData] = useState(undefined);
  console.log(selectedCountry);
  console.log(countryData);

  useEffect(() => {
    if (selectedCountry) {
      const getCountryData = async () => {
        try {
          const response = await fetch(
            `https://restcountries.com/v3.1/name/${selectedCountry}`
          );
          const country = await response.json();
          setCountryData(country[0]);
        } catch (error) {
          console.log("Error:" + error);
        }
      };
      getCountryData();
    }
  }, [selectedCountry]);

  if (!countryData) {
    return (
      <div className="content">
        <h1>Select a country...</h1>
      </div>
    );
  }
  return (
    <div className="content">
      <h1>Country:{countryData.name.common}</h1>
      <p>Capital:{countryData.capital}</p>
      <p>Population:{countryData.population}</p>
      <img src={countryData.flags.png} alt="" />
    </div>
  );
}
