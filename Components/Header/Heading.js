import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function HeaderComp({navigation}) { 
  return (
      <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
              <FontAwesome5 name="angle-left" size={25} color="#bdc3c7" />
            </TouchableOpacity>
          <Text style={styles.text}>Invitation</Text>
          <Text style={styles.texts}>Record</Text>
     </View>
  );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 8,
        marginBottom: 40,
        paddingTop: 45,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: {
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold',
    },
    texts: {
        color: '#bdc3c7',
        fontSize: 16,
    },
});