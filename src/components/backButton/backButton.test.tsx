import React from 'react';
import BackButton from '.';
import { renderWithTheme } from '../../utils/tests';

test('does component render', () => {
  const tree = renderWithTheme(<BackButton />);
  tree;
});
