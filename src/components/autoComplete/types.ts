import { ICoordinates } from '../../hooks/useWeather/types';

interface ILocationResultCoords {
  x: number;
  y: number;
}

interface IAutoCompleteSelectOption {
  title: string;
  value: ILocationResultCoords;
}

interface IAutoCompleteProps {
  onSelect: (value: ICoordinates, title: string) => void;
  options: IAutoCompleteSelectOption[];
  onChangeText: (value: string) => void;
  placeholder?: string;
  label?: string;
  searchValue?: string;
  errorMessage?: unknown;
  labelColor?: string;
  borderColor?: string;
  defaultValue?: string;
}

export type {
  IAutoCompleteProps,
  ILocationResultCoords,
  IAutoCompleteSelectOption,
};
