import styled from 'styled-components/native';

const StyledAutoComplete = styled.View`
  width: 100%;
  z-index: 9999;
`;

const StyledOptionsWrapper = styled.ScrollView`
  border-radius: 4px;
  background-color: ${({
    theme: {
      colors: { transparency },
    },
  }) => transparency};
  width: 100%;
  top: 0;
`;

const StyledSearchWrapper = styled.View`
  min-height: 47px;
`;

const StyledOptionItem = styled.TouchableOpacity`
  width: 100%;
  min-height: 56px;
  justify-content: center;
`;

const StyledDivider = styled.View`
  height: 1px;
  background-color: ${({
    theme: {
      colors: { white },
    },
  }) => white};
  position: absolute;
  top: 0;
  width: 100%;
`;

const StyledOptionTitle = styled.Text`
  padding: 0 20px;
  color: ${({
    theme: {
      colors: { white },
    },
  }) => white};
`;

export {
  StyledAutoComplete,
  StyledDivider,
  StyledOptionItem,
  StyledOptionTitle,
  StyledOptionsWrapper,
  StyledSearchWrapper,
};
