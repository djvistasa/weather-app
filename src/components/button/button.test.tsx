import { fireEvent } from '@testing-library/react-native';
import React from 'react';
import Button from '.';
import { renderWithTheme } from '../../utils/tests';
import { ButtonVariant } from './enums';

describe('Button', () => {
  it('renders the button text', () => {
    const buttonText = 'Click me';
    const { getByText } = renderWithTheme(
      <Button
        title="Click me"
        onPress={jest.fn()}
        variant={ButtonVariant.Primary}
      />,
    );
    expect(getByText(buttonText)).toBeTruthy();
  });

  it('calls the onClick handler when clicked', () => {
    const onClick = jest.fn();
    const { getByText } = renderWithTheme(
      <Button
        title="Click me"
        onPress={onClick}
        variant={ButtonVariant.Secondary}
      />,
    );
    fireEvent.press(getByText('Click me'));
    expect(onClick).toHaveBeenCalled();
  });

  it('handles default variant when none is passed in', () => {
    const onClick = jest.fn();
    const component = renderWithTheme(
      <Button title="Click me" onPress={onClick} />,
    );
    component;
  });
});
