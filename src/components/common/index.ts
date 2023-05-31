import { SafeAreaView } from 'react-native';
import styled from 'styled-components/native';
import { IStyledTextProps } from './types';

const StyledSafeAreaView = styled(SafeAreaView)`
  flex: 1;
`;

const StyledApplicationWrapper = styled.View`
  flex: 1;
`;

const StyledText = styled.Text<IStyledTextProps>`
  color: ${({
    theme: {
      colors: { white },
    },
    color,
  }) => color || white};
  font-size: ${({ fontSize }) => fontSize || 30}px;
  ${({ isUpperCase }) => isUpperCase && 'text-transform:uppercase'};
  ${({ fontWeight }) => fontWeight && `font-weight: ${fontWeight}`};
`;

const StyledAutoCompeteWrapper = styled.View`
  flex-direction: row;
  flex: 1;
`;

const StyledActionsWrapper = styled.View`
  width: 100%;
  position: absolute;
  top: 20px;
  flex-direction: row;
  padding: 0 20px;
`;

export {
  StyledActionsWrapper,
  StyledApplicationWrapper,
  StyledAutoCompeteWrapper,
  StyledSafeAreaView,
  StyledText,
};
