import { render } from '@testing-library/react-native';
import React from 'react';
import Locations from '.';

test('does component render', () => {
  const tree = render(<Locations />);
  tree;
});
