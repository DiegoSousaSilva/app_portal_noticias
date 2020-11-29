import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/pages/Home';
import Noticias from './src/pages/Notcias';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Portal" component={Home} />
        <Stack.Screen name="Noticias" component={Noticias} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

