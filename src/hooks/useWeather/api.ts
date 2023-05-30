import { makeApiCall } from '../../utils';
import { API_KEY } from './constants';
import { IApiResponse, ICoordinates } from './types';

const getTodaysWeatherByLocation = async ({
  latitude,
  longitude,
}: ICoordinates): Promise<IApiResponse> =>
  await makeApiCall({
    method: 'get',
    url: `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`,
  });

const getWeatherForecastByLocation = async ({
  latitude,
  longitude,
}: ICoordinates): Promise<IApiResponse> =>
  await makeApiCall({
    url: `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`,
    method: 'get',
  });

export { getTodaysWeatherByLocation, getWeatherForecastByLocation };
