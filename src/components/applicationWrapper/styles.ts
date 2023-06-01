import styled from 'styled-components/native';

// NOTE: change yourElementType to your preferred type: e.g button
const StyledApplicationWrapper = styled.View`
  flex: 1;
  background: ${({
    theme: {
      colors: { sunny }, //TODO:  change  this to match the current device weather
    },
  }) => sunny};
`;

const StyledHeaderWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 20px;
`;

const StyledTitle = styled.Text`
  text-align: center;
  position: absolute;
  width: 100%;
  font-size: 20px;
  color: ${({
    theme: {
      colors: { white },
    },
  }) => white};
`;

export { StyledApplicationWrapper, StyledHeaderWrapper, StyledTitle };
