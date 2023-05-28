import { render } from '@testing-library/react-native';
import React from 'react';
import CurrentDayWeatherView from '.';

test('does component render', () => {
  const tree = render(<CurrentDayWeatherView />);
  tree;
});
