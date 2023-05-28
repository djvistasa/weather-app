import styled from 'styled-components/native';
import { IStyledDegreeSymbolProps } from './types';

const StyledTemperatureInDegrees = styled.View`
  position: relative;
`;

const StyledDegreeSymbol = styled.View<IStyledDegreeSymbolProps>`
  position: absolute;
  top: 0;
  right: ${({ degreeOffset }) => degreeOffset || -25}px;
  height: ${({ symbolSize }) => symbolSize || 15}px;
  width: ${({ symbolSize }) => symbolSize || 15}px;
  border-radius: 50px;
  border-width: 2px;
  border-color: ${({
    theme: {
      colors: { white },
    },
  }) => white};
`;

export { StyledDegreeSymbol, StyledTemperatureInDegrees };
