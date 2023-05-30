import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { StyledSafeAreaView } from './src/components/common';
import AppContextProvider from './src/context';
import Navigation from './src/navigation';
import { theme } from './src/theme';

function App(): JSX.Element {
  return (
    <StyledSafeAreaView>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle={'dark-content'} />
        <AppContextProvider>
          <Navigation />
        </AppContextProvider>
      </ThemeProvider>
    </StyledSafeAreaView>
  );
}

export default App;
