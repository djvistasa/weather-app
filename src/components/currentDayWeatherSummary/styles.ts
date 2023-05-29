import styled from 'styled-components/native';
import { IStyledCurrentDayWeatherSummaryProps } from './types';

const StyledCurrentDayWeatherSummary = styled.View<IStyledCurrentDayWeatherSummaryProps>`
  height: 60px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 26px 0 20px;
  margin-top: -7px;
`;

const StyledForecastSummaryContainer = styled.View`
  align-items: center;
`;

export { StyledCurrentDayWeatherSummary, StyledForecastSummaryContainer };
