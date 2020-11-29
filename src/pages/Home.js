import React from 'react';
import { Button, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

//const image ={ uri: 'https://reactjs.org/logo-og.png'};
const image = require('../assets/onepiecenoticia.jpg');

export default function Home({navigation}) {
  return (
    <View style={{flex:1}}>
      <ScrollView horizontal contentContainerStyle={{width:'200%', height: 200}} style={{flex:1}}>
        <ImageBackground source={image} style={styles.image}>
          <TouchableOpacity onPress={()=> navigation.navigate('Noticias')} style={{width:'100%', height:'100%', backgroundColor: 'rgba(0,0,0,0.5)', justifyContent:'flex-end'}}>
            <Text style={styles.txtImage}>One Piece está disponível na Netflix</Text>
          </TouchableOpacity>
        </ImageBackground>

        <ImageBackground source={image} style={styles.image}>
          <TouchableOpacity style={{width:'100%', height:'100%', backgroundColor: 'rgba(0,0,0,0.5)', justifyContent:'flex-end'}}>
            <Text style={styles.txtImage}>One Piece está disponível na Netflix</Text>
          </TouchableOpacity>
        </ImageBackground>
      </ScrollView>
      
      <StatusBar hidden/>
    </View>
  )
}

const styles = StyleSheet.create({
  image:{
    flex:1,
    resizeMode:'cover',
    justifyContent: 'flex-end',
    width: '100%'
  },
  txtImage:{
    color: '#fff',
    fontSize: 22
  }
})
