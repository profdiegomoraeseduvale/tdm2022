import React, {useState, useEffect} from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';
import firebase from './src/services/firebaseCon';

import { StatusBar } from 'expo-status-bar';

export default function App() {

  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');

  useEffect(()=>{
    
    async function dados(){
     //Busca valor no banco
    /*  await firebase.database().ref('usuario/1').on('value',(snapshot)=>{
        setNome(snapshot.val().nome);
        setIdade(snapshot.val().idade);
      }) */
    
    //Cria um nó
    //await firebase.database().ref('idade').set(36);
    
    //Cria um nó com nós
    //await firebase.database().ref('noteste').child(1).child('nome').set('Diego');
    //await firebase.database().ref('noteste').child(1).child('idade').set(36);
    
    //Remove um nó
    //await firebase.database().ref('noteste').remove();

    //Atualiza um nó
   /* await firebase.database().ref('usuario').child(1).set({
      nome: 'João',
      
    }) */

   /* await firebase.database().ref('usuario').child(1).update({
        nome: 'Diego'
    }); */

    }

    dados();

  },[])

  async function cadastrar(){

   if(nome!='' && idade!=''){
     let usuario = firebase.database().ref('usuario');
     let chave = usuario.push().key;

     usuario.child(chave).set({
       nome: nome,
       idade: idade
     });
     alert('Cadastrado com sucesso!');
   }

  }

  return (
    <View style={styles.container}>
      <TextInput
         style={styles.input} 
         placeholder='Digite o nome'        
         value={nome}
         onChangeText={(value)=>{setNome(value)}} 
        />
  
       <TextInput
         style={styles.input} 
         placeholder='Digite a idade'       
         value={idade}
         onChangeText={(value)=>{setIdade(value)}} 
        />  
  
        <Button 
         title='Cadastrar'
         onPress={()=>{cadastrar()}}
        />
      <StatusBar style="auto" />
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


   input: {
    width: '90%',
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    fontSize: 20,
    marginTop: 20
  }

});
