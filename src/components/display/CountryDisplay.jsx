import { useState, useEffect } from "react";

export default function CountryDisplay({ displayCountry }) {
  const [countryData, setCountryData] = useState(undefined);

  useEffect(() => {
    const getCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const countryData = await response.json();
        setCountryData(countryData);
      } catch (error) {
        console.log("Error:" + error);
      }
    };
    getCountries();
  }, []);

  if (!countryData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="content">
      <h1>List of Countries</h1>
      <div>
        {countryData.map((country) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <button onClick={displayCountry}>
              <h2>{country.name.common}</h2>
            </button>
          );
        })}
      </div>
    </div>
  );
}
