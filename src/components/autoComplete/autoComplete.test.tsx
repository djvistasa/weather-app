import React from 'react';

import AutoComplete from '.';
import { renderWithTheme } from '../../utils/tests';

test('does component render', () => {
  const tree = renderWithTheme(
    <AutoComplete onChangeText={jest.fn()} onSelect={jest.fn()} options={[]} />,
  );
  tree;
});
