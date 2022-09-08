import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function InvitationCon() {
  return (
      <View style={styles.invitation}>
          <Text
             style={styles.invitationText} 
          >
          $40.00
          </Text>
          <Text style={styles.invitationTexts}>
              Today Bounty
          </Text>
     </View>
  );
}

const styles = StyleSheet.create({
    invitation: {
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        marginBottom: 40,
    },
    invitationText: {
        fontSize: 60,
        fontWeight: "bold",
        color: "#4b7bec"
    },
    invitationTexts: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#bdc3c7",
    }
});
