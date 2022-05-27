
import {React , useState} from 'react';
import {StyleSheet, View, TextInput, Button, LogBox} from 'react-native';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../../services/firebasecon';
import { useNavigation } from '@react-navigation/native';

export default function Login(){

    LogBox.ignoreAllLogs();

    const navigation = useNavigation();
     
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();

    async function createUser(){
       await createUserWithEmailAndPassword(auth, email, senha).
       then(value => {
           alert('Cadastrado com Sucesso!'+value.user.uid);
       }).
       catch(error => alert(error));
    }

    async function loginUser(){
        await signInWithEmailAndPassword(auth, email, senha).
        then(value => {
            alert('Acesso concedido!');
            navigation.navigate('home');
            setEmail('');
            setSenha('');
        }).
        catch(error => alert(error));
     }

    return(
      
        <View style={styles.container}>

            <TextInput
             style={styles.input} 
             placeholder='Digite seu e-mail'
             autoCapitalize='none'
             value={email}
             onChangeText={(value)=>{setEmail(value)}}            
            />

            <TextInput
             style={styles.input} 
             placeholder='Digite sua senha'
             value={senha}
             onChangeText={(value)=>{setSenha(value)}}
             secureTextEntry={true}            
            />

            <Button 
             title='Acessar'
             onPress={()=>loginUser()}
            />

            <Button 
             title='Cadastrar'
             onPress={()=>createUser()}
            />

            

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
        fontSize: 20,
        padding: 10,
        marginTop: 20 
    }
  });