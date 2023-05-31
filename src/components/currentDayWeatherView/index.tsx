/**
 *
 * CurrentDayWeatherView
 *
 */

import React from 'react';
import { useTheme } from 'styled-components/native';
import * as icons from '../../assets';
import { StyledText } from '../common';
import CurrentDayWeatherSummary from '../currentDayWeatherSummary';
import TemperatureInDegrees from '../temperatureInDegrees';
import { WeatherCondition, WeatherConditionType } from './enums';
import {
  StyledCurrentDayWeatherView,
  StyledCurrentDayWeatherViewContainer,
  StyledTemperature,
} from './styles';
import { ICurrentDayWeatherViewProps } from './types';

function CurrentDayWeatherView({
  todaysWeather: {
    type,
    minimumTemperature,
    maximumTemperature,
    currentTemperature,
    description,
  },
}: ICurrentDayWeatherViewProps): JSX.Element {
  const { colors } = useTheme();

  const getImageAndBackgroundColorKeyByType = () => {
    switch (type) {
      case WeatherCondition.Sunny:
        return WeatherConditionType.Sunny;
      case WeatherCondition.Cloudy:
        return WeatherConditionType.Cloudy;
      case WeatherCondition.Rainy:
        return WeatherConditionType.Rainy;
      default:
        return WeatherConditionType.Sunny;
    }
  };

  return (
    <StyledCurrentDayWeatherViewContainer>
      <StyledCurrentDayWeatherView
        source={icons[getImageAndBackgroundColorKeyByType()]}
        resizeMode="cover"
      >
        <StyledTemperature>
          <TemperatureInDegrees
            temperature={currentTemperature}
            fontWeight={800}
            fontSize={30}
            isUpperCase
          />
        </StyledTemperature>
        <StyledText isUpperCase fontWeight={600} fontSize={25}>
          {description}
        </StyledText>
      </StyledCurrentDayWeatherView>
      <CurrentDayWeatherSummary
        backgroundColor={colors[getImageAndBackgroundColorKeyByType()]}
        minimumTemperature={minimumTemperature}
        maximumTemperature={maximumTemperature}
        currentTemperature={currentTemperature}
      />
    </StyledCurrentDayWeatherViewContainer>
  );
}

export default CurrentDayWeatherView;
