import { render } from '@testing-library/react-native';
import React from 'react';
import WeatherForecastView from '.';

test('does component render', () => {
  const tree = render(<WeatherForecastView />);
  tree;
});
