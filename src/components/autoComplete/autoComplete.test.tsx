import { render } from '@testing-library/react-native';
import React from 'react';
import AutoComplete from '.';

test('does component render', () => {
  const tree = render(<AutoComplete />);
  tree;
});
