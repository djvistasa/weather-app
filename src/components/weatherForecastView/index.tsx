/**
 *
 * WeatherForecastView
 *
 */

import React from 'react';
import { useTheme } from 'styled-components/native';
import * as icons from '../../assets';
import { StyledText } from '../common';
import { WeatherCondition } from '../currentDayWeatherView/enums';
import TemperatureInDegrees from '../temperatureInDegrees';
import {
  StyledDayContainer,
  StyledTemperatureInDegrees,
  StyledWeatherForecastView,
  StyledWeatherForecastViewContainer,
  StyledWeatherIcon,
} from './styles';
import { IWeatherForecastViewProps } from './types';
function WeatherForecastView({
  weatherForecast,
  weatherCondition,
}: IWeatherForecastViewProps): JSX.Element {
  const {
    colors: { cloudy, rainy, sunny },
  } = useTheme();

  const getIconByType = (type: string) => {
    switch (type) {
      case WeatherCondition.Sunny:
        return icons.sunnyIcon;
      case WeatherCondition.Cloudy:
        return icons.cloudyIcon;
      case WeatherCondition.Rainy:
        return icons.rainyIcon;
      default:
        return icons.sunnyIcon;
    }
  };

  const getBackgroundByType = () => {
    switch (weatherCondition) {
      case WeatherCondition.Sunny:
        return sunny;
      case WeatherCondition.Cloudy:
        return cloudy;
      case WeatherCondition.Rainy:
        return rainy;
      default:
        return sunny;
    }
  };

  return (
    <StyledWeatherForecastViewContainer backgroundColor={getBackgroundByType()}>
      {weatherForecast.map(({ type, day, temperature }) => (
        <StyledWeatherForecastView key={day}>
          <StyledDayContainer>
            <StyledText fontSize={18}>{day}</StyledText>
          </StyledDayContainer>
          <StyledWeatherIcon source={getIconByType(type)} />
          <StyledTemperatureInDegrees>
            <TemperatureInDegrees
              temperature={temperature}
              degreeOffset={-2}
              symbolSize={10}
              fontSize={18}
              fontWeight={700}
            />
          </StyledTemperatureInDegrees>
        </StyledWeatherForecastView>
      ))}
    </StyledWeatherForecastViewContainer>
  );
}

export default WeatherForecastView;
