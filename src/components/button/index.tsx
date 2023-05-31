/**
 *
 * Button
 *
 */

import React from 'react';
import { useTheme } from 'styled-components/native';
import { StyledText } from '../common';
import { ButtonVariant } from './enums';
import { StyledButton } from './styles';
import { IButtonProps } from './types';

function Button({ onPress, title, variant }: IButtonProps): JSX.Element {
  const {
    colors: { sunny, error, success },
  } = useTheme();
  const getBackgroundColorByVariant = () => {
    switch (variant) {
      case ButtonVariant.Primary:
        return sunny;
      case ButtonVariant.Secondary:
        return error;
      default:
        return success;
    }
  };
  return (
    <StyledButton
      onPress={onPress}
      backgroundColor={getBackgroundColorByVariant()}
    >
      <StyledText fontSize={18}>{title}</StyledText>
    </StyledButton>
  );
}

export default Button;
