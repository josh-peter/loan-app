import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function Button() {
  return (
    <View style={styles.btn}>
    <Pressable
      android_ripple={{ color: "#210644" }}>
      <Text style={styles.text}>Promptly Apply</Text>
    </Pressable>
  </View>
  );
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: "#57606f",
        width: "100%",
        height: 65,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        marginTop: 60,
    },
    text: {
        fontSize: 20,
        color: "#fff",
        fontWeight: "bold",
        letterSpacing: 0.8,
    },
})