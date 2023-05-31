/**
 *
 * CurrentDayWeatherSummary
 *
 */

import React from 'react';
import { StyledText } from '../common';
import TemperatureInDegrees from '../temperatureInDegrees';
import {
  StyledCurrentDayWeatherSummary,
  StyledForecastSummaryContainer,
} from './styles';
import { ICurrentDayWeatherSummaryProps } from './types';

function CurrentDayWeatherSummary({
  backgroundColor,
  minimumTemperature,
  maximumTemperature,
  currentTemperature,
}: ICurrentDayWeatherSummaryProps): JSX.Element {
  return (
    <StyledCurrentDayWeatherSummary backgroundColor={backgroundColor}>
      <StyledForecastSummaryContainer>
        <TemperatureInDegrees
          temperature={minimumTemperature}
          fontSize={15}
          fontWeight={700}
          symbolSize={10}
          degreeOffset={-12}
        />
        <StyledText fontSize={15}>Min</StyledText>
      </StyledForecastSummaryContainer>
      <StyledForecastSummaryContainer>
        <TemperatureInDegrees
          temperature={currentTemperature}
          fontSize={15}
          fontWeight={700}
          symbolSize={10}
          degreeOffset={-12}
        />
        <StyledText fontSize={15}>Current</StyledText>
      </StyledForecastSummaryContainer>
      <StyledForecastSummaryContainer>
        <TemperatureInDegrees
          temperature={maximumTemperature}
          fontSize={15}
          fontWeight={700}
          symbolSize={10}
          degreeOffset={-12}
        />
        <StyledText fontSize={15}>Max</StyledText>
      </StyledForecastSummaryContainer>
    </StyledCurrentDayWeatherSummary>
  );
}

export default CurrentDayWeatherSummary;
