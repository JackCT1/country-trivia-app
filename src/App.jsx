import "./App.css";
import CountryList from "./components/list/CountryList";
import CountryDisplay from "./components/display/CountryDisplay";
import { useState } from "react";

function App() {
  const [selectedCountry, setSelectedCountry] = useState("");
  return (
    <div className="App">
      <CountryList />
      <CountryDisplay />
    </div>
  );
}

export default App;
