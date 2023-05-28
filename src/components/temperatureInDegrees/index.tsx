/**
 *
 * TemperatureInDegrees
 *
 */

import React from 'react';
import { StyledText } from '../common';
import { StyledDegreeSymbol, StyledTemperatureInDegrees } from './styles';
import { ITemperatureInDegreesProps } from './types';

function TemperatureInDegrees({
  temperature,
  fontWeight,
  fontSize,
  symbolSize,
  isUpperCase,
  degreeOffset,
}: ITemperatureInDegreesProps): JSX.Element {
  return (
    <StyledTemperatureInDegrees>
      <StyledText
        fontWeight={fontWeight}
        fontSize={fontSize}
        isUpperCase={isUpperCase}
      >
        {temperature}
      </StyledText>
      <StyledDegreeSymbol symbolSize={symbolSize} degreeOffset={degreeOffset} />
    </StyledTemperatureInDegrees>
  );
}

export default TemperatureInDegrees;
