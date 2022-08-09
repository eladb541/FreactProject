import React, { useState } from "react";

import CityComponent from './Weather/pages/CityComponent';

import WeatherComponent from './Weather/pages/WeatherComponent';
import Axios from "axios";


function Weather() {
    const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c`,
    );
    updateWeather(response.data);
  };
  return (
    <div>
     
      {city && weather ? (
        <WeatherComponent weather={weather} city={city} />
      ) : (
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      )
    }
    </div>
  )

}
export default Weather