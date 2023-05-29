/**
 *
 * CurrentDayWeatherView
 *
 */

import React from 'react';
import { useTheme } from 'styled-components/native';
import * as icons from '../../assets';
import AutoComplete from '../autoComplete';
import { StyledText } from '../common';
import CurrentDayWeatherSummary from '../currentDayWeatherSummary';
import TemperatureInDegrees from '../temperatureInDegrees';
import { WeatherCondition, WeatherConditionType } from './enums';
import {
  StyledAutoCompeteWrapper,
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
  onLocationSelect,
  onLocationSearch,
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
            fontSize={40}
            isUpperCase
          />
        </StyledTemperature>
        <StyledText isUpperCase fontWeight={600}>
          {description}
        </StyledText>
        <StyledAutoCompeteWrapper>
          <AutoComplete
            onSelect={onLocationSelect}
            options={[
              {
                title: 'East London',
                value: {
                  x: 27.9116,
                  y: -33.0292,
                },
              },
              {
                title: 'Port Elizabeth',
                value: {
                  x: 27.9116,
                  y: -33.0292,
                },
              },
            ]}
            onChangeText={onLocationSearch}
            placeholder="Search for a location"
          />
        </StyledAutoCompeteWrapper>
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
