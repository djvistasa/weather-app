import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: {
      white: string;
      sunny: string;
      cloudy: string;
      rainy: string;
    };
  }
}
