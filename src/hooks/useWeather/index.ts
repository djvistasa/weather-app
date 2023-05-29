import { useState } from 'react';
import { Alert } from 'react-native';
import { useMutation } from 'react-query';
import { ModalType } from '../../components/modal/enums';
import { useModalContext } from '../../context';
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
  const [retryTodaysWeatherCall, setRetryTodaysWeatherCall] =
    useState<boolean>(true);
  const {
    ui: { showModal, hideModal },
  } = useModalContext();

  const {
    mutate: getTodaysWeather,
    isLoading: isWeatherLoading,
    error: getWeatherError,
  } = useMutation<IApiResponse, unknown, ICoordinates>(
    'getTodaysWeather',
    (coords: ICoordinates) => getTodaysWeatherByLocation(coords),
    {
      onSuccess: ({ result, ok, error }: IApiResponse) => {
        if (error) {
          return showModal({
            title: 'Error',
            message: new Error(error as string).message,
            primaryActionTitle: 'Retry',
            presentationStyle: 'overFullScreen',
            isTransparent: true,
            primaryAction: () => {
              setRetryTodaysWeatherCall(true);
            },
            secondaryActionTitle: 'Cancel',
            secondaryAction: () => {
              hideModal();
            },
            type: ModalType.Error,
          });
        }

        if (ok && result) {
          const formattedData = formatTodaysWeatherResponse(
            result as ITodaysWeatherResponse,
          );
          setTodaysWeather(formattedData);
          setRetryTodaysWeatherCall(false);
        }
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
    retryTodaysWeatherCall,
  };
}

export default useWeather;
