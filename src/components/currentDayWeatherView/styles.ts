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

const StyledAutoCompeteWrapper = styled.View`
  width: ${({ theme: { dimensions } }) => dimensions.screenWidth - 20}px;
  position: absolute;
  top: 20px;
`;

export {
  StyledAutoCompeteWrapper,
  StyledCurrentDayWeatherView,
  StyledCurrentDayWeatherViewContainer,
  StyledTemperature,
};
