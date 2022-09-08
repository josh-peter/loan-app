import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import styles from "./Styles";

export default function RecommendedLoan() {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.recommendedLoan}>
      <Text style={styles.text}>Recommended loan</Text>
        <View style={styles.contentContainerAll}>
          <View style={styles.content}>
            <View style={styles.contentLeft}>
              <MaterialIcons style={styles.icon} name="speed" size={15} />
              <Text style={styles.text1}>swift bank loan</Text>
            </View>
            <View style={styles.btnCon}>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.text2}>Speed</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.text2}>Cheap</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.contentContainer1}>
            <View style={styles.content1}>
              <Text style={styles.text4}>$30,000.00</Text>
              <Text style={styles.text5}>maximum amount</Text>
            </View>
            <View style={styles.content1}>
              <Text style={styles.text6}>0.20%</Text>
              <Text style={styles.text7}>Monthly Interest</Text>
            </View>
            <TouchableOpacity style={styles.opacity}>
              <Text style={styles.text8}>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.contentContainerAll}>
          <View style={styles.content}>
            <View style={styles.contentLeft}>
              <MaterialIcons style={styles.icons} name="inventory" size={15} />
              <Text style={styles.text1}>Operating loan</Text>
            </View>
            <View style={styles.btnCon}>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.text2}>Speed</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.contentContainer1}>
            <View style={styles.content1}>
              <Text style={styles.text4}>$2,000.00</Text>
              <Text style={styles.text5}>maximum amount</Text>
            </View>
            <View style={styles.content1}>
              <Text style={styles.text6}>0.10%</Text>
              <Text style={styles.text7}>Monthly Interest</Text>
            </View>
            <TouchableOpacity style={styles.opacity}>
              <Text style={styles.text8}>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.contentContainerAlls}>
          <View style={styles.content}>
            <View style={styles.contentLeft}>
              <MaterialIcons style={styles.icons} name="payments" size={15} />
              <Text style={styles.text1}>Repayment loan</Text>
            </View>
            <View style={styles.btnCon}>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.text2}>Fast</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.text2}>Cheap</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.contentContainer1}>
            <View style={styles.content1}>
              <Text style={styles.text4}>$50,000.00</Text>
              <Text style={styles.text5}>maximum amount</Text>
            </View>
            <View style={styles.content1}>
              <Text style={styles.text6}>0.5%</Text>
              <Text style={styles.text7}>Monthly Interest</Text>
            </View>
            <TouchableOpacity style={styles.opacity}>
              <Text style={styles.text8}>Apply</Text>
            </TouchableOpacity>
          </View>
                  </View>
              
            </View>
            </ScrollView>
  );
}
