import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';

import Lista from './src/Lista';

export default function App() {

 const [feed] = useState([
   {
     id: '1',
     nome: 'Racha Cuca',
     descricao: 'Eu prefiro morrer do que perder a vida',
     imgperfil: require('./src/img/fotoPerfil1.png'),
     imgpublicacao: require('./src/img/foto2.png'),
     likeada: false,
     likers: 0
   },

   {
    id: '2',
    nome: 'Poucas Trancas',
    descricao: 'Não há nada mais trabalhoso do que viver sem trabalhar',
    imgperfil: require('./src/img/fotoPerfil2.png'),
    imgpublicacao: require('./src/img/foto3.png'),
    likeada: true,
    likers: 26
  },

  {
    id: '3',
    nome: 'Quase Nada',
    descricao: 'O porco perde os dentes mas não perde a barriga',
    imgperfil: require('./src/img/fotoPerfil3.png'),
    imgpublicacao: require('./src/img/foto4.png'),
    likeada: false,
    likers: 45
  }
  
  
  ]);



  return (
    <SafeAreaView style={styles.container}>     
      <StatusBar style="auto" />
      
      <View style={styles.header}>
          <Image         
            source={require('./src/img/logo.png')}
            style={styles.logo}        
          />
          
          <TouchableOpacity>
          <Image         
            source={require('./src/img/send.png')}
            style={styles.send}        
          />
          </TouchableOpacity>
      </View>

      <FlatList 
        showsVerticalScrollIndicator={false}
        data={feed}
        renderItem={({item})=> <Lista data={item}/>}      
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1    
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  send: {
    width: 25,
    height: 25
  }
});
