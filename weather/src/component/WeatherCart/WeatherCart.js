import React, { useEffect, useState } from "react";
import {
  BsFillSunFill,
  BsFillSunsetFill,
  BsFillCloudFill,
  BsCloudFog2Fill,
} from "react-icons/bs";
import { WiHumidity, WiStrongWind } from "react-icons/wi";
import { FiWind } from "react-icons/fi";

import "../Weather/Weather.css";
export const WeatherCart = ({ tempInfo }) => {
  const [weather, setWeatheState] = useState();
  const {
    temp,
    humidity,
    pressure,
    speed,
    name,
    Country,
    sunset,
    weathermood,
  } = tempInfo;

  useEffect(() => {
    if (weathermood) {
      switch (weathermood) {
        case "Clouds":
          setWeatheState(<BsFillCloudFill />);
          break;
        case "Haze":
          setWeatheState(<BsCloudFog2Fill />);
          break;
        case "Clear":
          setWeatheState(<BsFillSunFill />);
          break;
        default:
          setWeatheState(<BsFillSunFill />);
          break;
      }
    }
  }, [weathermood]);

  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}: ${date.getMinutes()}`;
  return (
    <article className="widget">
      <div className="weatherIcon">{weather}</div>
      <div className="weatherInfo">
        <div className="temperature">
          <span>{temp}&deg;</span>
          <div className="description">
            <div className="weatherCondition">sunny</div>
            <div className="place">
              {name},{Country}
            </div>
          </div>
        </div>
      </div>
      <div className="date">{new Date().toLocaleString()}</div>
      <div className="extra-temp">
        <div className="temp-info-minmax">
          <div className="two-side-section">
            <p>
              <BsFillSunsetFill />
            </p>
            <p className="extra-info-leftside">
              {timeStr}
              <br />
              Sunday
            </p>
          </div>
        </div>

        <div className="weather-extra-info">
          <div className="two-side-section">
            <p>
              <WiHumidity />
            </p>
            <p className="extra-info-leftside">
              {humidity}
              <br />
              Humidity
            </p>
          </div>
        </div>

        <div className="weather-extra-info">
          <div className="two-side-section">
            <p>
              <FiWind />
            </p>
            <p className="extra-info-leftside">
              {pressure}
              <br />
              Pressure
            </p>
          </div>
        </div>

        <div className="weather-extra-info">
          <div className="two-side-section">
            <p>
              <WiStrongWind />
            </p>
            <p className="extra-info-leftside">
              {speed}
              <br />
              Speed
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};
