import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: {
      white: string;
      white50: string;
      sunny: string;
      cloudy: string;
      rainy: string;
      transparency: string;
      error: string;
      success: string;
      warning: string;
    };
    dimensions: {
      screenWidth: number;
      screenHeight: number;
    };
  }
}
