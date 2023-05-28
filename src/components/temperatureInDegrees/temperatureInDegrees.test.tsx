import { render } from '@testing-library/react-native';
import React from 'react';
import TemperatureInDegrees from '.';

test('does component render', () => {
  const tree = render(<TemperatureInDegrees />);
  tree;
});
