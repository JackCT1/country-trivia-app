import "./App.css";
import CountryList from "./components/list/CountryList";
import CountryDisplay from "./components/display/CountryDisplay";
import { useState } from "react";

function App() {
  const [selectedCountry, setSelectedCountry] = useState("");

  const displayCountry = (event) => {
    event.preventDefault();
    const country = event.target.textContent;
    setSelectedCountry(country);
    console.log(selectedCountry);
  };
  return (
    <div className="App">
      <CountryList selectedCountry={selectedCountry} />
      <CountryDisplay displayCountry={displayCountry} />
    </div>
  );
}

export default App;
