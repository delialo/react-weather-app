import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-secondary" />
          </div>
        </div>
      </form>
      <h1>Helsinki</h1>
      <ul>
        <li>Sunday, Dec 21</li>
        <li>3:24 PM</li>
        <li>broken clouds</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://cdn.search.brave.com/serp/v3/_app/immutable/assets/04d.D1RoiTJ0.svg"
            alt="Weather Icon"
          />
          3°C
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 0%</li>
            <li>Humidity: 85%</li>
            <li>Wind: 32 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
