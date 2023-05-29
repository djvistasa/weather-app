import { render } from '@testing-library/react-native';
import React from 'react';
import Modal from '.';

test('does component render', () => {
  const tree = render(<Modal />);
  tree;
});
