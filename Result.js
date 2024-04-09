import { React, useState } from 'react';
import { Text, TouchableOpacity, View, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style/global';

function Result({ navigation }) {

    let conta1 = 12 * 2;
    let conta2 = 18 * 10;
    let conta3 = 25 * 5;
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
            <Text>Questão 1: 12 X 2 </Text>
            {conta1 == v1 ? <Text>Você acertou! Resultado: {conta1}</Text> : <Text>Você errou! Você digitou: {v1} Resultado: {conta1}</Text>}
            <Text></Text>
            <Text>Questão 2: 18 X 10  </Text>
            {conta2 == v2 ? <Text>Você acertou! Resultado: {conta2}</Text> : <Text>Você errou! Você digitou: {v2} Resultado: {conta2}</Text>}
            <Text></Text>
            <Text>Questão 3: 25 X 5  </Text>
            {conta3 == v3 ? <Text>Você acertou! Resultado: {conta3}</Text> : <Text>Você errou! Você digitou: {v3} Resultado: {conta3}</Text>}
            <Text></Text>
            <Button title='vai pro jeison' onPress={() => navigation.navigate('TelaJson1')}></Button>
        </View>
    );
}

export default Result;
