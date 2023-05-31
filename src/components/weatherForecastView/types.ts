import { IWeatherForecast } from '../../hooks/useWeather/types';

interface IWeatherForecastViewProps {
  weatherForecast: IWeatherForecast[];
  weatherCondition: string;
  onAddToFavorites: () => void;
}

interface IStyledWeatherForecastContainerViewProps {
  backgroundColor: string;
}

interface IStyledWeatherForecastViewProps {
  isLastItem: boolean;
}

export type {
  IStyledWeatherForecastContainerViewProps,
  IStyledWeatherForecastViewProps,
  IWeatherForecastViewProps,
};
