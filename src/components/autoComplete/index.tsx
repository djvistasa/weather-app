/**
 *
 * AutoComplete
 *
 */

import React, { useEffect, useState } from 'react';
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
  errorMessage,
  label,
  labelColor,
  borderColor,
}: IAutoCompleteProps): JSX.Element {
  const [areOptionsVisible, setAreOptionsVisible] = useState<boolean>(
    options.length > 0,
  );

  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleOptionSelect = (
    { x, y }: ILocationResultCoords,
    title: string,
  ) => {
    setAreOptionsVisible(false);
    Keyboard.dismiss();

    onSelect({ latitude: y, longitude: x }, title);
  };

  const handleChange = (value: string) => {
    setSearchTerm(value);
    onChangeText(value);
  };

  useEffect(() => {
    setAreOptionsVisible(true);
  }, [options]);

  return (
    <StyledAutoComplete>
      <StyledSearchWrapper>
        <TextInput
          onChangeText={(value: string) => handleChange(value)}
          placeholder={truncate(placeholder as string, 40)}
          label={label}
          errorMessage={errorMessage}
          labelColor={labelColor}
          borderColor={borderColor}
          value={searchTerm}
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
