import styled from 'styled-components/native';

// NOTE: change yourElementType to your preferred type: e.g button
const StyledLocations = styled.View`
  margin-top: 20px;
  border-radius: 20px;
  background: ${({
    theme: {
      colors: { transparency },
    },
  }) => transparency};
  padding: 20px;
  flex: 1;
`;

const StyledLocationTitle = styled.Text`
  color: ${({
    theme: {
      colors: { white },
    },
  }) => white};
  font-size: 15px;
`;

const StyledLocation = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: ${({
    theme: {
      colors: { white50 },
    },
  }) => white50};
  padding: 20px 0;
`;

export { StyledLocation, StyledLocationTitle, StyledLocations };
