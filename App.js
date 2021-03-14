import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';

import Slider from '@react-native-community/slider';

export default function App() {

  function generatePass() {
    Alert.alert( "Titulo", "Mensagem")
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('./src/assets/logo.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>12 caracteres</Text>

      <View style={styles.area}>
        <Slider 
          style={{ height: 50 }}
          minimumValue={5}
          maximumValue={15}
          minimumTrackTintColor="#FF0000"
          maximumTrackTintColor="#000"
        />
      </View>

      <TouchableOpacity style={styles.button} OnPress={generatePass}>
        <Text style={styles.buttonText}>Gerar Senha</Text>
      </TouchableOpacity>

      <View style={styles.area}>
        <Text style={styles.password}>DFHS2DGH4SF4G34</Text>
      </View>


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3F3FF'
  },

  logo: {
    marginBottom: 60
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold'
  },

  area: {
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
    width: '90%',
    borderRadius: 7
  }, 

  button: {
    backgroundColor: '#FFA200',
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 25
  },

  buttonText: {
    fontSize: 20,
    color: '#FFF',
    fontWeight: 'bold'
  },

  password: {
    padding: 10,
    textAlign: 'center'
  }
});