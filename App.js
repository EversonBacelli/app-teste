import React from 'react';
import { Image, StyleSheet,Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.contanierTitulo}>
      
      <View style={styles.viewTexto1}>
          <Text style={styles.titulo}>
            Minha Rotina
          </Text>
      </View>


      <View style = {styles.topico2}>
          <Text style={styles.texto2}>
              Ola  Mundo asdfasdfajsdlfjaskldfklasdfasdkjfalksdfkjaslkj
              alskdjfkaslkfkajs
              aslkjflkajsklfjaklj
          </Text>
          
          <Image source={require("./img/olaMundo.jpg")}
          style = {styles.image}/>
      </View >
      
      <View style = {styles.topico3}>
          <Text style={styles.texto2}>
              Ola  Mundo asdfasdfajsdlfjaskldfklasdfasdkjfalksdfkjaslkj
              alskdjfkaslkfkajs
              aslkjflkajsklfjaklj
          </Text>
          
          <Image source={require("./img/olaMundo.jpg")}
          style = {styles.image}/>
      </View>
      
      <View style = {styles.topico2}>
          <Text style={styles.texto2}>
              Ola  Mundo asdfasdfajsdlfjaskldfklasdfasdkjfalksdfkjaslkj
              alskdjfkaslkfkajs
              aslkjflkajsklfjaklj
          </Text>
          
          <Image source={require("./img/olaMundo.jpg")}
          style = {styles.image}/>
      </View >
    </View>
    
  );
}

const styles = StyleSheet.create({
  contanierTitulo: {
    paddingHorizontal:24,
    paddingBottom: 15,
    height:'100%',
    width:'100%',
    backgroundColor: '#87CEFA',
  },
  viewTexto1:{
    width:'100%',
   },
  titulo:{
    display: 'flex',
    fontSize: 30,
    backgroundColor: '#008000',
    width:'100%',
    flex: 1,
    paddingHorizontal: 40,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    borderRadius: 20,    
  },
  image: {
    height:200,
    width:'40%',
    borderRadius: 20,    
  },
  topico2:{
    paddingTop: 10,
    flexDirection: 'row-reverse' ,
    display: 'flex',
    backgroundColor: '#000000',
    width: '100%',
    borderRadius: 20,
  },
  texto2:{
    color: '#0ff',
    fontSize: 20,
    height:200,
    width:'60%',
  },
  topico3:{
    paddingTop: 10,
    flexDirection: 'row' ,
    display: 'flex',
    alignContent:'flex-start',
    backgroundColor: '#000000',
    width: '100%',
    borderRadius: 10,    
  },
})
