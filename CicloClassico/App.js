import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      nome : 'Fulano',
      input: ''
    }
    
    this.gravaNome = this.gravaNome.bind(this);

  }

  async componentDidMount(){

    await AsyncStorage.getItem('nomes').then((value)=>{
      this.setState({nome : value})
    });
   
  }

  async componentDidUpdate(_,prevState){
      const nome = this.state.nome;

      if(prevState != nome){
        await AsyncStorage.setItem('nomes',nome);
      }
  }



  gravaNome(){
    this.setState({
      nome : this.state.input
    });
  }
  
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.texto}>{this.state.nome}</Text>
        <TextInput 
         style={styles.input}
         value={this.state.input}
         onChangeText={(texto)=>this.setState({input:texto})}
        
        />

        <TouchableOpacity style={styles.botao} onPress={this.gravaNome}>
          <Text style={styles.texto}>Gravar Nome</Text>
        </TouchableOpacity>
      </View>
    );
  }
 
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
