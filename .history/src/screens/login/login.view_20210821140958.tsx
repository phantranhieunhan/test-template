import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Image, ScrollView} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {BackgroundBig, ButtonCustom} from '../../components';
import {TextInputCustom} from '../../components/userComponents';
import {Fonts} from '../../constants';
import {LOGO} from '../../assets';
import {actionMain} from '../../utils';
const Login = (props: any) => {
  const [userName, setUserName] = useState('');
  const [pass, setPass] = useState('');
  const [txtErrorUser, setTxtErrorUser] = useState(null);
  const [txtErrorPass, setTxtErrorPass] = useState(null);
  const {signIn, profileInfo, getListArea, getMenu, listArea, listMenu} = props;
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
  const onPress = () => {
    if (!userName) {
      return setTxtErrorUser('Tài khoản không được để trống');
    }
    if (!pass) {
      return setTxtErrorPass('Mật khẩu không được để trống');
    }
    const dataLogin = {
      username: userName,
      password: pass,
    };
    actionMain.loading(true);
    signIn(dataLogin);
  };
  useEffect(() => {
    if (profileInfo) {
      const data = {site: profileInfo?.siteId, store: profileInfo?.storeId};
      getListArea(data);
      getMenu(data);
    }
    return () => {
      
    }
  }, [profileInfo]);
  
  useEffect(() => {});
  return (
    <BackgroundBig>
      <ScrollView>
        <View style={styles.MainContainer}>
          <Image
            source={LOGO}
            style={styles.iconMain}
            resizeMode={'contain'}
          />
          <TextInputCustom
            style={styles.topSpace}
            placeHolder={'Tài khoản'}
            onChangeText={onChangeUser}
            txtError={txtErrorUser}
          />
          <TextInputCustom
            style={styles.topSpace}
            placeHolder={'Mật khẩu'}
            onChangeText={onChangePass}
            secureTextEntry={true}
            txtError={txtErrorPass}
          />
          <ButtonCustom
            style={styles.button}
            onPress={onPress}
            title={'Đăng nhập'}
          />
        </View>
      </ScrollView>
    </BackgroundBig>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: wp('70'),
    height: hp('40'),
  },
  topSpace: {
    // marginTop: hp('4')
  },
  button: {
    width: wp('80'),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp('4'),
    height: hp('6'),
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
});
const mapStateFromProps = (state: any) => {
  return {
    token: state.auth.token,
    profileInfo: state.auth.profileInfo,
    listArea: state.systems.listArea,
    listMenu: state.systems.listMenu,
  };
};
export default Login;
