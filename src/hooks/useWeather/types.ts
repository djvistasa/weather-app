interface ICoordinates {
  latitude: number;
  longitude: number;
}

interface IApiResponse {
  ok: boolean;
  result: unknown;
  error: unknown;
}

interface IWeatherItem {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface IMainWeatherItem {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}

interface IWeatherCoords {
  lon: number;
  lat: number;
}
interface ITodaysWeatherResponse {
  coord: IWeatherCoords;
  weather: IWeatherItem[];
  base: string;
  main: IMainWeatherItem;
  visibility: number;
  wind: IWindDetails;
  rain: IRainDetails;
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

interface IWeatherForecastResponse {
  cod: string;
  message: number;
  cnt: number;
  list: [
    {
      dt: number;
      main: IMainWeatherItem;
      weather: IWeatherItem[];
      clouds: {
        all: number;
      };
      wind: IWindDetails;
      visibility: number;
      pop: number;
      rain: IRainDetails;
      sys: {
        pod: string;
      };
      dt_txt: string;
    },
  ];
  city: {
    id: number;
    name: string;
    coord: IWeatherCoords;
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  };
}

interface ITodaysWeather {
  type: string;
  minimumTemperature: number;
  maximumTemperature: number;
  currentTemperature: number;
  description: string;
  day: string;
}

interface IWeatherForecast {
  type: string;
  temperature: number;
  day: string;
}

interface IWindDetails {
  speed: 0.62;
  deg: 349;
  gust: 1.18;
}

interface IRainDetails {
  [key: string]: number;
}

interface IGroupedTemperatures {
  [day: string]: {
    day: string;
    temperatures: number[];
    type: string;
  };
}
interface IFormattedTemperatures {
  day: string;
  temperature: number[];
}

export type {
  IApiResponse,
  ICoordinates,
  IFormattedTemperatures,
  IGroupedTemperatures,
  ITodaysWeather,
  ITodaysWeatherResponse,
  IWeatherForecast,
  IWeatherForecastResponse,
};
