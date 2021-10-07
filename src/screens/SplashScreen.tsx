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
import {BackgroundBig} from '../components/backgroundScreen/BackgroundBig';
import CodePush from 'react-native-code-push';
import { useDispatch } from 'react-redux';

export const SplashScreen = (props: any) => {
  const [label, setLabel] = useState('');
    const [syncMessage, setSyncMessage] = useState('');
  const [codePushSuccess, setCodePushSuccess] = useState(false);
  const dispatch = useDispatch();

    const loadingApp = () => {
        setCodePushSuccess(true);
      };
    const codePushStatusDidChange = (syncStatus: any) => {
        switch (syncStatus) {
          case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
            setSyncMessage('check update');
            break;
          case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
            setSyncMessage('downloading package');
            break;
          case CodePush.SyncStatus.AWAITING_USER_ACTION:
            setSyncMessage('awaiting user action');
            break;
          case CodePush.SyncStatus.INSTALLING_UPDATE:
            setSyncMessage('installing update');
            break;
          case CodePush.SyncStatus.UPDATE_IGNORED:
            setSyncMessage('update cancelled by user');
            loadingApp();
            break;
          case CodePush.SyncStatus.UPDATE_INSTALLED:
            setSyncMessage('update installed and will be applied on restart');
            // a = setTimeout(() => {
              CodePush.restartApp();
            // }, 300);
            break;
          case CodePush.SyncStatus.UNKNOWN_ERROR:
            setSyncMessage('an unknown error occurred');
            loadingApp();
            break;
          case CodePush.SyncStatus.UP_TO_DATE:
          default:
            setSyncMessage('ɚ 0.9');
            loadingApp();
            break;
        }
      };
      useEffect(() => {
        CodePush.sync(
          {
            // deploymentKey:"a7R2PY-TRgT0kgfsd8V0sieBW0Fx9jKRcYLwi"//android staging
            deploymentKey:"t9Qyfw8jNzqsIQgh3k5rb1Sh1a3K24vMGLqoe"//ios STAGING
          },
          codePushStatusDidChange, null
        );
        return ()=>{
          // clearTimeout(a)
        }
      }, []);
      useEffect(() => {
        if (codePushSuccess) {
          dispatch({type: 'SET_SPLASHLOAD', payload: false});
       }
      }, [codePushSuccess]);
  return (
    <BackgroundBig>
      <View style={styles.container}>
        <Image source={SOFTWAREVIETLOGO} resizeMode={'contain'} style={styles.logoMain} />
        <Image source={SOFTWAREVIETLOGO}></Image>
        <Text style={styles.nameApp}>ORDER SHIPPING</Text>
        <View style={{height: hp('5'), paddingTop: hp('10')}}> 
          <SkypeIndicator color={mainColors.buttonHandling} size={wp('10')} />
        </View>
      </View>
      <Text style={{position: 'absolute', bottom: 2, right: 2}}>{syncMessage}</Text>
    </BackgroundBig>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'white'
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
