/**
 *
 * Map
 *
 */

import React from 'react';
import { Marker } from 'react-native-maps';
import { useAppContext } from '../../context';
import useLocation from '../../hooks/useLocation';
import { StyledMap } from './styles';
import { IMapProps } from './types';

function Map(_props: IMapProps): JSX.Element | null {
  const { deviceLocation } = useLocation();
  const {
    user: {
      profile: { favoriteLocations },
    },
  } = useAppContext();

  return deviceLocation ? (
    <StyledMap
      initialRegion={{
        longitude: deviceLocation?.longitude as number,
        latitude: deviceLocation?.latitude as number,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      {favoriteLocations.map((location) => (
        <Marker
          key={location.title}
          coordinate={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          }}
          title={location.title}
        />
      ))}
    </StyledMap>
  ) : null;
}

export default Map;
