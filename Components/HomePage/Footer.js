import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState} from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function Footer({ navigation }) {
//dynamic hover effect for footer
  const [hover, setHover] = useState(false);
  

  return (
    <View style={styles.footer}>
    <View style={styles.footerCon}>
        <TouchableOpacity style={styles.content}
          onPress={() => navigation.navigate("HomeScreen")}
          //implementing the hover effect
          onPressIn={() => setHover(true)}
        >
          <MaterialIcons style={styles.footerIcons} name="home" size={20} color="#CCD1DE" />
        <Text style={styles.footerTexts}>Loan</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.content}    onPress={() => navigation.navigate("InvitationScreen")}
        //implementing the hover effect
          onPressIn={() => setHover(true)}
        >
        <MaterialIcons style={styles.footerIcon} name="account-balance-wallet" size={20} />
        <Text style={styles.footerText}>Repayment</Text>
          </TouchableOpacity>
        <TouchableOpacity style={styles.content}
          onPress={() => navigation.navigate("LoanScreen")}
          //implementing the hover effect
          onPressIn={() => setHover(true)}
        >
        <MaterialIcons style={styles.footerIcon} name="person" size={20} />
        <Text style={styles.footerText}>My</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    footer: {
        flexDirection: "row",
        justifyContent: "center",
    },
    footerCon: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#f1f2f6",
        height: 100,
        width: 550,
        paddingHorizontal: 30,
    },
    content: {
        justifyContent: "center",
      alignItems: "center",
    },
    footerIcon: {
        color: "#CCD1DE",
        fontSize: 35,
        marginRight: 10,
        fontWeight: "bold",
    },
    footerText: {
        color: "#CCD1DE",
        fontSize: 15,
        letterSpacing: 1,
        fontWeight: "bold",
    },
    footerIcons: {
        color: "#226BD2",
        fontSize: 35,
        marginRight: 10,
        fontWeight: "bold",
    },
    footerTexts: {
        color: "#226BD2",
        fontSize: 15,
        letterSpacing: 1,
        fontWeight: "bold",
  },
  categoryTextSelected: {
    color: "#226BD2",
        fontSize: 35,
        marginRight: 10,
    fontWeight: "bold",
    olor: "#226BD2",
    fontSize: 15,
    letterSpacing: 1,
    fontWeight: "bold",
  },
});
