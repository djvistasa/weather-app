/**
 *
 * Home
 *
 */
import React, { useEffect } from 'react';

import AutoComplete from '../../components/autoComplete';
import {
  StyledApplicationWrapper,
  StyledAutoCompeteWrapper,
} from '../../components/common';
import CurrentDayWeatherView from '../../components/currentDayWeatherView';
import WeatherForecastView from '../../components/weatherForecastView';
import useLocation from '../../hooks/useLocation';
import useWeather from '../../hooks/useWeather';
import { ICoordinates } from '../../hooks/useWeather/types';
import { debounce } from '../../utils';

function Home(): JSX.Element {
  const {
    getTodaysWeather,
    todaysWeather,
    weatherForecast,
    getWeatherForecast,
  } = useWeather();

  const { getAddressSuggestions, addressSuggestions } = useLocation();

  const { deviceLocation } = useLocation();

  const handleLocationSearch = debounce((searchTerm: string) => {
    if (searchTerm.length > 0) {
      getAddressSuggestions(searchTerm);
    }
  }, 500);

  const handleLocationSelect = (location: ICoordinates) =>
    getTodaysWeather(location);

  useEffect(() => {
    if (deviceLocation) {
      getTodaysWeather(deviceLocation);
    }
  }, [deviceLocation, getTodaysWeather]);

  useEffect(() => {
    if (todaysWeather && deviceLocation) {
      getWeatherForecast(deviceLocation);
    }
  }, [todaysWeather, deviceLocation, getWeatherForecast]);

  return (
    <StyledApplicationWrapper>
      {todaysWeather && <CurrentDayWeatherView todaysWeather={todaysWeather} />}
      {weatherForecast && todaysWeather && (
        <WeatherForecastView
          weatherForecast={weatherForecast}
          weatherCondition={todaysWeather.type}
        />
      )}
      <StyledAutoCompeteWrapper>
        <AutoComplete
          onSelect={handleLocationSelect}
          options={addressSuggestions}
          onChangeText={handleLocationSearch}
          placeholder="Search for a location"
        />
      </StyledAutoCompeteWrapper>
    </StyledApplicationWrapper>
  );
}

export default Home;
