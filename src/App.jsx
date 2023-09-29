import "./App.css";
import CountryList from "./components/list/CountryList";
import CountryDisplay from "./components/display/CountryDisplay";

function App() {
  return (
    <div className="App">
      <CountryList />
      <CountryDisplay />
    </div>
  );
}

export default App;
