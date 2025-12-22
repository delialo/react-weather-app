import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      feelsLike: response.data.temperature.feels_like,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      icon: response.data.condition.icon_url,
      iconDescription: response.data.condition.icon,
      city: response.data.city,
      date: "Sunday, Dec 21",
      time: "3:24 PM",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-secondary"
              />
            </div>
          </div>
        </form>
        <h1>Helsinki</h1>
        <ul>
          <li>Sunday, Dec 21</li>
          <li>3:24 PM</li>
          <li>{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6 d-flex align-items-center">
            <img src={weatherData.icon} alt={weatherData.iconDescription} />
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="unit ">°C</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Feels like: {Math.round(weatherData.feelsLike)}°C</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {Math.round(weatherData.wind)} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "f56ddo443f56b76637t0be5d36d0503a";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
