
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image, ScrollView, FlatList, Modal, Platform , BackHandler, ToastAndroid, Alert} from 'react-native';
//import CodePush from 'react-native-code-push';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { LOGO, SOFTWAREVIETLOGO } from '../../assets';
import { mainColors } from '../../constants/Colors';
import { Fonts } from '../../constants/Fonts';
import { BackgroundBig } from '../../components/backgroundScreen/BackgroundBig';
import { SplashMain } from '../../components/SplashMain';
import Ripple from 'react-native-material-ripple';
import { ButtonCustom } from '../../components/userComponents/ButtonCustom';
import { TextInputCustom } from '../../components/userComponents/TextInputCustom';
import { configApi } from './config.logic';
import { ModalCustom } from '../../components/modal';
import { DialogError } from '../../components/modal/DialogError';
import Toast from 'react-native-toast-message';

const ConfigScreen = (props: any) => {
  const [VisbleDialogError, setVisbleDialogError] = useState(false);
  const goBack = () => {
    props?.navigation?.goBack();
  };
  const [exitApp, setExitApp] = useState(0);
  const {
    guidId,
    setGuidId,
    siteId,
    setSiteId,
    storeId,
    setStoreId,
    urlString,
    setUrlString,
    onPress,
    onPressBack,
  } = configApi(props);
  const onTextChangeURL = (value: any) => {
    if (value == '') {
      setUrlString('');
    } else {
      setUrlString(value);
    }
  };
  const onTextChangeSite = (value: any) => {
    if (value == '') {
      setSiteId('');
    } else {
      setSiteId(value);
    }
  };
  const onTextChangStore = (value: any) => {
    if (value == '') {
      setStoreId('');
    } else {
      setStoreId(value);
    }
  };
  const backAction = () => {
    // setTimeout(() => {
    //   setExitApp(0);
    // }, 2000);

    // if (exitApp === 0) {
    //   setExitApp(exitApp + 1);

    //   ToastAndroid.show('Bấm lần nữa để thoát ứng dụng', ToastAndroid.SHORT);
    // } else if (exitApp === 1) {
    //   BackHandler.exitApp();
    // }
    Alert.alert(
      'Thoát ứng dụng',
      'Bạn muốn thoát khỏi ứng dụng?', [{
          text: 'Hủy',
          onPress: () =>{},
          style: 'cancel'
      }, {
          text: 'Đồng ý',
          onPress: () => BackHandler.exitApp()
      }, ], {
          cancelable: false
      }
   )
    return true;
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
}, []);
  return (
    <BackgroundBig>
      <Toast style={{ zIndex: 100 }} position={'bottom'} ref={(ref) => Toast.setRef(ref)} />
      <View style={{ backgroundColor: 'white', flex: 1, justifyContent: 'center' }}>
        <View
          style={{
            width: wp(100),
            alignItems: 'center',
          }}
        >
          <Image source={LOGO} style={styles.iconMain} resizeMode={'contain'} />
          <Text
            style={{ color: 'red', fontSize: hp('3.5'), fontFamily: Fonts.Roboto_Slab_Regular }}
          >
            {' '}
            Đăng Nhập Cấu Hình
          </Text>
        </View>
        <View style={{ padding: 10 }}>
          <TextInputCustom
            placeHolder='Địa chỉ tên miền URL'
            onChangeText={onTextChangeURL}
            titileInput=''
          />
          <TextInputCustom placeHolder='Mã công ty' onChangeText={onTextChangeSite} />
          <TextInputCustom placeHolder='Mã cửa hàng' onChangeText={onTextChangStore} />
        </View>
        <View style={{ padding: 10 }}>
          <Ripple
            onPress={onPress}
            style={[
              styles.backgroudButton,
              Platform.OS == 'ios' ? styles.shadowIos : styles.shadowAndroid,
            ]}
          >
            <Text style={styles.textButton}>Xác nhận</Text>
          </Ripple>
          <Ripple
            onPress={onPressBack}
            style={[
              styles.backgroudButtonHuy,
              Platform.OS == 'ios' ? styles.shadowIos : styles.shadowAndroid,
            ]}
          >
            <Text style={styles.textButtonHuy}>Hủy bỏ</Text>
          </Ripple>
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
  header: {
    backgroundColor: '#3E8A4F',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: wp(3),
    paddingVertical: hp(2),
  },
  iconBack: {
    color: 'white',
    width: wp(5),
    height: wp(5),
  },
  menuText: {
    color: mainColors.whiteColor,
    fontSize: wp(5.5),
    fontFamily: Fonts.Roboto_Slab_Regular,
  },
  btnConfirm: {
    color: mainColors.greenscolor,
    width: wp(95),
    alignSelf: 'center',
    marginVertical: hp(1),
    height: hp(6),
    borderRadius: wp(1),
  },
  btnExit: {
    width: wp(95),
    alignSelf: 'center',
    marginVertical: hp(1),
    height: hp(6),
    borderRadius: wp(1),
    backgroundColor: mainColors.smokecolor,
  },
  iconMain: {
    width: wp(40),
    height: wp(40),
    marginTop: hp(1),
  },
  backgroudButton: {
    marginBottom: 10,
    height: 45,
    backgroundColor: mainColors.greenscolor,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 15,
    paddingHorizontal: 25,
    marginVertical: 10,
  },
  backgroudButtonHuy: {
    // borderColor:'#ca0000',
    // borderWidth:2,
    marginBottom: 10,
    height: 45,
    backgroundColor: mainColors.smokecolor,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 15,
    paddingHorizontal: 25,
    marginVertical: 10,
  },
  shadowAndroid: {
    elevation: 5,
  },
  shadowIos: {
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.21,
    shadowRadius: 4,
  },
  textButton: {
    color: '#fff',
    fontSize: 17,
  },
  textButtonHuy: {
    color: '#333',
    fontSize: 17,
  },
});
export default ConfigScreen;
