/**
 *
 * BackButton
 *
 */

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import * as icons from '../../assets';
import { RootStackParamList } from '../../navigation/types';
import { StyledBackButton, StyledBackButtonIcon } from './styles';

function BackButton(): JSX.Element {
  const { goBack } =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <StyledBackButton onPress={goBack}>
      <StyledBackButtonIcon source={icons.backIcon} />
    </StyledBackButton>
  );
}

export default BackButton;
