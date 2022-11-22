import "./Weather.css";
import React, { useState } from "react";
import axios from "axios";

function Weather() {
  let [weather, setWeather] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [city, setCity] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = `aca4dd3643b89e94dbd3cac6cf6f2638`;
    let units = `metric`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showWeather);
  }

  function showWeather(response) {
    console.log({ response });
    setWeather({
      city: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].main,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
    setLoaded(true);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form>
      <input type="text" placeholder="Enter a city.." onChange={updateCity} />
      <input type="submit" value="Search" onClick={handleSubmit} />
    </form>
  );

  if (loaded) {
    return (
      <div className="Weather">
        {form}
        <ul>
          <li>
            <h1>{weather.city}</h1>
          </li>
          <li>
            Tempertature: <strong>{Math.round(weather.temperature)}°C</strong>
          </li>
          <li>
            <strong>{weather.description}</strong>
          </li>
          <li>
            <img alt="icon" src={weather.icon} />
          </li>
          <li>
            <small>Humidity: {Math.round(weather.humidity)}%</small>
          </li>
          <li>
            <small>Wind: {Math.round(weather.temperature)}km/h</small>
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}

export default Weather;
