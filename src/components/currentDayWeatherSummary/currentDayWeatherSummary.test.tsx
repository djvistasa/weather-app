import { render } from '@testing-library/react-native';
import React from 'react';
import CurrentDayWeatherSummary from '.';

test('does component render', () => {
  const tree = render(<CurrentDayWeatherSummary />);
  tree;
});
