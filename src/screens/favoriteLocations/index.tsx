/**
 *
 * FavoriteLocations
 *
 */
import React from 'react';
import ApplicationWrapper from '../../components/applicationWrapper';
import Locations from '../../components/locations';
import { useAppContext } from '../../context';

function FavoriteLocations(): JSX.Element {
  const {
    user: {
      profile: { favoriteLocations },
    },
  } = useAppContext();
  return (
    <ApplicationWrapper hasBackButton title="Favorite Locations">
      <Locations locations={favoriteLocations} />
    </ApplicationWrapper>
  );
}

export default FavoriteLocations;
