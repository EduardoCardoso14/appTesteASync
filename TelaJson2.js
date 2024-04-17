import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View, Button, Image } from 'react-native';
import { FlatList, StyleSheet } from 'react-native';


function TelaJson2({ navigation }) {


  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://172.16.42.89/testeapi/insert')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users: ', error));
  }, []);

  //console.log(users);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Usuários</Text>
      <FlatList
        data={users}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.userContainer}>
            <Text style={styles.name}>{item.title}</Text>
            <Image source={{ uri: item.url }} style={{width: 200, height: 200}}></Image>
            <Text style={styles.email}>{item.email}</Text>
          </View>
        )
        }
      />
      < Button title='Resultado' onPress={() => navigation.navigate('TelaJson1')}></Button >
    </View >
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

export default TelaJson2;
