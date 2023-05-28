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
  }) => white};
  font-size: ${({ fontSize }) => (fontSize && fontSize) || 30}px;
  ${({ isUpperCase }) => isUpperCase && 'text-transform:uppercase'};
  ${({ fontWeight }) => fontWeight && `font-weight: ${fontWeight}`};
`;

export { StyledApplicationWrapper, StyledSafeAreaView, StyledText };
