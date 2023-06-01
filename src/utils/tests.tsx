import { NavigationContainer } from '@react-navigation/native';
import { render } from '@testing-library/react-native';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { theme } from '../theme';

const renderWithTheme = (component: JSX.Element) =>
  render(
    <ThemeProvider theme={theme}>
      <NavigationContainer>{component}</NavigationContainer>
    </ThemeProvider>,
  );

export { renderWithTheme };
