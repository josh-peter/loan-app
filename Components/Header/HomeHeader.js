import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function HomeHeader() {
  return (
    <View style={styles.container}>
          <Text style={styles.text}>Borrow Money</Text>
          <MaterialIcons
              style={styles.icon}
              name="headset-mic"
              size={25}
          />
     </View>
  );
}


const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        flexDirection: 'row',
        paddingHorizontal: 5,
        justifyContent: "space-between",
        alignContent: "center",
    },
    text: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#434C63"
    },
});