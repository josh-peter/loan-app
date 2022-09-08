import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HeaderComp from '../Header/Heading';
import InvitationBounty from '../InvitationBounty/InvitationBounty';
import InvitationCon from '../InvitationCon/InvitationCon';
import InvitationSets from '../InvitationSets/InvitationSet';

export default function InvationScreen({navigation}) {
  return (
    <View style={styles.container}>
      <HeaderComp navigation={navigation} />
          <InvitationCon />
          <InvitationBounty/>
          <InvitationSets/>
     </View>
  );
}

const styles = StyleSheet.create({
})