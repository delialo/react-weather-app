import logo from "./logo.svg";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <footer>
        This project is open sourced on{" "}
        <a
          href="https://github.com/delialo/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        {/* and hosted on
        <a href="#" target="_blank" rel="noreferrer">
          Netlify
        </a> */}
        .
      </footer>
    </div>
  );
}
