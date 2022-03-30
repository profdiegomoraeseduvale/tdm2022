import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';


class AulaState extends Component {

  constructor(props){
    super(props);
    
    this.state = {
      nome : 'Fulano',
      input : ''
    }

    this.mudarNome = this.mudarNome.bind(this);

  }

  mudarNome(){
    this.setState({
       nome : this.state.input
       
    })
  }

  render(){
    return(
      <View style={styles.container}>
        <TextInput 
         
          style = {styles.inputNome}
          placeholder = 'Digite um nome...'
          onChangeText={(texto)=> this.setState({input : texto})}
        
        />

        <Text style={{fontSize:26}}>{this.state.nome}</Text>

        <TouchableOpacity style={styles.areaBotao} onPress={this.mudarNome}>
        
             <Text style={styles.textoBotao}>Mudar nome</Text>
        
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container : {
     flex : 1,
     alignItems : 'center',
     justifyContent : 'center'
  },

  inputNome : {
    borderWidth : 2,
    borderColor : '#222',
    width : '80%',
    height : 40,
    paddingLeft : 10,
    fontSize : 26
    
  },

  areaBotao : {
    width : '70%',
    height : 50,
    backgroundColor : '#0080ff',
    alignItems : 'center',
    justifyContent : 'center',
    marginTop : 10,
    borderRadius : 10
  },

  textoBotao : {
    fontSize : 24,
    color : '#fff'
  }

});

export default AulaState;