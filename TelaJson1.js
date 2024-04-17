import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View, Button } from 'react-native';
import { FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

function TelaJson1({ navigation }) {

  const [users, setUsers] = useState([]);

  /*useEffect(() => {
    fetch('http://172.16.42.89/testeapi/')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users: bom dia ', error));
  }, []);
  
  
   <FlatList
        data={users}
        keyExtractor={item => item.idtestereactzin.toString()}
        renderItem={({ item }) => (
          <View style={styles.userContainer}>
            <Text style={styles.name}>{item.nome}</Text>
            <Text style={styles.email}>{item.senha}</Text>
          </View>
        )}
      />
  */
  var nome = 'igor';
  var senha = 'igor22';
  fetch('http://172.16.42.89/testeapi/insert/',
    { nome, senha })
    .then(resposta => resposta.json())
    .then((json) => console.log(json))
    .catch((error) => console.error(error));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Usuáriosss</Text>
      <Text> Tela 1</Text>
      <Button title='Resultado' onPress={() => navigation.navigate('TelaJson2')}></Button>
    </View>

  );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  userContainer: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 16,
    color: '#555',
  },
});

export default TelaJson1;
