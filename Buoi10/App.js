import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import BikeListScreen from './components/BikeListScreen';
import BikeDetailScreen from './components/BikeDetailScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="BikeList" component={BikeListScreen} options={{ title: 'Bike List' }} />
        <Stack.Screen name="BikeDetail" component={BikeDetailScreen} options={{ title: 'Bike Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
