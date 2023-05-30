import {
  IGroupedTemperatures,
  ITodaysWeather,
  ITodaysWeatherResponse,
  IWeatherForecast,
  IWeatherForecastResponse,
} from '../hooks/useWeather/types';
import { IRequestParams } from './types';

const handleAPiError = (error: unknown) => ({
  ok: false,
  result: undefined,
  error,
});

const handleApiSuccess = (result: unknown) => ({
  ok: true,
  result,
  error: undefined,
});

const formatTodaysWeatherResponse = (
  response: ITodaysWeatherResponse,
): ITodaysWeather => {
  const formatterResponse: ITodaysWeather = {
    type: response.weather[0]?.main,
    currentTemperature: response.main.temp,
    day: getDayFromTimestamp(response.dt),
    description: response.weather[0]?.description,
    maximumTemperature: response.main.temp_max,
    minimumTemperature: response.main.temp_min,
  };

  return formatterResponse;
};

const getDayFromTimestamp = (timestamp: number) => {
  const date = new Date(timestamp);

  const dayString = date
    .toLocaleDateString('en-US', { weekday: 'long' })
    .split(',')[0];

  return dayString;
};

const formatWeatherForecastResponse = (
  response: IWeatherForecastResponse,
): IWeatherForecast[] => {
  const forecastItems: IWeatherForecast[] = response.list.map(
    (weatherItem) => ({
      type: weatherItem.weather[0]?.main,
      day: weatherItem.dt_txt,
      temperature: weatherItem?.main?.temp,
    }),
  );

  const temperaturesByDay = groupTemperaturesByDay(forecastItems);

  return temperaturesByDay;
};

const groupTemperaturesByDay = (forecastItems: IWeatherForecast[]) => {
  const groupedTemperatures: IGroupedTemperatures = {};

  for (const {
    day: dayInTimestampFormat,
    temperature,
    type,
  } of forecastItems) {
    const timestamp: Date = new Date(dayInTimestampFormat);

    const dayInHumanReadableFormat: string = timestamp
      .toLocaleString('en-US', {
        weekday: 'long',
      })
      .split(',')[0];

    if (dayInHumanReadableFormat in groupedTemperatures) {
      groupedTemperatures[dayInHumanReadableFormat].temperatures.push(
        temperature,
      );
    } else {
      groupedTemperatures[dayInHumanReadableFormat] = {
        day: dayInHumanReadableFormat,
        temperatures: [temperature],
        type: type,
      };
    }
  }

  const formattedTemperatures = formatTemperatures(groupedTemperatures);

  return formattedTemperatures;
};

const formatTemperatures = (groupedTemperatures: IGroupedTemperatures) => {
  const formattedTemperatures: IWeatherForecast[] = [];
  for (const dayOfWeek in groupedTemperatures) {
    formattedTemperatures.push({
      day: dayOfWeek,
      temperature: parseFloat(
        calculateAverageDailyTemperature(
          groupedTemperatures[dayOfWeek].temperatures,
        ).toFixed(1),
      ),
      type: groupedTemperatures[dayOfWeek].type,
    });
  }

  const temperaturesSortedByDay = sortTemperaturesByDay(formattedTemperatures);

  return temperaturesSortedByDay;
};

const sortTemperaturesByDay = (temperatures: IWeatherForecast[]) =>
  temperatures.sort((a, b) => {
    const daysOfWeek = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const dayA = daysOfWeek.indexOf(a.day);
    const dayB = daysOfWeek.indexOf(b.day);
    return dayA - dayB;
  });

const calculateAverageDailyTemperature = (temperatures: number[]) =>
  temperatures.reduce((sum, temperature) => sum + temperature, 0) /
  temperatures.length;

const truncate = (input: string, limit: number) =>
  input.length > limit ? `${input.substring(0, limit)}...` : input;

// eslint-disable-next-line @typescript-eslint/ban-types
function debounce<T extends Function>(callBack: T, delay = 20) {
  let timeOut: ReturnType<typeof setTimeout> = setTimeout(() => false);
  const callable = (...args: any) => {
    clearTimeout(timeOut);

    timeOut = setTimeout(() => callBack(...args), delay);
  };
  return <T>(<any>callable);
}

const makeApiCall = async ({ url, method }: IRequestParams) => {
  try {
    const response = await fetch(url, {
      method,
    });

    if (!response.ok) {
      const error = await response.text();
      const message = JSON.parse(error)?.message;
      return handleAPiError(
        message || 'Unknown error occurred. Please try again later.',
      );
    }

    const result = await response.json();

    return handleApiSuccess(result);
  } catch (error) {
    return handleAPiError(error);
  }
};

export {
  debounce,
  formatTodaysWeatherResponse,
  formatWeatherForecastResponse,
  handleAPiError,
  handleApiSuccess,
  makeApiCall,
  truncate,
};
