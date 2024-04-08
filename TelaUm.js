import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style/global';

function TelaUm({ navigation }) {

  let a = 10;
  const saveValue = async () => {
    try {
      await AsyncStorage.setItem('a', JSON.stringify(a));
    } catch (e) {
      console.error('Erro ao salvar valor:', e);
    }
  };

  const loadValue = async () => {
    try {
      const value = await AsyncStorage.getItem('a');
      if (value !== null) {
        a = JSON.parse(value);
      }
    } catch (e) {
      console.error('Erro ao carregar valor:', e);
    }
  };
  a = 20;
  saveValue();

  return (
    <View style={styles.container}>
      <Text>Open up {a} App.js to start working on your app!</Text>
      <TouchableOpacity onPress={() => navigation.navigate('TelaDois')}>
        <Text>Clique aqui</Text>
      </TouchableOpacity>
    </View>
  );
}

export default TelaUm;
