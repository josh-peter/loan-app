import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function HeaderComp({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() =>
              navigation.navigate("InvitationScreen")
              }>
        <FontAwesome5 name="angle-left" size={25} color="#57606f" />
      </TouchableOpacity>
      <Text style={styles.text}>Loan Apply</Text>
      <Text style={styles.text}>Details</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
    paddingTop: 45,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    color: "#57606f",
    fontSize: 20,
    fontWeight: "bold",
  },
});
