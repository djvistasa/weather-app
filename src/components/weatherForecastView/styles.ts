import styled from 'styled-components/native';
import {
  IStyledWeatherForecastContainerViewProps,
  IStyledWeatherForecastViewProps,
} from './types';

const StyledWeatherForecastViewContainer = styled.ScrollView<IStyledWeatherForecastContainerViewProps>`
  flex: 1;
  margin-top: 1px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 20px 25px 0 20px;
`;

const StyledWeatherForecastView = styled.View<IStyledWeatherForecastViewProps>`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 36px;
  margin-bottom: ${({ isLastItem }) => (isLastItem ? '30px' : 0)};
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
  width: 95px;
  padding-right: 5px;
  flex-direction: row;
  justify-content: flex-end;
`;

export {
  StyledDayContainer,
  StyledForecastWrapper,
  StyledTemperatureInDegrees,
  StyledWeatherForecastView,
  StyledWeatherForecastViewContainer,
  StyledWeatherIcon,
};
