import React from 'react';
import Button from '.';
import { renderWithTheme } from '../../utils/tests';

test('does component render', () => {
  const tree = renderWithTheme(<Button title="" onPress={jest.fn()} />);
  tree;
});
