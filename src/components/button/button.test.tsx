import { fireEvent } from '@testing-library/react-native';
import React from 'react';
import Button from '.';
import { renderWithTheme } from '../../utils/tests';

describe('Button', () => {
  it('renders the button text', () => {
    const buttonText = 'Click me';
    const { getByText } = renderWithTheme(
      <Button title="Click me" onPress={jest.fn()} />,
    );
    expect(getByText(buttonText)).toBeTruthy();
  });

  it('calls the onClick handler when clicked', () => {
    const onClick = jest.fn();
    const { getByText } = renderWithTheme(
      <Button title="Click me" onPress={onClick} />,
    );
    fireEvent.press(getByText('Click me'));
    expect(onClick).toHaveBeenCalled();
  });
});
