import React from 'react';
import ApplicationWrapper from '.';
import { renderWithTheme } from '../../utils/tests';

test('does component render', () => {
  const tree = renderWithTheme(
    <ApplicationWrapper hasBackButton title="Test">
      <></>
    </ApplicationWrapper>,
  );
  tree;
});
