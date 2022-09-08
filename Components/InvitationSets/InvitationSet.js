import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function InvitationSets() {
  return (
    <View style={styles.Instructions}>
      <View style={styles.container}>
        <View style={styles.column}>
          <Text style={styles.number}>1</Text>
          <View style={styles.iconCon}>
            <View style={styles.icons}>
              <MaterialIcons
                style={styles.icon}
                name="share"
                size={30}
                color="#B9C0CE"
              />
            </View>

            <Text style={styles.text}>Send a link </Text>
            <Text style={styles.text2}>to friends</Text>
          </View>
        </View>

        <View style={styles.column}>
          <Text style={styles.number}>2</Text>
          <View style={styles.iconCon}>
            <View style={styles.icons}>
              <MaterialIcons
                style={styles.icon}
                name="lock"
                size={30}
                color="#B9C0CE"
              />
            </View>
            <Text style={styles.text}>Friends Loan </Text>
            <Text style={styles.text2}>Successful</Text>
          </View>
        </View>

        <View style={styles.column}>
          <Text style={styles.number}>3</Text>
          <View style={styles.iconCon}>
            <View style={styles.icons}>
              <MaterialIcons
                style={styles.icon}
                name="preview"
                size={30}
                color="#B9C0CE"
              />
            </View>
            <Text style={styles.text}>Get bonus</Text>
            <Text style={styles.text2}>earnings</Text>
          </View>
        </View>
          </View>
          <TouchableOpacity style={styles.button}>
        <Text style={styles.friends}>Invite friends</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  Instructions: {
    marginTop: 150,
    width: "100%",
    height: 600,
    backgroundColor: "#f1f2f6",
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
  },

  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
  },

  text: {
    paddingTop: 10,
    textAlign: "center",
    alignItems: "center",
      fontWeight: "bold",
    color: "#192a56",
  },

  text2: {
    textAlign: "center",
      fontWeight: "bold",
    color: "#192a56",
  },
  column: {
    justifyContent: "center",
    padding: 10,
  },

  number: {
    textAlign: "left",
      fontSize: 17,
    fontWeight: "bold",
  },

  icon: {
    textAlign: "center",
    color: "#192a56",
  },
  icons: {
    width: 50,
    height: 50,
    backgroundColor: "#ffffff",
    padding: 10,
    borderRadius: 50,
  },
  iconCon: {
    alignItems: "center",
  },

  friends: {
    fontSize: 20,
    color: "#FFFFFF",
    fontWeight: "bold",
    },
    button: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 50,
        padding: 20,
        backgroundColor: "#3B77CD",
        alignItems: "center",
        borderRadius: 50
      }
});
