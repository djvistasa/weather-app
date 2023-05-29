import { IWeatherForecast } from '../../hooks/useWeather/types';

interface IWeatherForecastViewProps {
  weatherForecast: IWeatherForecast[];
  weatherCondition: string;
}

interface IStyledWeatherForecastViewProps {
  backgroundColor: string;
}

export type { IStyledWeatherForecastViewProps, IWeatherForecastViewProps };
