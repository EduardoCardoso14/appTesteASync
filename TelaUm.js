import { React, useState } from 'react';
import { Text, TouchableOpacity, View, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style/global';

function TelaUm({ navigation }) {

  const [result, setResult] = useState('');

  const saveValue = async () => {
    try {
      await AsyncStorage.setItem('resultA', JSON.stringify(result));
    } catch (e) {
      console.error('Erro ao salvar valor:', e);
    }
  }; 

  const loadValue = async () => {
    try {
      const value = await AsyncStorage.getItem('result');
      if (value !== null) {
        a = JSON.parse(value);
      }
    } catch (e) {
      console.error('Erro ao carregar valor:', e);
    }
  };

saveValue();

  return (
    <View style={styles.container}>
      <Text>12 X 2 = </Text>
      <TextInput
        style={styles.input}
        placeholder="Escreva o resultado aqui."
        keyboardType="numeric"
        onChangeText={setResult}
        value={result}
      />
      <Button title='Salvar' onPress={() => navigation.navigate('TelaDois')}></Button>
    </View>
  );
}

export default TelaUm;
