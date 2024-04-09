import { React, useState } from 'react';
import { Text, TouchableOpacity, View, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style/global';

function TelaTres({ navigation }) {

    const [result, setResult] = useState('');

    const saveValue = async () => {
        try {
            await AsyncStorage.setItem('resultC', JSON.stringify(result));
        } catch (e) {
            console.error('Erro ao salvar valor:', e);
        }
    };
    const loadValue = async () => {
        try {
            const value1 = await AsyncStorage.getItem('resultA');
            const value2 = await AsyncStorage.getItem('resultB');
            if (value1 !== null) {
                a = JSON.parse(value1);
            }
        } catch (e) {
            console.error('Erro ao carregar valor:', e);
        }
    };
    loadValue();
    saveValue();

    return (
        <View style={styles.container}>
            <Button title='Voltar' onPress={() => navigation.navigate('TelaDois')}></Button>
            <Text></Text>
            <Text>25 X 5 = </Text>
            <TextInput
                style={styles.input}
                placeholder="Escreva o resultado aqui."
                keyboardType="numeric"
                onChangeText={setResult}
                value={result}
            />
            <Button title='Salvar' onPress={() => navigation.navigate('Result')}></Button>

        </View>
    );
}

export default TelaTres;
