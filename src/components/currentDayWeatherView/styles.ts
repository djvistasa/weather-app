import styled from 'styled-components/native';

const StyledCurrentDayWeatherViewContainer = styled.View`
  height: 385px;
`;

const StyledCurrentDayWeatherView = styled.ImageBackground`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const StyledTemperature = styled.View`
  margin-bottom: 10px;
`;

export {
  StyledCurrentDayWeatherView,
  StyledCurrentDayWeatherViewContainer,
  StyledTemperature,
};
