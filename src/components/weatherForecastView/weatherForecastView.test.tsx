import React from 'react';
import WeatherForecastView from '.';
import { renderWithTheme } from '../../utils/tests';

test('does component render', () => {
  const tree = renderWithTheme(
    <WeatherForecastView
      onAddToFavorites={jest.fn}
      weatherCondition="45"
      weatherForecast={[]}
    />,
  );
  tree;
});
