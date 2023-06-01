import React from 'react';
import Modal from '.';
import { renderWithTheme } from '../../utils/tests';

test('does component render', () => {
  const tree = renderWithTheme(<Modal />);
  tree;
});
