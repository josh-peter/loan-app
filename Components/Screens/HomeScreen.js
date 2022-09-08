import React from 'react';
import { View,StyleSheet} from 'react-native';
import HomeHeader from '../Header/HomeHeader';
import Footer from '../HomePage/Footer';
import HomepageAmount from '../HomePage/HompageAmount';
import MemberList from '../HomePage/MemberList';
import RecommendedLoan from '../HomePage/RecommendedLoan';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.homeScreen}>
          <HomeHeader />
          <HomepageAmount />
      <MemberList />
      <RecommendedLoan />
      <Footer navigation={navigation} />
     </View>
  );
}

const styles = StyleSheet.create({
    homeScreen: {
        paddingHorizontal: 0,
        width: '100%',
        height: '100%',
        backgroundColor: "#f1f2f6"
    },
});

