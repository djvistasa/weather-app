import React from 'react';
import { StatusBar } from 'react-native';
import { enableLatestRenderer } from 'react-native-maps';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import { StyledSafeAreaView } from './src/components/common';
import AppContextProvider from './src/context';
import Navigation from './src/navigation';
import { theme } from './src/theme';

enableLatestRenderer();

function App(): JSX.Element {
  const client = new QueryClient();
  return (
    <StyledSafeAreaView>
      <QueryClientProvider client={client}>
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
