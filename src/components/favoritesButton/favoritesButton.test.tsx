import { render } from '@testing-library/react-native';
import React from 'react';
import FavoritesButton from '.';

test('does component render', () => {
  const tree = render(<FavoritesButton />);
  tree;
});
