import React from 'react';
import { StyleSheet, Text, ScrollView, TouchableOpacity, View, ImageBackground} from 'react-native';
import { StatusBar } from 'expo-status-bar';


export default function Noticias({route, navigation}) {
  const image = route.params.img;
  return (
    <View style={styles.container}>
       <ImageBackground style={styles.imageStyle} source={{uri: image}} ></ImageBackground>
      <ScrollView contentContainerStyle={{width:'100%', height: 250}} >
        <StatusBar hidden/>
        <Text style={styles.titleText}>{route.params.titulo}</Text>
        <Text style={styles.conteudoText}>{route.params.conteudo}</Text>

      </ScrollView>
      <TouchableOpacity 
        style={{position: 'absolute', bottom: 0}}
        onPress={()=> navigation.navigate('Portal')}
      >
        <Text>Voltar</Text>
      </TouchableOpacity>
    </View>  
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:8,
    marginLeft: 8,
    marginRight: 8,
    backgroundColor: '#ccc'
  },
  titleText:{
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10
  },
  conteudoText:{
    fontSize: 13
  },
  imageStyle:{
    flex:1,
    resizeMode:'cover',
    justifyContent: 'flex-end',
    width: '100%',
    height: '100%'
  },
})
