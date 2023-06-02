import { useState } from 'react';
import { useMutation } from 'react-query';
import { ModalType } from '../../components/modal/enums';
import { useAppContext } from '../../context';
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
  const [shouldRetryTodaysWeatherCall, setShouldRetryTodaysWeatherCall] =
    useState<boolean>(false);

  const {
    ui: { showModal, hideModal },
  } = useAppContext();

  const { mutate: getTodaysWeather } = useMutation<
    IApiResponse,
    unknown,
    ICoordinates
  >(
    'getTodaysWeather',
    (coords: ICoordinates) => getTodaysWeatherByLocation(coords),
    {
      onSuccess: ({ result, ok, error }: IApiResponse) => {
        if (error) {
          return showModal({
            title: 'Get Weather Error',
            message: new Error(error as string).message,
            primaryActionTitle: 'Retry',
            presentationStyle: 'overFullScreen',
            isTransparent: true,
            primaryAction: () => {
              setShouldRetryTodaysWeatherCall(true);
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
        }
      },
    },
  );

  const { mutate: getWeatherForecast } = useMutation(
    'getWeatherForeCast',
    (coords: ICoordinates) => getWeatherForecastByLocation(coords),
    {
      onSuccess: ({ result, error, ok }: IApiResponse) => {
        if (error) {
          return showModal({
            title: 'Error',
            message: new Error(error as string).message,
            primaryActionTitle: 'Retry',
            presentationStyle: 'overFullScreen',
            isTransparent: true,
            primaryAction: () => {
              // act on primary action
            },
            secondaryActionTitle: 'Cancel',
            secondaryAction: () => {
              hideModal();
            },
            type: ModalType.Error,
          });
        }
        if (result && ok) {
          const formattedData = formatWeatherForecastResponse(
            result as IWeatherForecastResponse,
          );
          setWeatherForecast(formattedData);
        }
      },
    },
  );

  return {
    getTodaysWeather,
    getWeatherForecast,
    shouldRetryTodaysWeatherCall,
    todaysWeather,
    weatherForecast,
  };
}

export default useWeather;
