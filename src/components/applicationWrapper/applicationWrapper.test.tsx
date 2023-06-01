import { render } from '@testing-library/react-native';
import React from 'react';
import ApplicationWrapper from '.';

test('does component render', () => {
  const tree = render(<ApplicationWrapper />);
  tree;
});
