import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style/global';

function TelaDois({ navigation }) {
  let a;
  const loadValue = async () => {
    try {
      const value = await AsyncStorage.getItem('a');
      console.log(value);
      if (value !== null) {
        a = JSON.parse(value);
      }
    } catch (e) {
      console.error('Erro ao carregar valor:', e);
    }
  };
  loadValue();
  return (
    <View style={styles.container}>
      <Text>Tela doiszz {a}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('TelaTres')}>
        <Text>Tela 3 </Text>
      </TouchableOpacity>
    </View>
  );
}
export default TelaDois;