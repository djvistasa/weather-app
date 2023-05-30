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
  width: ${({ theme: { dimensions } }) => dimensions.screenWidth - 20}px;
  position: absolute;
  top: 20px;
  align-self: center;
`;

export {
  StyledApplicationWrapper,
  StyledAutoCompeteWrapper,
  StyledSafeAreaView,
  StyledText,
};
