import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  ToastAndroid,
  Platform,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useDispatch, useSelector } from 'react-redux';
import { BackgroundBig, ButtonCustom } from '../../components';
import { TextInputCustom } from '../../components/userComponents';
import Ripple from 'react-native-material-ripple';
import { Fonts } from '../../constants';
import { SOFTWAREVIETLOGO, LOGO, EYE_HIDE, EYE_SHOW, ICONFINGERPRINT } from '../../assets';
import TouchID from 'react-native-touch-id';
import Toast from 'react-native-toast-message';
import { actionMain } from '../../utils/mainActions';
import { login } from '../../services/login';
import { mainColors } from '../../constants/Colors';
const Login = (props: any) => {
  const [userName, setUserName] = useState('');
  const [pass, setPass] = useState('');
  const [CheckDevice, SetCheckDevice] = useState(2);
  const [txtErrorUser, setTxtErrorUser] = useState(null);
  const [txtErrorPass, setTxtErrorPass] = useState(null);
  const [hidePassword, setHidePassword] = useState(true);

  const { isFinger, profileInfo } = useSelector((state: any) => ({
    isFinger: state.auth.isFinger,
    profileInfo: state.auth.profileInfo,
  }));
  const dispatch = useDispatch();

  const onChangeUser = (value: any) => {
    if (!!value) {
      setTxtErrorUser('');
    } else {
      setTxtErrorUser('Tài khoản không được để trống');
    }
    setUserName(value);
  };
  const onChangePass = (value: any) => {
    if (!!value) {
      setTxtErrorPass('');
    } else {
      setTxtErrorPass('Mật khẩu không được để trống');
    }
    setPass(value);
  };
  const _changeShowHidePass = () => {
    if (hidePassword) {
      setHidePassword(false);
    } else {
      setHidePassword(true);
    }
  };
  const onPress = async () => {
    if (!pass || !userName) {
      // return setTxtErrorPass('Mật khẩu không được để trống');
      Toast.show({
        type: 'error',
        text1: 'Tài khoản hoặc mật khẩu bị rỗng!',
      });
    } else if (pass && userName) {
      let result = await login(userName, pass);
      let data = result.data;
      if (data) {
        if (data.StatusID == 1) {
          delete data.User.Password;
          dispatch({ type: 'SIGN_IN_SUCCESS', payload: data.User });
        } else {
          actionMain.showModalWarm({
            status: true,
            title: 'Đăng Nhập Thất Bại',
            content: 'Sai khoản hoặc mật khẩu!',
          });
        }
      }
    }
  };
  const CheckTouchID = () => {
    TouchID.authenticate('Quét Vân Tay', optionalConfigObject)
      .then((success) => {
        Toast.show({
          type: 'success',
          text1: 'Thành Công  👋',
        });
        setTimeout(() => {
          dispatch({ type: 'SIGN_IN_SUCCESS', payload: profileInfo });
        }, 700);
      })
      .catch((error) => {
        Toast.show({
          type: 'error',
          text1: 'Không Thành Công 👋',
        });
      });
  };
  const onPressBack = async () => {
    dispatch({ type: 'CLEAR_CONFIG' });
  };
  const CheckBegin = () => {
    if (CheckDevice == 2) {
      if (isFinger == false) {
        console.log(1);
      }
    } else {
      //  dispatch({ type: 'SET_FINGER', payload: false });
    }
  };
  const optionalConfigObject = {
    unifiedErrors: false, // use unified error messages (default false)
    passcodeFallback: false, // if true is passed, itwill allow isSupported to return an error if the device is not enrolled in touch id/face id etc. Otherwise, it will just tell you what method is supported, even if the user is not enrolled.  (default false)
  };
  TouchID.isSupported(optionalConfigObject)
    .then((biometryType) => {
      // Success code IOS
      if (biometryType === 'FaceID') {
        // Toast.show({
        //   type: 'success',
        //   text1: 'Điện Thoại Hỗ Trợ FaceID 🙂',
        let a = 2;
        SetCheckDevice(a);

        // });
      } else if (biometryType === 'TouchID') {
        // Toast.show({
        //   type: 'success',
        //   text1: 'Điện Thoại Hỗ Trợ Vân Tay 👋',
        let a = 2;
        SetCheckDevice(a);
        // });
      } else if (biometryType === true) {
        // Toast.show({
        //   type: 'success',
        //   text1: 'Điện Thoại Hỗ Trợ Vân Tay 👋',
        let a = 2;
        SetCheckDevice(a);
        // });
      } else {
        // Toast.show({
        //   type: 'error',
        //   text1: 'Điện Thoại Không Hỗ Trợ Vân Tay 👋',
        let a = 1;
        SetCheckDevice(a);
        // });
      }
    })
    .catch((error) => {
      // Toast.show({
      //   type: 'error',
      //   text1: 'Điện Thoại Không Hỗ Trợ Vân Tay 👋',
      let a = 1;
      SetCheckDevice(a);
      // });
    });

  useEffect(() => {
    setUserName('');
    setPass('');
    CheckBegin();
    return () => {};
  }, []);

  return (
    <BackgroundBig>
      <ScrollView>
        <View style={styles.MainContainer}>
          <Image source={SOFTWAREVIETLOGO} style={styles.iconMain} resizeMode={'contain'} />
          <Text style={{ color: 'red', fontSize: hp('3') }}> Đăng Nhập Tài Khoản</Text>
          <TextInputCustom
            style={styles.topSpace}
            placeHolder={'Tài khoản'}
            onChangeText={onChangeUser}
            txtError={txtErrorUser}
            defaultValue={userName}
          />
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: hp('1'),
            }}
          >
            <TextInputCustom
              style={{ marginTop: 0 }}
              placeHolder={'Mật khẩu'}
              onChangeText={onChangePass}
              secureTextEntry={hidePassword}
              txtError={txtErrorPass}
              defaultValue={pass}
            />
            {pass ? (
              <Ripple
                style={{ position: 'absolute', right: 5, top: '42.5%', zIndex: 10 }}
                onPress={_changeShowHidePass}
              >
                {!hidePassword ? (
                  <Image source={EYE_HIDE} style={styles.iconshowhidepass} />
                ) : (
                  <Image source={EYE_SHOW} style={styles.iconshowhidepass} />
                )}
              </Ripple>
            ) : (
              <View />
            )}
          </View>
          {/* {isFinger == true ? (
            <View
              style={[{
                marginTop: hp('4'),
                width: '100%',
                height: hp('6'),
                backgroundColor: mainColors.greenscolor,
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingRight:wp(2),
                flexDirection: 'row',
                borderRadius: 15,
              },
              Platform.OS == 'ios' ? styles.shadowIos : styles.shadowAndroid,
            ]}
            >
              <Ripple
                onPress={onPress}
                style={[styles.backgroudButton0,Platform.OS == 'ios' ? styles.shadowIos : styles.shadowAndroid,]}>
                <Text style={styles.textButton}>Đăng nhập</Text>
              </Ripple>
              <Ripple
                onPressIn={() => {
                  CheckTouchID();
                }}
              >
                <Image style={styles.ImageBT} source={ICONFINGERPRINT} />
              </Ripple>
            </View>
          ) : ( */}
            <Ripple
              onPress={onPress}
              style={[
                styles.backgroudButton,
                Platform.OS == 'ios' ? styles.shadowIos : styles.shadowAndroid,
              ]}
            >
              <Text style={styles.textButton}>Đăng nhập</Text>
            </Ripple>
          {/* )} */}
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
      </ScrollView>
      <Toast
        style={{ backgroundColor: 'white' }}
        position={'bottom'}
        ref={(ref) => Toast.setRef(ref)}
      />
    </BackgroundBig>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    width: wp('100'),
    padding: 20,
    height: hp('100'),
  },
  image: {
    width: wp('70'),
    height: hp('40'),
  },
  topSpace: {
    marginTop: hp('2'),
  },
  button: {
    width: wp('50'),
    alignItems: 'center',
    justifyContent: 'center',

    height: hp('6'),
  },
  button2: {
    width: wp('80'),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp('4'),
    height: hp('6'),
  },
  button1: {
    width: wp('80'),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp('4'),
    height: hp('6'),
    backgroundColor: '#dfe6e9',
  },

  txtInButton: {
    fontFamily: Fonts.Roboto_Slab_Regular,
    color: '#FDFEFF',
  },
  iconMain: {
    width: wp(40),
    height: wp(40),
    marginTop: hp(8),
  },
  iconshowhidepass: {
    width: wp(7),
    height: wp(7),
  },
  backgroudButton0: {
    backgroundColor: mainColors.greenscolor,
    width: wp(78),
    height: hp('6'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:15,
    borderEndWidth:1,
    borderColor:mainColors.blackColor,
  },
  backgroudButton: {
    marginTop: hp('4'),
    width: '100%',
    marginBottom: 10,
    height: hp('6'),
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
    marginTop: hp('3'),
    width: '100%',
    marginBottom: 10,
    height: hp('6'),
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
  ImageBT: {
    height: wp(8),
    width: wp(8),
  },
});

export default Login;
