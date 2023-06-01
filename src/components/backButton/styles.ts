import styled from 'styled-components/native';

// NOTE: change yourElementType to your preferred type: e.g button
const StyledBackButton = styled.TouchableOpacity`
  background: ${({
    theme: {
      colors: { transparency },
    },
  }) => transparency};
  width: 47px;
  height: 47px;
  border-radius: 47px;
  align-items: center;
  justify-content: center;
  z-index: 1;
  border: ${({
    theme: {
      colors: { white },
    },
  }) => `1px solid ${white}`};
`;

const StyledBackButtonIcon = styled.Image`
  width: 20px;
  height: 20px;
`;

export { StyledBackButton, StyledBackButtonIcon };
