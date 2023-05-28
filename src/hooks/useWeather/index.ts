import { useState } from 'react';
import { Alert } from 'react-native';
import { useMutation } from 'react-query';
import {
  formatTodaysWeatherResponse,
  formatWeatherForecastResponse,
} from '../../utils';
import {
  getTodaysWeatherByLocation,
  getWeatherForecastByLocation,
} from './api';
import {
  IApiResponse,
  ICoordinates,
  ITodaysWeather,
  ITodaysWeatherResponse,
  IWeatherForecast,
  IWeatherForecastResponse,
} from './types';

function useWeather() {
  const [todaysWeather, setTodaysWeather] = useState<ITodaysWeather>();
  const [weatherForecast, setWeatherForecast] = useState<IWeatherForecast[]>();

  const {
    mutate: getTodaysWeather,
    isLoading: isWeatherLoading,
    error: getWeatherError,
  } = useMutation<IApiResponse, unknown, ICoordinates>(
    'getTodaysWeather',
    (coords: ICoordinates) => getTodaysWeatherByLocation(coords),
    {
      onSuccess: ({ result }: IApiResponse) => {
        const formattedData = formatTodaysWeatherResponse(
          result as ITodaysWeatherResponse,
        );
        setTodaysWeather(formattedData);
      },
      onError: (error) => {
        Alert.alert('Error', error as string);
      },
    },
  );

  const {
    mutate: getWeatherForecast,
    isLoading: isWeatherForecastLoading,
    error: getWeatherForecastError,
  } = useMutation(
    'getWeatherForeCast',
    (coords: ICoordinates) => getWeatherForecastByLocation(coords),
    {
      onSuccess: ({ result }: IApiResponse) => {
        const formattedData = formatWeatherForecastResponse(
          result as IWeatherForecastResponse,
        );
        setWeatherForecast(formattedData);
      },
      onError: (error) => {
        Alert.alert('Error', error as string);
      },
    },
  );

  return {
    getTodaysWeather,
    getWeatherForecast,
    isWeatherLoading,
    getWeatherError,
    todaysWeather,
    isWeatherForecastLoading,
    getWeatherForecastError,
    weatherForecast,
  };
}

export default useWeather;
