import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
//import CodePush from 'react-native-code-push';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {LOGO, SOFTWAREVIETLOGO} from '../../assets';
import {mainColors} from '../../constants/Colors';
import {Fonts} from '../../constants/Fonts';
import {BackgroundBig} from '../../components/BackgroundBig';
import {SplashMain} from '../../components/SplashMain';
import Ripple from 'react-native-material-ripple';
import {ButtonCustom} from '../../components/userComponents/ButtonCustom';
import {TextInputCustom} from '../../components/userComponents/TextInputCustom';
import {configApi} from './config.logic';

const ConfigScreen = (props: any) => {
  const goBack = () => {
    props?.navigation?.goBack();
  };
  const {guidId, setGuidId, siteId, setSiteId, storeId, setStoreId, urlString, setUrlString, onPress} =
    configApi(props);
  const [isSplashVisible, setSplashVisible] = useState<boolean>(false);

  return (
    <BackgroundBig>
      <SplashMain isVisible={isSplashVisible} />
      <View style={styles.header}>
        <Ripple style={styles.iconBack} onPress={goBack}></Ripple>
        <Text style={styles.menuText}>Cài đặt</Text>
      </View>
      <ScrollView style={{backgroundColor: 'white', padding: 10}}>
        <TextInputCustom placeHolder="Địa chỉ tên miền URL" onChangeText={setUrlString} defaultValue={urlString}/>
        <TextInputCustom placeHolder="Mã công ty" onChangeText={setSiteId} defaultValue={siteId.toString()}/>
        <TextInputCustom placeHolder="Mã cửa hàng" onChangeText = {setStoreId} defaultValue={storeId}/>
      </ScrollView>
      <View style={{backgroundColor: 'white', padding: 10}}>
        <ButtonCustom
          title={'Cập nhật'}
          style={styles.btnConfirm}
          onPress={onPress}
        />
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
    width: wp(5),
    height: wp(5),
  },
  menuText: {
    color: mainColors.whiteColor,
    fontSize: wp(4.5),
    fontFamily: Fonts.Roboto_Slab_Regular,
  },
  btnConfirm: {
    width: wp(95),
    alignSelf: 'center',
    marginVertical: hp(1),
    height: hp(5),
    borderRadius: wp(1),
  },
});
export default ConfigScreen;
