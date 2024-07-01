import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import MapScreen from './MapScreen';

// Faz a navegação entre página home e mapScreen
const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Coworking.App' }}
        />
        <Stack.Screen
          name="Map"
          component={MapScreen}
          options={{ title: 'Mapa de Coworkings' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
