import { ICoordinates, ITodaysWeather } from '../../hooks/useWeather/types';

interface ICurrentDayWeatherViewProps {
  todaysWeather: ITodaysWeather;
  onLocationSelect: (coords: ICoordinates) => void;
  onLocationSearch: (searchTerm: string) => void;
}

export type { ICurrentDayWeatherViewProps };
