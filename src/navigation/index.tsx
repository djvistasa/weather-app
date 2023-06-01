import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';

import useHydration from '../hooks/useHydration';
import FavoriteLocations from '../screens/favoriteLocations';
import FavoriteLocationsMap from '../screens/favoriteLocationsMap';
import Home from '../screens/home';
import { RootStackParamList } from './types';

function Navigation(): JSX.Element {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const { hydrateContext } = useHydration();
  useEffect(() => {
    hydrateContext();
  }, [hydrateContext]);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="FavoriteLocations" component={FavoriteLocations} />
        <Stack.Screen
          name="FavoriteLocationsMap"
          component={FavoriteLocationsMap}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
