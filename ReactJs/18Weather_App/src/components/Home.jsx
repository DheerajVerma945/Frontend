import React, { useState } from 'react';
import { Link } from "react-router-dom"
import getWeather from "../apiRequest/getweather";
import { FiSun, FiDroplet, FiMoon } from 'react-icons/fi';
import { FaCloud, FaCloudRain, FaSnowflake } from 'react-icons/fa';

function Weather() {
  const [city, setCity] = useState('');
  const [previousCity, setPreviousCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (evt) => {
    setCity(evt.target.value);
  };

  async function handleGetData(evt) {
    setLoading(true);
    evt.preventDefault();
    if (city) {
      setError(null);

      const fetchWeather = new Promise(async (resolve, reject) => {
        try {
          const weatherInfo = await getWeather(city);
          resolve(weatherInfo);
        } catch (err) {
          reject("Failed to fetch weather data");
        }
      });

      const timeout = new Promise((_, reject) =>
        setTimeout(() => reject("Apologies for the inconvenience. Please try again later."), 5000)
      );

      try {
        const weatherInfo = await Promise.race([fetchWeather, timeout]);
        setLoading(false);

        if (weatherInfo.cod === 404) {
          setError("City not found");
        } else if (weatherInfo) {
          setPreviousCity(city);
          setData(weatherInfo);
        } else {
          setError("No data available");
        }
      } catch (err) {
        setLoading(false);
        setError(err);
      }
    }
  }

  const convertToCelsius = (kelvin) => (kelvin - 273.15).toFixed(2);

  const getWeatherIcon = (main) => {
    switch (main) {
      case 'Clear':
        return <FiSun className="text-yellow-500 text-6xl" />;
      case 'Clouds':
        return <FaCloud className="text-gray-500 text-6xl" />;
      case 'Rain':
        return <FaCloudRain className="text-blue-500 text-6xl" />;
      case 'Snow':
        return <FaSnowflake className="text-white text-6xl" />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 theme dark:bg-gray-800">
      <form className="mb-8 w-full max-w-sm">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          name="city"
          onChange={handleChange}
          required
          className="w-full px-4 py-3 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleGetData}
          className="mt-4 w-full py-3 bg-blue-600 text-white text-lg rounded-md hover:bg-blue-900 transition duration-300 ease-in-out dark:bg-blue-500 dark:hover:bg-blue-700"
        >
          Get Weather
        </button>
      </form>

      <div className="w-full max-w-md bg-white rounded-lg shadow-2xl p-6 flex flex-col items-center dark:bg-gray-700">
        {loading ? (
          <div className="flex space-x-2 justify-center items-center">
            <div className="w-3 h-3 bg-gray-800 dark:bg-gray-200 rounded-full animate-bounce delay-0"></div>
            <div className="w-3 h-3 bg-gray-800 dark:bg-gray-200 rounded-full animate-bounce delay-300"></div>
            <div className="w-3 h-3 bg-gray-800 dark:bg-gray-200 rounded-full animate-bounce delay-600"></div>
          </div>
        ) : error ? (
          <div className="text-center bg-red-200 text-red-600 p-4 rounded-md">
            <h2 className="text-xl font-semibold">{error}</h2>
          </div>
        ) : data ? (
          <>
            {getWeatherIcon(data.weather?.[0].main)}
            <h2 className="text-2xl font-bold text-gray-800 mt-4 dark:text-white">Weather in {previousCity}</h2>
            <ul className="space-y-2 mt-4">
              <li className="text-xl text-gray-700 dark:text-white">
                <span className="font-semibold">Temperature:</span> {convertToCelsius(data.main?.temp)}°C
              </li>
              <li className="text-xl text-gray-700 dark:text-white">
                <span className="font-semibold">Weather:</span> {data.weather?.[0].main}
              </li>
              <li className="text-xl text-gray-700 dark:text-white">
                <span className="font-semibold">Humidity:</span> {data.main?.humidity}%
              </li>
              <li className="text-xl text-gray-700 dark:text-white">
                <span className="font-semibold">Wind Speed:</span> {data.wind?.speed} m/s
              </li>
              <li className="text-xl text-gray-700 dark:text-white">
                <span className="font-semibold">Pressure:</span> {data.main?.pressure} hPa
              </li>
              <li className="text-xl text-gray-700 dark:text-white">
                <span className="font-semibold">Visibility:</span> {data.visibility / 1000} km
              </li>
            </ul>
          </>
        ) : (
          <h2 className="text-2xl font-bold text-center text-gray-800 mt-4 dark:text-white">Enter a city to get weather information</h2>
        )}
      </div>
      {error && (
        <div className="bg-gray-100 border border-blue-400 text-gray-700 px-4 py-3 rounded-md shadow-md mt-4
        flex justify-center items-center flex-col">
          <p className='text-center'>You can still enjoy the game!</p>
          <Link
            to="/game"
            className="mt-2 inline-block bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Play Game
          </Link>
        </div>
      )}
    </div>

  );
}

export default Weather;
