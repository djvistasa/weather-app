/**
 *
 * Home
 *
 */
import React, { useEffect } from 'react';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
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
import { RootStackParamList } from '../../navigation/types';
import { debounce } from '../../utils';

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

  const { navigate } =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleFavorites = () => navigate('FavoriteLocations');

  const handleLocationSearch = debounce((searchTerm: string) => {
    if (searchTerm.length > 0) {
      getAddressSuggestions(searchTerm);
    }
  }, 500);

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
        <FavoritesButton onPress={handleFavorites} />
      </StyledActionsWrapper>
    </StyledApplicationWrapper>
  );
}

export default Home;
