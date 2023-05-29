import { Dimensions } from 'react-native';
import { DefaultTheme } from 'styled-components/native';

export const theme: DefaultTheme = {
  colors: {
    white: '#ffffff',
    sunny: '#4a90e2',
    cloudy: '#628594',
    rainy: '#686868',
    transparency: 'rgba(0, 0, 0, 0.7)',
    error: '#D8576E',
    success: '#7CC958',
    warning: '#ba6947',
  },
  dimensions: {
    screenWidth: Dimensions.get('window').width,
    screenHeight: Dimensions.get('window').height,
  },
};
