/**
 *
 * Locations
 *
 */

import React from 'react';
import { FlatList } from 'react-native';
import { StyledLocation, StyledLocationTitle, StyledLocations } from './styles';
import { ILocationsProps } from './types';

function Locations({ locations }: ILocationsProps): JSX.Element {
  return (
    <StyledLocations>
      <FlatList
        data={locations}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item: { title } }) => (
          <StyledLocation>
            <StyledLocationTitle>{title}</StyledLocationTitle>
          </StyledLocation>
        )}
      />
    </StyledLocations>
  );
}

export default Locations;
