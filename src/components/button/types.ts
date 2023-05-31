import { ButtonVariant } from './enums';

interface IButtonProps {
  title: string;
  onPress: () => void;
  variant?: ButtonVariant;
}

interface IStyledButtonProps {
  backgroundColor: string;
}

export type { IButtonProps, IStyledButtonProps };
