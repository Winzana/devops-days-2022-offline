import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '@screens/home';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
