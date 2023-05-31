import styled from 'styled-components/native';
import { IStyledButtonProps } from './types';

// NOTE: change yourElementType to your preferred type: e.g button
const StyledButton = styled.TouchableOpacity<IStyledButtonProps>`
  width: 100%;
  background-color: ${({ theme: { colors: sunny }, backgroundColor }) =>
    backgroundColor || sunny};

  height: 55px;
  align-items: center;
  justify-content: center;
`;

export { StyledButton };
