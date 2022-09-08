import React from "react";
import { View, Text, StyleSheet} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Button from "../Button/Button";

export default function SecondContainer() {
  return (
    <View style={styles.container}>
      <View style={styles.Content}>
        <Text style={styles.text1}>Select your loan amount</Text>
        <Text style={styles.text2}>You can loan up to $80, 000</Text>
      </View>
      <View style={styles.Content1}>
        <Text style={styles.txt}>-</Text>
        <Text style={styles.txt1}>12,000</Text>
        <Text style={styles.txt}>+</Text>
      </View>
      <View style={styles.Content2}>
        <Text style={styles.txt3}>Life of loan</Text>
        <View style={styles.txtCon}>
          <Text style={styles.txt5}>6 month</Text>
          <Text style={styles.txt4}>12 month</Text>
          <Text style={styles.txt4}>18 month</Text>
          <Text style={styles.txt4}>24 month</Text>
          <Text style={styles.txt4}>other</Text>
        </View>
      </View>
      <View style={styles.Content3}>
        <Text style={styles.txt6}>
          Repayment Plan{" "}
          <FontAwesome5 name="angle-up" size={22} color="#8395a7" />
        </Text>
      </View>
      <View style={styles.Content4}>
        <Text style={styles.txt7}>
          <FontAwesome5 name="book" size={20} color="#8395a7" /> Reckoning
        </Text>
        <View style={styles.Content5}>
          <Text style={styles.txt8}>Down payment</Text>
          <Text style={styles.txt9}>$800.00</Text>
        </View>
        <View style={styles.Content6}>
          <Text style={styles.txt10}>Gross Interest</Text>
          <Text style={styles.txt11}>$2130.00</Text>
        </View>
        <View style={styles.Content7}>
          <Text style={styles.txt12}>Due Date</Text>
          <Text style={styles.txt13}>Month 5th</Text>
              </View>
              <Button/>
          </View>
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "100%",
    height: "84%",
    borderRadius: 15,
  },
  Content: {
    marginTop: 25,
  },
  Content1: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#ebebeb",
    paddingBottom: 17,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  text1: {
    fontSize: 25,
    color: "#000",
    fontWeight: "bold",
    marginBottom: 6,
    paddingHorizontal: 10,
  },
  text2: {
    fontSize: 14,
    color: "#8395a7",
    marginBottom: 25,
    paddingHorizontal: 10,
  },
  txt: {
    fontSize: 25,
    color: "#8395a7",
    fontWeight: "bold",
    width: 40,
    height: 40,
    backgroundColor: "#c8d6e5",
    textAlign: "center",
    paddingHorizontal: 10,
  },
  txt1: {
    fontSize: 45,
    color: "#8395a7",
    fontWeight: "bold",
    textAlign: "center",
    paddingHorizontal: 10,
  },
  txt3: {
    fontSize: 22,
    color: "#000000",
    fontWeight: "bold",
    marginBottom: 25,
    paddingHorizontal: 10,
  },
  txt4: {
    fontSize: 14,
    color: "#8395a7",
    fontWeight: "bold",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#8395a7",
    padding: 10,
    marginRight: 15,
    borderRadius: 50,
    width: 100,
    textAlign: "center",
    paddingHorizontal: 10,
  },
  txt5: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#8395a7",
    backgroundColor: "#57606f",
    padding: 10,
    marginRight: 15,
    borderRadius: 50,
    width: 100,
    textAlign: "center",
    paddingHorizontal: 10,
  },
  txtCon: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 10,
  },
  txt6: {
    fontSize: 18,
    color: "#000000",
    fontWeight: "bold",
    paddingHorizontal: 10,
  },
  Content3: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 60,
    paddingHorizontal: 14,
    textAlign: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  Content4: {
    zIndex: 1000,
    width: "100%",
    height: "53.5%",
    backgroundColor: "#f1f2f6",
    marginTop: 40,
    paddingHorizontal: 10,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
  },
  txt7: {
    fontSize: 23,
    color: "#000000",
    fontWeight: "bold",
    paddingHorizontal: 10,
    paddingTop: 16,
    paddingBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#dfe4ea",
    letterSpacing: 0.5,
  },
  Content5: {
    flexDirection: "row",
      justifyContent: "space-between",
      paddingTop: 25,
      alignItems: "center",
      borderBottomColor: "#dfe4ea",
        borderBottomWidth: 1,
    },
    txt8: {
        fontSize: 16,
        color: "#57606f",
        fontWeight: "bold",
        marginBottom: 20,
        paddingHorizontal: 15,
    },
    txt9: {
        fontSize: 22,
        color: "#57606f",
        fontWeight: "bold",
        marginBottom: 20,
    },
    Content6: {
        flexDirection: "row",
          justifyContent: "space-between",
          paddingTop: 25,
          alignItems: "center",
          borderBottomColor: "#dfe4ea",
            borderBottomWidth: 1,
        },
        txt10: {
            fontSize: 16,
            color: "#8395a7",
            fontWeight: "bold",
            marginBottom: 20,
            paddingHorizontal: 15,
        },
        txt11: {
            fontSize: 22,
            color: "#57606f",
            fontWeight: "bold",
            marginBottom: 20,
    },
    Content7: {
        flexDirection: "row",
          justifyContent: "space-between",
          paddingTop: 25,
          alignItems: "center",
          borderBottomColor: "#dfe4ea",
            borderBottomWidth: 1,
        },
        txt12: {
            fontSize: 16,
            color: "#8395a7",
            fontWeight: "bold",
            marginBottom: 20,
            paddingHorizontal: 15,
        },
        txt13: {
            fontSize: 22,
            color: "#57606f",
            fontWeight: "bold",
            marginBottom: 20,
    },
    btn: {
        textAlign: "center",
        flexDirection: "row",
        paddingTop: 25,
        borderBottomColor: "#dfe4ea",
        borderBottomWidth: 1,
    },
});
