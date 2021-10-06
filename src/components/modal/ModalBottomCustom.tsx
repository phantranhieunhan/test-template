import React, {Children} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {EXITICON, BarCode, NOTFOUND} from '../../assets';
import {Image, SafeAreaView, TextInput} from 'react-native';
import Modal from 'react-native-modal';
import {View, StyleSheet, Text} from 'react-native';
import {Fonts, mainColors} from '../../constants';
import Ripple from 'react-native-material-ripple';
import {HeaderSearchCustom} from '../headerSearch/HeaderSearchCustom';
import {useNavigation} from '@react-navigation/native'

interface ModalBottomCustom {
  title: string;
  navigation?: any;
  children?: any;
  onPressClose: any;
  actionRight?: any;
}
export const ModalBottomCustom = (props: ModalBottomCustom) => {
  const {title, children, onPressClose, actionRight, navigation} = props;
  // console.log({navigation});
  return (
    <Modal style={{margin: 0}} isVisible={true}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View></View>
          <View>
            <Text
              style={{
                fontSize: hp(2.5),
                fontFamily: Fonts.Roboto_Stab_Bold,
                color: mainColors.blackColor,
                fontWeight: '700',
                textTransform: 'uppercase',
              }}>
              {title}
            </Text>
          </View>
          <Ripple onPressIn={onPressClose}>
            <Image source={EXITICON} style={{width: wp(5), height: wp(6.5)}} />
          </Ripple>
        </View>
        <SafeAreaView style={{flexDirection: 'column'}}>
          <HeaderSearchCustom
           onPressSearch={() => {}}/>
          <View style={{height: hp(36), backgroundColor: '#fff',justifyContent: 'center', alignItems: 'center',}}>
            <View>
              <Image
                source={NOTFOUND}
                style={{width: wp(20), height: wp(20)}}
              />
            </View>
            <View>
              <Text style={{color: '#cccccc', fontSize: 30, textAlign: 'center',fontWeight: '700',}}>Nhập số chứng từ hoặc quét QR | Barcode</Text>
            </View>
          </View>
        </SafeAreaView>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    height: '50%',
    marginTop: 'auto',
    backgroundColor: 'white',
  },
  header: {
    paddingHorizontal: hp(1.5),
    borderBottomWidth: 0.5,
    borderBottomColor: '#000',
    justifyContent: 'space-between',
    height: hp(6),
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  //group chứng từ
  containerCT: {
    height: hp(7),
    backgroundColor: '#65FFB7',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 5,
    flexDirection: 'row',
  },
  input: {
    flex: 2,
    height: hp(6),
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: '#000',
    borderRadius: 5,
  },
  viewgroupButton: {
    flexDirection: 'row',
    flex: 1,
    marginLeft: 5,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  ButtonSearch: {
    width: wp(17),
    height: wp(8),
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});
