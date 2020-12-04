import React from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const image2 ={ uri: 'https://uploads.jovemnerd.com.br/wp-content/uploads/2020/02/one-piece-manga-adiado.jpg'};
const image = require('../assets/onepiecenoticia.jpg');


export default function Home({navigation}) {
  return (
    <View style={{flex:1}}>
      <View style={{flex: 0.3}}>
        <ScrollView horizontal contentContainerStyle={{width:'200%', height: 200}} style={{flex:1}}>
          <ImageBackground source={image} style={styles.imageStyle}>
            <TouchableOpacity 
              onPress={()=> navigation.navigate('Noticias',{
                titulo: 'One Piece está disponível na Netflix',
                conteudo: 'One Piece chegou ao catálogo da Netflix hoje (12), e agora é possível acompanhar a aventura dos Piratas do Chapéu de Palha com dublagem em português na plataforma.',
                img: image,
              })} 
              style={styles.touchableStyle}>
              <Text style={styles.txtImage}>One Piece está disponível na Netflix</Text>
            </TouchableOpacity>
          </ImageBackground>

          <ImageBackground source={image2} style={styles.imageStyle}>
            <TouchableOpacity 
              onPress={()=> navigation.navigate('Noticias',{
                titulo: 'Novo capítulo do mangá é adiado temporariamente',
                conteudo: 'Apesar das estimativas de Eiichiro Oda, criador de One Piece, de que o mangá deve ser concluído nos próximos anos (leia mais aqui) isso ainda não está exatamente perto de acontecer. A franquia continua super popular e os capítulos continuam sendo publicados semanalmente.',
                img: image2,
              })}
              style={styles.touchableStyle}>
              <Text style={styles.txtImage}>Novo capítulo do mangá é adiado temporariamente</Text>
            </TouchableOpacity>
          </ImageBackground>
        </ScrollView>
    
      </View>
      <View style={{flex:0.7, padding:20}}>
        <View style={{
          width: 50,
          height: 2, 
          backgroundColor: '#069', 
          position:"absolute",
          left:40, 
          top:40 }}> 
        </View> 
        <Text> Mais Notícias </Text>
        <ScrollView contentContainerStyle={{padding:20}} style={{flex:1}}>
          <View style={{ marginBottom:10}}>
            <TouchableOpacity 
              style={{flexDirection:'row',}}
              onPress={()=> navigation.navigate('Noticias',{
                titulo: 'One Piece está disponível na Netflix',
                conteudo: 'One Piece chegou ao catálogo da Netflix hoje (12), e agora é possível acompanhar a aventura dos Piratas do Chapéu de Palha com dublagem em português na plataforma.',
                img: image,
              })}   
            >
              <Image 
                source={image}
                style={{width:100, height:100}} />  
              <Text style={{padding:10}}>One Piece de volta no Brasil</Text>      
            </TouchableOpacity>  
              

              
          </View>
        </ScrollView>
               
      </View>
      <StatusBar hidden/>
    </View>
  )
}

const styles = StyleSheet.create({
  imageStyle:{
    flex:1,
    resizeMode:'cover',
    justifyContent: 'flex-end',
    width: '100%'
  },
  txtImage:{
    color: '#fff',
    fontSize: 18
  },
  touchableStyle:{
    width:'100%', 
    height:'100%', 
    backgroundColor: 'rgba(0,0,0,0.5)', 
    justifyContent:'flex-end'
  }
})
