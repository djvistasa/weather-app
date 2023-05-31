import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import useAppState from '../hooks/useAppState';
import Home from '../screens/home';
import { RootStackParamList } from './types';

function Navigation(): JSX.Element {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const appState = useAppState();

  useEffect(() => {
    console.log({ appState });
  }, [appState]);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
