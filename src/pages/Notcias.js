import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Noticias({navigation}) {
  return (
    <View>
      <StatusBar hidden/>
      <Text>Home</Text>
      <Button 
        title="Ir para Home"
        onPress={()=> navigation.navigate('Portal')}
      />
    </View>
  )
}

const styles = StyleSheet.create({})
