import React from 'react';
import { Button, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const image ={ uri: 'https://reactjs.org/logo-og.png'};

export default function Home({navigation}) {
  return (
    <View style={{flex:1}}>
      <ScrollView horizontal contentContainerStyle={{width:'200%', height: 250}} style={{flex:1}}>
        <ImageBackground source={image} style={styles.image}>
          <View style={{position:'absolute', left:0, top:0, width:'100%', height:'100%', backgroundColor: 'rgba(0,0,0,0.5)'}}></View>
          <Text style={styles.txtImage}>Noticia principal</Text>
        </ImageBackground>
      </ScrollView>
      

      <TouchableOpacity onPress={()=> navigation.navigate('Noticias')}>
        <Text>Noticias</Text>
      </TouchableOpacity>
      <StatusBar hidden/>
    </View>
  )
}

const styles = StyleSheet.create({
  image:{
    flex:1,
    resizeMode:'cover',
    justifyContent: 'flex-end',
    width: '50%'
  },
  txtImage:{
    color: '#fff',
    fontSize: 30
  }
})
