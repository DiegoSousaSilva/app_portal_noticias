import React,{useState, useEffect} from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {db} from '../../firebase';

const image2 ={ uri: 'https://uploads.jovemnerd.com.br/wp-content/uploads/2020/02/one-piece-manga-adiado.jpg'};
const image = require('../assets/onepiecenoticia.jpg');


export default function Home({navigation}) {

  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    db.collection('noticias').orderBy('data', 'desc').onSnapshot(snapshot=>{
      setNoticias(snapshot.docs.map(function(doc){
        return {info:doc.data()}
      }));
    })
  }, [])

  return (
    <View style={{flex:1}}>
      <View style={{flex: 0.3}}>
        <ScrollView horizontal contentContainerStyle={{width:'200%', height: 150}} style={{flex:1}}>
        {
          noticias.map((val, index)=>{
            if(index<2){
              return(
              <ImageBackground key={index} source={{uri: val.info.img}} style={styles.imageStyle}>
                <TouchableOpacity 
                  onPress={()=> navigation.navigate('Noticias',{
                    titulo: val.info.titulo,
                    conteudo: val.info.conteudo,
                    img: val.info.img,
                  })} 
                  style={styles.touchableStyle}>
                  <Text style={styles.txtImage}>{val.info.titulo}</Text>
                </TouchableOpacity>
              </ImageBackground>)
            }
          })
          
        }
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
        {
          noticias.map((val, index)=>{
            if(index>=2){
              return(
              <View key={index} style={{ marginBottom:10}}>
                <TouchableOpacity 
                  style={{flexDirection:'row',}}
                  onPress={()=> navigation.navigate('Noticias',{
                    titulo: val.info.titulo,
                    conteudo:val.info.conteudo,
                    img: val.info.img,
                  })}   
                >
                  <Image 
                    source={{uri:val.info.img}}
                    style={{width:100, height:100}} />  
                  <Text style={{padding:10}}>{val.info.titulo}</Text>      
                </TouchableOpacity> 
                  
              </View>
            )}
          })        
        }
    
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
