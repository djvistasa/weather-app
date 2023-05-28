/**
 *
 * Home
 *
 */
import React, { useEffect } from 'react';
import { StyledApplicationWrapper } from '../../components/common';
import CurrentDayWeatherView from '../../components/currentDayWeatherView';
import WeatherForecastView from '../../components/weatherForecastView';
import useDeviceLocation from '../../hooks/useDeviceLocation';
import useWeather from '../../hooks/useWeather';

function Home(): JSX.Element {
  const {
    getTodaysWeather,
    todaysWeather,
    isWeatherLoading,
    isWeatherForecastLoading,
    weatherForecast,
    getWeatherForecast,
  } = useWeather();

  const { deviceLocation } = useDeviceLocation();

  useEffect(() => {
    if (deviceLocation) {
      getTodaysWeather(deviceLocation);
    }
  }, [getTodaysWeather, deviceLocation]);

  useEffect(() => {
    if (todaysWeather && deviceLocation) {
      getWeatherForecast(deviceLocation);
    }
  }, [todaysWeather, getWeatherForecast, deviceLocation]);

  return (
    <StyledApplicationWrapper>
      {!isWeatherLoading && todaysWeather && (
        <CurrentDayWeatherView todaysWeather={todaysWeather} />
      )}
      {!isWeatherForecastLoading && weatherForecast && todaysWeather && (
        <WeatherForecastView
          weatherForecast={weatherForecast}
          weatherCondition={todaysWeather.type}
        />
      )}
    </StyledApplicationWrapper>
  );
}

export default Home;
