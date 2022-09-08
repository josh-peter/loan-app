import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function MemberList() {
  return (
      <View style={styles.memberList}>
          <Text style={styles.text}>Cash gifts for loans</Text>
          <View style={styles.ImageCon}>
          <Image style={styles.tinyImage}
              source={require("../../assets/gift_coin.png")} />
          </View>
     </View>
  );
}

const styles = StyleSheet.create({
    memberList: {
        marginTop: 25,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#FEE7E0",
        height: 90,
        borderRadius: 50,
    },
    text: {
        color: "#C97872",
        fontSize: 28,
        letterSpacing: 1,
        fontWeight: "bold",
    },
    ImageCon: {
        flexDirection: "column",
    },
    tinyImage: {
        width: 150,
        height: 100,
    },
});