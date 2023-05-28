import styled from 'styled-components/native';
import { IStyledWeatherForecastViewProps } from './types';

const StyledWeatherForecastViewContainer = styled.ScrollView<IStyledWeatherForecastViewProps>`
  flex: 1;
  margin-top: 1px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 20px 25px 0 20px;
`;

const StyledWeatherForecastView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 36px;
`;

const StyledForecastWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const StyledWeatherIcon = styled.Image`
  height: 35px;
  width: 35px;
`;

const StyledDayContainer = styled.View`
  width: 95px;
`;

const StyledTemperatureInDegrees = styled.View`
  width: 52px;
`;

export {
  StyledDayContainer,
  StyledForecastWrapper,
  StyledTemperatureInDegrees,
  StyledWeatherForecastView,
  StyledWeatherForecastViewContainer,
  StyledWeatherIcon,
};
