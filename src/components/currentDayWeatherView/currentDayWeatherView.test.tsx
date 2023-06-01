import React from 'react';
import CurrentDayWeatherView from '.';
import { renderWithTheme } from '../../utils/tests';

test('does component render', () => {
  const tree = renderWithTheme(
    <CurrentDayWeatherView
      todaysWeather={{
        currentTemperature: 45,
        day: 'Tuesday',
        description: 'hello',
        maximumTemperature: 25,
        minimumTemperature: 45,
        type: 'cloudy',
      }}
    />,
  );
  tree;
});
