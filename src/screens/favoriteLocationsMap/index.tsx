/**
 *
 * FavoriteLocationsMap
 *
 */
import React from 'react';
import ApplicationWrapper from '../../components/applicationWrapper';
import Map from '../../components/map';

function FavoriteLocationsMap(): JSX.Element {
  return (
    <ApplicationWrapper hasBackButton title="Locations Map">
      <Map />
    </ApplicationWrapper>
  );
}

export default FavoriteLocationsMap;
