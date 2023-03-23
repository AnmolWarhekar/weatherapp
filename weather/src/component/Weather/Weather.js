import React, { useEffect, useState } from "react";
import { WeatherCart } from "../WeatherCart/WeatherCart";
import "./Weather.css";

const Weather = () => {
  const [searchValue, setSearchValue] = useState("Pune");
  const [tempInfo, setTemp] = useState({});
  const getWeather = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=9688d4499dc9a8b22ee1eada835eb7c1`;
      const res = await fetch(url);
      const data = await res.json();
      const { temp, humidity, pressure } = data.main;
      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { Country, sunset } = data.sys;
      const myNewinfo = {
        temp,
        humidity,
        pressure,
        speed,
        name,
        Country,
        sunset,
        weathermood,
      };
      setTemp(myNewinfo);
      console.log(temp);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getWeather();
  }, []);
  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search..."
            autoFocus
            id="search"
            className="searchTerm"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button className="searchButton" onClick={getWeather}>
            Seach
          </button>
        </div>
      </div>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <WeatherCart tempInfo={tempInfo} />
      </div>
    </>
  );
};

export default Weather;
