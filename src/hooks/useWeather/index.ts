import { useCallback, useState } from 'react';
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
    ui: { showModal, hideModal },
  } = useAppContext();

  const getTodaysWeather = useCallback(
    async (coords: ICoordinates) => {
      const { error, ok, result } = await getTodaysWeatherByLocation(coords);

      if (error) {
        return showModal({
          title: 'Get Weather Error',
          message: new Error(error as string).message,
          primaryActionTitle: 'Retry',
          presentationStyle: 'overFullScreen',
          isTransparent: true,
          primaryAction: () => {
            // setRetryTodaysWeatherCall(true);
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
    [hideModal, showModal],
  );

  const getWeatherForecast = useCallback(
    async (coords: ICoordinates) => {
      const { error, ok, result } = await getWeatherForecastByLocation(coords);

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
    [hideModal, showModal],
  );

  return {
    getTodaysWeather,
    getWeatherForecast,
    todaysWeather,
    weatherForecast,
  };
}

export default useWeather;
