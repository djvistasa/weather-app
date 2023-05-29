import React from 'react';
import { StatusBar } from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import { StyledSafeAreaView } from './src/components/common';
import AppContextProvider from './src/context';
import Navigation from './src/navigation';
import { theme } from './src/theme';

function App(): JSX.Element {
  return (
    <StyledSafeAreaView>
      <QueryClientProvider client={new QueryClient()}>
        <ThemeProvider theme={theme}>
          <StatusBar barStyle={'dark-content'} />
          <AppContextProvider>
            <Navigation />
          </AppContextProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </StyledSafeAreaView>
  );
}

export default App;
