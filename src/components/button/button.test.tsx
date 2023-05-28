import { render } from '@testing-library/react-native';
import React from 'react';
import Button from '.';

test('does component render', () => {
  const tree = render(<Button title="" onPress={jest.fn()}/>);
  tree;
});
