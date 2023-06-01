import React from 'react';
import FavoritesButton from '.';
import { renderWithTheme } from '../../utils/tests';

test('does component render', () => {
  const tree = renderWithTheme(<FavoritesButton onPress={jest.fn} />);
  tree;
});
