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
  placeholder,
  value,
}: ITextInputProps): JSX.Element {
  const {
    colors: { white50 },
  } = useTheme();

  return (
    <>
      {label ? <StyledFieldLabel>{label}</StyledFieldLabel> : null}
      <StyledInputWrapper>
        <StyledTextInput
          selectionColor={borderColor}
          numberOfLines={multiline ? 3 : 0}
          placeholderTextColor={white50}
          onChangeText={onChangeText}
          placeholder={placeholder}
          value={value}
        />

        {errorMessage ? (
          <StyledErrorMessage>{errorMessage as string}</StyledErrorMessage>
        ) : null}
      </StyledInputWrapper>
    </>
  );
}

export default TextInput;
