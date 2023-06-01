/**
 *
 * FavoritesButton
 *
 */

import React from 'react';
import * as icons from '../../assets';
import { useAppContext } from '../../context';
import { StyledText } from '../common';
import {
  StyledCounterWrapper,
  StyledFavoritesButton,
  StyledFavoritesIcon,
} from './styles';
import { IFavoritesButtonProps } from './types';

function FavoritesButton({ onPress }: IFavoritesButtonProps): JSX.Element {
  const {
    user: { profile },
  } = useAppContext();
  return (
    <StyledFavoritesButton
      onPress={onPress}
      disabled={profile.favoriteLocations.length === 0}
    >
      {profile.favoriteLocations.length > 0 && (
        <StyledCounterWrapper>
          <StyledText fontSize={15}>
            {profile.favoriteLocations.length}
          </StyledText>
        </StyledCounterWrapper>
      )}
      <StyledFavoritesIcon source={icons.starIcon} resizeMode="contain" />
    </StyledFavoritesButton>
  );
}

export default FavoritesButton;
