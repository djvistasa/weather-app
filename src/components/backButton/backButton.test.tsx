import { render } from '@testing-library/react-native';
import React from 'react';
import BackButton from '.';

test('does component render', () => {
  const tree = render(<BackButton />);
  tree;
});
