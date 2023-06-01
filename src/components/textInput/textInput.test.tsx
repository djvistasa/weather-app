import React from 'react';
import TextInput from '.';
import { renderWithTheme } from '../../utils/tests';

test('does component render', () => {
  const tree = renderWithTheme(<TextInput />);
  tree;
});
