/**
 *
 * Home
 *
 */
import React, { useEffect } from 'react';

import AutoComplete from '../../components/autoComplete';
import {
  StyledActionsWrapper,
  StyledApplicationWrapper,
  StyledAutoCompeteWrapper,
} from '../../components/common';
import CurrentDayWeatherView from '../../components/currentDayWeatherView';
import FavoritesButton from '../../components/favoritesButton';
import WeatherForecastView from '../../components/weatherForecastView';
import useLocation from '../../hooks/useLocation';
import useWeather from '../../hooks/useWeather';
import { ICoordinates } from '../../hooks/useWeather/types';

function Home(): JSX.Element {
  const {
    getTodaysWeather,
    todaysWeather,
    weatherForecast,
    getWeatherForecast,
  } = useWeather();

  const {
    getAddressSuggestions,
    addressSuggestions,
    deviceLocation,
    updateAddress,
    addAddressToFavorites,
  } = useLocation();

  const handleLocationSearch = (searchTerm: string) => {
    if (searchTerm.length > 0) {
      getAddressSuggestions(searchTerm);
    }
  };

  const handleLocationSelect = (location: ICoordinates, title: string) => {
    updateAddress({ coords: location, title });
    getTodaysWeather(location);
  };

  const handleAddLocationToFavorites = () => {
    addAddressToFavorites();
  };

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
          onAddToFavorites={handleAddLocationToFavorites}
        />
      )}
      <StyledActionsWrapper>
        <StyledAutoCompeteWrapper>
          <AutoComplete
            onSelect={handleLocationSelect}
            options={addressSuggestions}
            onChangeText={handleLocationSearch}
            placeholder="Search for a location"
          />
        </StyledAutoCompeteWrapper>
        <FavoritesButton />
      </StyledActionsWrapper>
    </StyledApplicationWrapper>
  );
}

export default Home;
