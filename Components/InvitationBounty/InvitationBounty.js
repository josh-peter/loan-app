import React from "react";
import { View, Text, StyleSheet } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function InvitationBounty() {
  return (
    <View style={styles.Container}>
      <View style={styles.Content}>
        <Text style={styles.bounty}>Bounty the month</Text>
        <Text style={styles.bountyText}>$42.00</Text>
      </View>
      <View style={styles.Content}>
        <Text style={styles.bounty}>Cumulative Bounty</Text>
        <Text style={styles.bountyText}>$40,500.00</Text>
      </View>
      <View style={styles.Content2}>
        <Text style={styles.bounty3}>Cumulative Invited</Text>
        <Text style={styles.bountyText4}>
          10 people {" "}
          <FontAwesome5 name="angle-right" size={20} color="#bdc3c7" />
        </Text>
      </View>
      <View style={styles.Content4}>
        <View style={styles.icons}>
          <FontAwesome5
            name="exclamation"
            size={11}
            color="#bdc3c7"
            style={styles.icon}
          />
        </View>
        <View style={styles.Content5}>
          <Text style={styles.text5}>
            The amount will be transferred to your bank card on the 15th of each
            month and you will be notified of the amount
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#fff",
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
  Content: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 65,
    alignItems: "center",
    borderBottomColor: "#dfe4ea",
    borderBottomWidth: 1,
  },
  bounty: {
    fontSize: 16,
    color: "#57606f",
    fontWeight: "bold",
    marginBottom: 20,
  },
  bountyText: {
    fontSize: 16,
    color: "#4b7bec",
    fontWeight: "bold",
    marginBottom: 20,
  },
  Content2: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 65,
    alignItems: "center",
    borderBottomColor: "#dfe4ea",
    borderBottomWidth: 1,
    alignItems: "center",
  },
  bounty3: {
    fontSize: 16,
    color: "#57606f",
    fontWeight: "bold",
    marginBottom: 20,
  },
  bountyText4: {
    fontSize: 16,
    color: "#bdc3c7",
    fontWeight: "bold",
    marginBottom: 20,
  },
  Content3: {
    flexDirection: "row",
    marginTop: 20,
  },
  Content4: {
    flexDirection: "row",
    marginTop: 20,
  },
  icons: {
    borderRadius: 50,
    backgroundColor: "#d1d8e0",
    width: 22,
    height: 22,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    color: "#fff",
  },
  Content5: {
    marginLeft: 10,
    paddingRight: 10,
  },
  text5: {
    fontSize: 13,
      fontWeight: "bold",
    color: "#a5b1c2",
  },
});
