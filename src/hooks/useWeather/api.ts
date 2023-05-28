import { handleAPiError, handleApiSuccess } from '../../utils';
import { API_KEY } from '../constants';
import { IApiResponse, ICoordinates } from './types';

const getTodaysWeatherByLocation = async ({
  latitude,
  longitude,
}: ICoordinates): Promise<IApiResponse> => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`,
  );

  if (!response.ok) {
    return handleAPiError(response.statusText);
  }

  const result = await response.json();

  return handleApiSuccess(result);
};
const getWeatherForecastByLocation = async ({
  latitude,
  longitude,
}: ICoordinates): Promise<IApiResponse> => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`,
  );

  if (!response.ok) {
    return handleAPiError(response.statusText);
  }

  const result = await response.json();

  return handleApiSuccess(result);
};

export { getTodaysWeatherByLocation, getWeatherForecastByLocation };
