import React, { useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, Switch } from 'react-native'



export default function App(){

  const [salariobruto, setSalarioBruto] = useState(0.00);
  const [salarioliquido, setSalarioLiquido] = useState(0.00);
  const [status, setStatus] = useState(false);

  function calcularSalario(){
     
    let salbruto = parseFloat(salariobruto);
    let salliquido = null;

    if(status){
      salliquido = salbruto - (salbruto*0.185) + (salbruto*0.05); 
    }else{
      salliquido = salbruto - (salbruto*0.185); 
    }
         
     setSalarioLiquido(salliquido);

  }


  
    return (
      <View style = {styles.container}>
        <Text style={styles.titulo}> Folha de Pagamento </Text>
        <TextInput 
          style = {styles.input}
          placeholder = 'Digite o salário bruto'
          onChangeText={(valor)=>setSalarioBruto(valor)}        
        />

      <View style={styles.areaswitch}>
        <Switch          
          value={status}
          onValueChange={(valorStatus)=>setStatus(valorStatus)}
        />
        <Text style={{marginHorizontal:20, fontSize:20}}>Possui adicional?</Text>
      </View>
        
         
        
       

        <TouchableOpacity style={styles.areaBotao} onPress={calcularSalario}>

          <Text style = {styles.textoBotao}>
             Calcular
          </Text>

        </TouchableOpacity>

        <Text style={styles.titulo}> R${salarioliquido.toFixed(2)} </Text>

      </View>
    )
  
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
  },

  areaswitch : {   
    flexDirection:'row',     
    marginTop: 30,
    alignItems: 'center',
    
    
  }

})