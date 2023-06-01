import React from 'react';
import TemperatureInDegrees from '.';
import { renderWithTheme } from '../../utils/tests';

test('does component render', () => {
  const tree = renderWithTheme(<TemperatureInDegrees temperature={35} />);
  tree;
});
