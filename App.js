import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Home from './src/pages/Home';
import NewNoticia from './src/pages/NewNoticia';
import Noticia from './src/pages/Notcias';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <Tab.Navigator
      initialRouteName="Portal"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Portal"
        component={Home}
        options={{
          tabBarLabel: 'Portal',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Nova Noticia"
        component={NewNoticia}
        options={{
          tabBarLabel: 'Nova Noticia',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-list-box" color={color} size={size} />
          )
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>

  );
}

