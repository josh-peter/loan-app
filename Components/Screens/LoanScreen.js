import React from 'react';
import { View, StyleSheet } from 'react-native';
import SecondContainer from '../Container/SecondContainer';
import HeaderComp from '../Header/Header';

export default function LoanScreen({navigation}) {
  return (
    <View>
      <HeaderComp navigation={navigation} />
          <SecondContainer />
     </View>
  );
}

const styles = StyleSheet.create({
    container: {
      padding:10,
    }
})