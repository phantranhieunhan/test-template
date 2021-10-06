import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
//import CodePush from 'react-native-code-push';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {SkypeIndicator} from 'react-native-indicators';
import {LOGO, SOFTWAREVIETLOGO} from '../assets';
import {mainColors} from '../constants/Colors';
import {Fonts} from '../constants/Fonts';
import {BackgroundBig} from '../components/BackgroundBig';

export const SplashScreen = (props: any) => {
  return (
    <BackgroundBig>
      <View style={styles.container}>
        <Image source={LOGO} resizeMode={'contain'} style={styles.logoMain} />
        <Image source={SOFTWAREVIETLOGO}></Image>
        <Text style={styles.nameApp}>ORDER SHIPPING</Text>
        <View style={{height: hp('5'), paddingTop: hp('10')}}> 
          <SkypeIndicator color={mainColors.buttonHandling} size={wp('10')} />
        </View>
      </View>
    </BackgroundBig>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoMain: {
    width: wp('70'),
    height: wp('70'),
  },
  logoSoftwareviet: {
    width: wp('20'),
    height: wp('20')
  },
  indicator: {
    height: wp('10'),
    backgroundColor: 'pink',
  },
  nameApp:{
    fontFamily: Fonts.Roboto_Slab_Regular,
    color: mainColors.titleColor,
    fontSize: wp('10'),
  },
  syncMess: {
    bottom: 5,
    right: 5,
    position: 'absolute',
    color: mainColors.blackColor,
    fontFamily: Fonts.Roboto_Slab_Regular,
  },
});
export default SplashScreen;
