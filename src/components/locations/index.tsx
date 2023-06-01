/**
 *
 * Locations
 *
 */

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { FlatList } from 'react-native';
import { RootStackParamList } from '../../navigation/types';
import Button from '../button';
import { StyledLocation, StyledLocationTitle, StyledLocations } from './styles';
import { ILocationsProps } from './types';

function Locations({ locations }: ILocationsProps): JSX.Element {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <>
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
      <Button
        title="View on map"
        onPress={() => navigate('FavoriteLocationsMap')}
      />
    </>
  );
}

export default Locations;
