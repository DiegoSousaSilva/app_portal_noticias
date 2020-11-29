import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Home({navigation}) {
  return (
    <View>
      <StatusBar hidden/>
      <Text>Home</Text>
      <Button 
        title="Ir para Noticias"
        onPress={()=> navigation.navigate('Noticias')}
      />
    </View>
  )
}

const styles = StyleSheet.create({})
