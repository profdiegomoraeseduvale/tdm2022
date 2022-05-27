import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import { auth } from '../../services/firebasecon';
import { signOut} from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

export default function Home(){

    const navigation = useNavigation();

    async function logoutUser(){
        await signOut(auth).
        then(()=>{
            alert('Deslogado');
            navigation.navigate('login')
        }).
        catch(error => alert(error));

    }

    return(
      
        <View style={styles.container}>
            
            <Text>Página Home</Text>
       

            <Button 
             title='Logout'
             onPress={()=>logoutUser()}
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


  });