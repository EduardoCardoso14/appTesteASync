import { React, useState } from 'react';
import { Text, TouchableOpacity, View, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style/global';

function TelaDois({ navigation }) {
  const [result, setResult] = useState('');

  const saveValue = async () => {
    try {
      await AsyncStorage.setItem('resultB', JSON.stringify(result));
    } catch (e) {
      console.error('Erro ao salvar valor:', e);
    }
  };
  const loadValue = async () => {
    try {
      const value = await AsyncStorage.getItem('resultA');
      if (value !== null) {
        a = JSON.parse(value);
      }
    } catch (e) {
      console.error('Erro ao carregar valor:', e);
    }
  };
  loadValue();
  saveValue();
  return (
    <View style={styles.container}>
      <Button title='Voltar' onPress={() => navigation.navigate('TelaUm')}></Button>
      <Text></Text>
      <Text>18 X 10 = </Text>
      <TextInput
        style={styles.input}
        placeholder="Escreva o resultado aqui."
        keyboardType="numeric"
        onChangeText={setResult}
        value={result}
      />
      <Button title='Salvar' onPress={() => navigation.navigate('TelaTres')}></Button>

    </View>
  );
}
export default TelaDois;