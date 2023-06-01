import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  FavoriteLocations: undefined;
  FavoriteLocationsMap: undefined;
};

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
type FavoriteLocationsProps = NativeStackScreenProps<
  RootStackParamList,
  'FavoriteLocations'
>;
type FavoriteLocationsMapProps = NativeStackScreenProps<
  RootStackParamList,
  'FavoriteLocationsMap'
>;

export type {
  FavoriteLocationsMapProps,
  FavoriteLocationsProps,
  HomeProps,
  RootStackParamList,
};
