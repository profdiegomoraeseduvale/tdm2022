import React, { Component } from 'react';
import { SafeAreaView, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

class Biscoito extends Component {

  constructor(props){
    super(props);
    
    this.state = {
      frasetxt : '',
      img : require('./assets/biscoito.png'),
      quebrou : false
    }

    this.frases = [
      'Não compense na ira o que lhe falta na razão',
      'Defeitos e virtudes são apenas dois lados da mesma moeda',
      'A maior de todas as torres começa no solo',
      'Não há que ser forte. Há que ser flexível'
    ]

    this.quebrarBiscoito = this.quebrarBiscoito.bind(this);
    this.novoBiscoito = this.novoBiscoito.bind(this);

  }

quebrarBiscoito(){
   
  let aleatorio = Math.floor(Math.random()*this.frases.length);
  this.setState({
    frasetxt : this.frases[aleatorio],
    img : require('./assets/biscoitoAberto.png'),
    quebrou : true
  });

}

novoBiscoito(){
  this.setState({
    frasetxt : '',
    img : require('./assets/biscoito.png'),
    quebrou : false
  });
}

render(){
  return(
    <SafeAreaView style={styles.container}>

      <Text style={styles.frase}>{this.state.frasetxt}</Text>

      <Image 
       source={this.state.img}
       style={styles.img}      
      />
      
      {!this.state.quebrou ? (
      <TouchableOpacity style={styles.areabotaoquebrar} onPress={this.quebrarBiscoito}>
        <Text style={styles.textobotao}>Quebrar Biscoito</Text>
      </TouchableOpacity>) : null}

      {this.state.quebrou ? (
      <TouchableOpacity style={styles.areabotaonovo} onPress={this.novoBiscoito}>
        <Text style={styles.textobotao}>Novo Biscoito</Text>
      </TouchableOpacity>) : null }


       
    </SafeAreaView>
  )
}


}

const styles = StyleSheet.create({
    
    container : {
      flex: 1,
      alignItems : 'center',
      justifyContent : 'center'
    },

    frase : {
      fontSize : 26,
      fontWeight : 'bold',
      textAlign : 'center',
      padding: 20
    },

    img : {
      width: 250,
      height: 250
    },

    areabotaoquebrar : {
      width: '70%',
      height: 50,
      backgroundColor : '#0099ff',
      borderRadius : 10,
      alignItems : 'center',
      justifyContent : 'center',
      marginBottom : 20      
    },

    areabotaonovo : {
      width: '70%',
      height: 50,
      backgroundColor : '#ff4d4d',
      borderRadius : 10,
      alignItems : 'center',
      justifyContent : 'center',      
    },

    textobotao : {
      fontSize : 18,
      color: '#fff'
    }

})



export default Biscoito;
