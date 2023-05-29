import styled from 'styled-components/native';

// NOTE: change yourElementType to your preferred type: e.g button
const StyledTextInput = styled.TextInput`
  padding: 5px 10px;
  font-size: 16px;
  flex: 1;
  width: 100%;
  color: ${({
    theme: {
      colors: { white },
    },
  }) => white};
`;

const StyledInputWrapper = styled.View`
  display: flex;
  align-content: center;
  flex-direction: row;
  border: ${({
    theme: {
      colors: { white },
    },
  }) => `1px solid ${white}`};
  background-color: ${({
    theme: {
      colors: { transparency },
    },
  }) => transparency};
  margin-bottom: 12px;
  border-radius: 4px;
  width: 100%;
  height: 47px;
`;

const StyledIcon = styled.View`
  width: 15px;
  height: 15px;
  align-self: center;
  margin-left: 15px;
`;

const StyledClearIcon = styled.TouchableOpacity`
  height: 41px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 5px;
  width: 43px;
`;

const StyledFieldLabel = styled.Text`
  color: ${({
    theme: {
      colors: { warning },
    },
  }) => warning};
  margin-bottom: 12px;
`;

const StyledErrorMessage = styled.Text`
  color: ${({
    theme: {
      colors: { error },
    },
  }) => error};
  position: absolute;
  right: 0;
  bottom: -21px;
  font-size: 12px;
`;

export {
  StyledClearIcon,
  StyledErrorMessage,
  StyledFieldLabel,
  StyledIcon,
  StyledInputWrapper,
  StyledTextInput,
};
