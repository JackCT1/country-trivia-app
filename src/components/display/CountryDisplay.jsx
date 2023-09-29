import { useState } from "react";

export default function CountryDisplay() {
  const [countryData, setCountryData] = useState(undefined);

  useEffect(async () => {
    fetchData('spain')
  }, [])

  function fetchData(country) {
    const apiResponse = await fetch(
      `https://restcountries.com/v3.1/name/${country}`
    )
    const countryData = await apiResponse.json()
    setCountryData(countryData)
  }

  if (!countryData) {
    return <div>Loading...</div>;
  }

  return <div>{JSON.stringify(countryData)}</div>;
}
