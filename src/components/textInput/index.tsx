/**
 *
 * TextInput
 *
 */

import React from 'react';
import { useTheme } from 'styled-components/native';
import {
  StyledErrorMessage,
  StyledFieldLabel,
  StyledInputWrapper,
  StyledTextInput,
} from './styles';
import { ITextInputProps } from './types';

function TextInput({
  multiline,
  label,
  errorMessage,
  borderColor,
  onChangeText,
}: ITextInputProps): JSX.Element {
  const {
    colors: { white },
  } = useTheme();
  return (
    <>
      {label ? <StyledFieldLabel>{label}</StyledFieldLabel> : null}
      <StyledInputWrapper>
        <StyledTextInput
          selectionColor={borderColor}
          numberOfLines={multiline ? 3 : 0}
          placeholderTextColor={white}
          onChangeText={onChangeText}
        />

        {errorMessage ? (
          <StyledErrorMessage>{errorMessage as string}</StyledErrorMessage>
        ) : null}
      </StyledInputWrapper>
    </>
  );
}

export default TextInput;
