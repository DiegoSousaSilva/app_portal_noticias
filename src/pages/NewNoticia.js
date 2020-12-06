import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View , TextInput, TouchableOpacity, Alert, Button} from 'react-native';
import {db} from '../../firebase';
import Colors from '../styles/Colors';
import * as firebase from 'firebase';

const NewNoticia = () => {

  const [newTitulo, setNewTitulo] = useState('');
  const [newConteudo, setNewConteudo] = useState('');
  const [newImage, setNewImage] =  useState('');

  function enviar(){
    db.collection('noticias').add({
      titulo: newTitulo,
      conteudo: newConteudo,
      img: newImage,
      data: firebase.firestore.FieldValue.serverTimestamp(),
    })
    alert('Noticia Cadastrada com Sucesso'); 
    setNewTitulo('');
    setNewConteudo('');
    setNewImage('');
   }

  return (
    <View style={styles.boxModal}>
    <View>
      <Text style={{...styles.textHeader, fontSize:15, padding:8}}> Título:</Text>
      <TextInput 
        placeholder="Digite o titulo da notícia"
        value={newTitulo}
        onChangeText={(text)=>setNewTitulo(text)}
        style={{height:40, width: '100%', borderColor: '#ccc',borderWidth:1, marginBottom:20}} 
        numberOfLines={4}
      ></TextInput>
    </View>

    <View>
      <Text style={{...styles.textHeader, fontSize:15, padding:8}}> Conteudo: </Text>
      <TextInput 
        placeholder="Digite aqui a noticia completa"
        value={newConteudo}
        onChangeText={(text)=>setNewConteudo(text)}
        style={{height:80, width: '100%', borderColor: '#ccc',borderWidth:1, marginBottom:20}} 
        numberOfLines={4}
      ></TextInput>
    </View>

    <View>
      <Text style={{...styles.textHeader, fontSize:15, padding:8}}> Url da Imagem: </Text>
      <TextInput 
        placeholder="Exemplo: 'https://site.com/imagem.jpg\'"
        value={newImage}
        onChangeText={(text)=>setNewImage(text)}
        style={{height:80, width: '100%', borderColor: '#ccc',borderWidth:1, marginBottom:20}} 
        numberOfLines={4}
      ></TextInput>
    </View>

    <TouchableOpacity 
      onPress={ ()=>enviar()} 
      style={{...styles.btnNavigation, justifyContent:'center', borderRadius:0}}
    >
      <Text style={{color: '#fff', fontSize: 15, fontWeight: 'bold'}}>Enviar Notícia</Text>
</TouchableOpacity>

  </View>
  )
}

export default NewNoticia

const styles = StyleSheet.create({
  textHeader: {
    color: Colors.text,
    fontSize: 24,
    fontWeight: 'bold'
  },
  btnNavigation:{
    backgroundColor: Colors.text,
    padding: 20,
    marginTop: 15,
    borderRadius: 8,
    flexDirection: 'row',

  },
})
