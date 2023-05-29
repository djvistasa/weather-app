/**
 *
 * AutoComplete
 *
 */

import React, { useCallback, useState } from 'react';
import { Keyboard } from 'react-native';
import { truncate } from '../../utils';
import TextInput from '../textInput';
import {
  StyledAutoComplete,
  StyledDivider,
  StyledOptionItem,
  StyledOptionTitle,
  StyledOptionsWrapper,
  StyledSearchWrapper,
} from './styles';
import { IAutoCompleteProps, ILocationResultCoords } from './types';

function AutoComplete({
  onSelect,
  options,
  onChangeText,
  placeholder,
  searchValue,
  errorMessage,
  label,
  labelColor,
  borderColor,
  defaultValue,
}: IAutoCompleteProps): JSX.Element {
  const [areOptionsVisible, setAreOptionsVisible] = useState<boolean>(
    options.length > 0,
  );

  const [activeOption, setActiveOption] = useState<string>('');

  const handleOptionSelect = useCallback(
    ({ x, y }: ILocationResultCoords, title: string) => {
      setAreOptionsVisible(false);
      onSelect({ latitude: x, longitude: y }, title);
      setActiveOption(title);
      Keyboard.dismiss();
    },
    [onSelect],
  );

  const handleChange = (value: string) => {
    onChangeText(value);
  };

  return (
    <StyledAutoComplete>
      <StyledSearchWrapper>
        <TextInput
          onChangeText={(value) => handleChange(value)}
          placeholder={truncate(placeholder as string, 40)}
          value={truncate(searchValue || activeOption, 40)}
          label={label}
          errorMessage={errorMessage}
          labelColor={labelColor}
          borderColor={borderColor}
          defaultValue={defaultValue}
        />
      </StyledSearchWrapper>
      {areOptionsVisible && (
        <StyledOptionsWrapper>
          {options.map(({ title, value }, index) => (
            <StyledOptionItem
              key={`${index}-title`}
              onPress={() => handleOptionSelect(value, title)}
            >
              <StyledOptionTitle>{truncate(title, 50)}</StyledOptionTitle>
              {index !== 0 ? <StyledDivider /> : null}
            </StyledOptionItem>
          ))}
        </StyledOptionsWrapper>
      )}
    </StyledAutoComplete>
  );
}

export default AutoComplete;
