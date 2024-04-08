import { React, useState } from 'react';
import { Text, TouchableOpacity, View, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style/global';

function Result({ navigation }) {

    let conta1 = 542 * 87;
    let conta2 = 127 * 23;
    let conta3 = 967 * 3;
    const [v1, setV1] = useState();
    const [v2, setV2] = useState();
    const [v3, setV3] = useState();
    const [msg1, setMsg1] = useState();
    const [msg2, setMsg2] = useState();
    const [msg3, setMsg3] = useState();


    const loadValue = async () => {
        try {
            const value1 = await AsyncStorage.getItem('resultA');
            const value2 = await AsyncStorage.getItem('resultB');
            const value3 = await AsyncStorage.getItem('resultC');
            console.log(value1, value2, value3);
            if (value1 !== null && value2 !== null && value3 !== null) {
                setV1(JSON.parse(value1));
                setV2(JSON.parse(value2));
                setV3(JSON.parse(value3));
            }
        } catch (e) {
            console.error('Erro ao carregar valor:', e);
        }
    };
    loadValue();
    return (
        <View style={styles.container}>
            <Text>Questão 1: 542 X 87 </Text>
            {conta1 == v1 ? <Text>Você acertou! Resultado: {conta1}</Text> : <Text>Você errou! Você digitou: {v1} Resultado: {conta1}</Text>}
            <Text></Text>
            <Text>Questão 2: 127 X 23  </Text>
            {conta2 == v2 ? <Text>Você acertou! Resultado: {conta2}</Text> : <Text>Você errou! Você digitou: {v2} Resultado: {conta2}</Text>}
            <Text></Text>
            <Text>Questão 3: 967 X 3  </Text>
            {conta3 == v3 ? <Text>Você acertou! Resultado: {conta3}</Text> : <Text>Você errou! Você digitou: {v3} Resultado: {conta3}</Text>}
            <Text></Text>
            <Button title='Voltar' onPress={() => navigation.navigate('TelaUm')}></Button>
        </View>
    );
}

export default Result;
