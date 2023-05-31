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

function FavoritesButton(_props: IFavoritesButtonProps): JSX.Element {
  const {
    user: { profile },
  } = useAppContext();
  return (
    <StyledFavoritesButton>
      {profile.favoriteLocations.length && (
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
