import React, { useState, useEffect, useMemo } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {

  
  const [nome, setNome] = useState('Fulano');
  const [input, setInput] = useState('');
 
  useEffect(()=>{

   async function verNome(){
     const nomeSalvo = await AsyncStorage.getItem('nomes');
     if(nomeSalvo != null){
       setNome(nomeSalvo);
     }
   }

   verNome();

  },[])
  
  
  useEffect(()=>{
    
    async function salvarNome(){
       await AsyncStorage.setItem('nomes', nome);
    }

    salvarNome();

  },[nome])


  function gravaNome(){
    setNome(input);
    setInput('');
  }

  //const letrasnome = nome.length;
  //console.log(letrasnome);

  const letrasnome  = useMemo(()=>{
      console.log('Mudou letra');
      return nome.length;
  },[nome])
  
    return (
      <View style={styles.container}>
        <Text style={styles.texto}>{nome}</Text>
        <TextInput 
         style={styles.input}
         value={input}
         onChangeText={(texto)=> setInput(texto)}        
        />

        <TouchableOpacity style={styles.botao} onPress={gravaNome}>
          <Text style={styles.texto}>Gravar Nome</Text>
        </TouchableOpacity>
      </View>
    );
  
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input : {
    width: '80%',
    height: 50,
    textAlign: 'center',
    borderWidth: 1,
    borderBottomColor: 'black',
    fontSize: 23,
    marginTop: 20
  },

  botao : {
    width: '80%',
    height: 50,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems : 'center',
    marginTop: 20
  },

  texto : {
    fontSize: 23
  }
});
