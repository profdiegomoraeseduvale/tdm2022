import React, { Component } from 'react'
import { Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'


export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      salariobruto : 0.00,
      salarioliquido : 0.00
    }
    
    this.calcularSalario = this.calcularSalario.bind(this);

  }

  calcularSalario(){
     
    let salbruto = parseFloat(this.state.salariobruto);
    let salliquido = salbruto - (salbruto*0.185) + (salbruto*0.05);
      
     this.setState({
       salarioliquido : salliquido
     })
  }


  render() {
    return (
      <SafeAreaView style = {styles.container}>
        <Text style={styles.titulo}> Folha de Pagamento </Text>
        <TextInput 
          style = {styles.input}
          placeholder = 'Digite o salário bruto'
          onChangeText={(valor)=>this.setState({salariobruto : valor})}        
        />

        <TouchableOpacity style={styles.areaBotao} onPress={this.calcularSalario}>

          <Text style = {styles.textoBotao}>
             Calcular
          </Text>

        </TouchableOpacity>

        <Text style={styles.titulo}> R${this.state.salarioliquido.toFixed(2)} </Text>

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

  titulo : {
    fontSize : 24,
    textAlign : 'center',
    marginBottom : 15

  },

  input : {
    width: '75%',
    height: 50,
    fontSize : 20,
    borderWidth : 1,
    borderColor : '#000',
    borderRadius : 10,
    paddingLeft : 10,
    marginTop : 15
  },

  areaBotao : {
    width: '75%',
    height: 50,
    backgroundColor : '#0080ff',
    alignItems : 'center',
    justifyContent : 'center',
    borderRadius : 10,
    marginTop : 15,
    marginBottom : 15
  },

  textoBotao : { 
    fontSize : 22,
    color: '#fff' 
  }

})




