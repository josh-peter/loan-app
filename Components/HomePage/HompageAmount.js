import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function HomepageAmount() {
  return (
    <View style={styles.container}>
      <View style={styles.Content}>
        <Text style={styles.text}>Maximum Amount</Text>
        <Text style={styles.text1}>$8,000.00</Text>
      </View>
      <View style={styles.contents}>
        <View style={styles.Content1}>
          <MaterialIcons
            style={styles.icon}
            name="schedule"
            size={12}
            color="#B9C0CE"
          />
          <Text style={styles.text2}>5 minutes</Text>
        </View>
        <View style={styles.Content2}>
          <MaterialIcons
            style={styles.icon}
            name="schedule"
            size={12}
            color="#B9C0CE"
          />
          <Text style={styles.text2}>Unsecured</Text>
        </View>
        <View style={styles.Content3}>
          <MaterialIcons
            style={styles.icon}
            name="schedule"
            size={12}
            color="#B9C0CE"
          />
          <Text style={styles.text2}>Installment</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.friends}>Promptly Apply</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
    overflow: 'hidden',
    marginTop: 20,
    backgroundColor: "#226BD2",
    height: 250,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    alignItems: "center",
  },
  Content: {
    padding: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 12,
    letterSpacing: 2.5,
    fontWeight: "bold",
    color: "#ced6e0",
  },
  text1: {
    fontSize: 45,
    color: "#ffffff",
    fontWeight: "bold",
  },
  contents: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#357AD5",
    paddingHorizontal: 10,
    width: "95%",
    padding: 8,
    marginTop: 10,
    borderRadius: 5,
    opacity: 0.5,
  },
  Content1: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  Content2: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  Content3: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    paddingHorizontal: 5,
    color: "#ffffff",
  },
  text2: {
    color: "#ffffff",
  },
  button: {
    borderWidth: 1,
    borderColor: "#f1f2f6",
    width: 390,
    marginTop: 20,
    padding: 15,
    backgroundColor: "#2C74D3",
    alignItems: "center",
    borderRadius: 50,
  },
  friends: {
    color: "#ffffff",
    fontSize: 18,
    letterSpacing: 1.5,
  },
});
