import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  FavoriteLocations: undefined;
};

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
type FavoriteLocationsProps = NativeStackScreenProps<
  RootStackParamList,
  'FavoriteLocations'
>;

export type { FavoriteLocationsProps, HomeProps, RootStackParamList };
