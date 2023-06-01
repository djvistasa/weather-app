import React from 'react';
import Locations from '.';
import { renderWithTheme } from '../../utils/tests';

test('does component render', () => {
  const tree = renderWithTheme(<Locations locations={[]} />);
  tree;
});
