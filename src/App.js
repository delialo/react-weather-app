import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container mt-3 mb-3">
        <h1>Weather App</h1>
        <Weather />
        <footer>
          This project is open sourced on{" "}
          <a
            href="https://github.com/delialo/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://ld-weather-app-react.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
