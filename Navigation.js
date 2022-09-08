import { StyleSheet, StatusBar } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./Components/Screens/HomeScreen";
import InvitationScreen from "./Components/Screens/InvitationScreen";
import LoanScreen from "./Components/Screens/LoanScreen";

const Navigation = () => {
  const stack = createStackNavigator();
  return (
    <>
      <StatusBar style="dark-content" />
      <NavigationContainer style={styles.container}>
        <stack.Navigator
          screenOptions={{ header: () => null }}
          initialRouteName="HomeScreen"
        >
          <stack.Screen name="HomeScreen" component={HomeScreen} />
          <stack.Screen name="InvitationScreen" component={InvitationScreen} />
          <stack.Screen name="LoanScreen" component={LoanScreen} />
        </stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Navigation;

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingHorizontal: 20,
          backgroundColor: "#f1f2f6"
      }, 
});
