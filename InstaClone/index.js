import React, { useState, useEffect} from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';


function Lista(props){

    const [feed] = useState(props.data);
    const [like, setLike] = useState();

    useEffect(()=>{
        
       if(feed.likeada==false){
           setLike(require('../img/like.png'));
       }else{
           setLike(require('../img/likeada.png'));
       }

    }, []);

    function curtirPub(){
        if(feed.likeada == false){
            setLike(require('../img/likeada.png'));
            feed.likeada = true;
            feed.likers+=1;
        }else{
            setLike(require('../img/like.png'));
            feed.likeada = false;
            feed.likers-=1;
        }
    }

    return(

        <View>
           
           <View style={styles.viewPerfil}>
              
              <Image              
               source={feed.imgperfil}
               style={styles.fotoPerfil}              
              />

              <Text style={styles.textoPerfil}>
                 {feed.nome}
              </Text>

           </View>
            
           <Image 
             source={feed.imgpublicacao}
             style={styles.fotoPublicacao}
           />

           <View style={styles.areaBotoes}>
               <TouchableOpacity onPress={curtirPub}>
                <Image 
                    source={like}
                    style={styles.like}
                    />
               </TouchableOpacity>
                
               <TouchableOpacity>
                <Image 
                    source={require('../img/send.png')}
                    style={styles.like}
                    />
               </TouchableOpacity>               

           </View>

           <View style={styles.areaTexto}>
               <Text style={styles.textoCurtida}>{feed.likers} curtidas</Text>
               <Text style={styles.textoDescricao}>{feed.descricao}</Text>
           </View>
          

        </View>

    );
}

const styles = StyleSheet.create({

viewPerfil: {
   flex: 1,
   flexDirection: 'row',
   alignItems: 'center'
},

fotoPerfil: {
    width: 50,
    height: 50,
    borderRadius: 25,
    margin: 10
},

textoPerfil: {
    fontSize: 20
},

fotoPublicacao: {
    width: '99%',
    height: 400,
    alignSelf: 'center'
},

like: {
    width: 40,
    height: 40,
    margin: 10
},

areaBotoes: {
    flexDirection: 'row'
},

areaTexto: {
    marginLeft: 10,
    marginBottom: 10
},

textoCurtida: {
    fontWeight: 'bold',
    fontSize: 16
},

textoDescricao: {
    fontSize: 16
}


   

});

export default Lista;