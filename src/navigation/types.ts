import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
};

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export type { HomeProps, RootStackParamList };
