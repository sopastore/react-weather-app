import "./App.css";
import React, { useState } from "react";
import axios from "axios";

function App() {
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
    setWeather(true);
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
      <div>
        {form}
        <ul>
          <li> Se llego</li>
          <li>I can do it 💪🏼</li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}

export default App;
