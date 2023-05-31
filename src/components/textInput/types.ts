import { TextInputProps } from 'react-native';
import { DefaultTheme } from 'styled-components/native';

interface ITextInputProps extends TextInputProps {
  icon?: string;
  borderRadius?: number;
  hasBorder?: boolean;
  hasClearButton?: boolean;
  multiline?: boolean;
  label?: string;
  labelColor?: string;
  errorMessage?: unknown;
  placeHolderColor?: string;
  theme?: DefaultTheme;
  borderColor?: string;
  handleFieldClear?: () => void;
}

export type { ITextInputProps };
