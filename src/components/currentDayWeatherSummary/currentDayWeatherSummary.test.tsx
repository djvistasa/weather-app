import React from 'react';
import CurrentDayWeatherSummary from '.';
import { renderWithTheme } from '../../utils/tests';

test('does component render', () => {
  const tree = renderWithTheme(
    <CurrentDayWeatherSummary
      backgroundColor="white"
      currentTemperature={45}
      maximumTemperature={35}
      minimumTemperature={15}
    />,
  );
  tree;
});
