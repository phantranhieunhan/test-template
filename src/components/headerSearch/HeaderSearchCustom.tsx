import React from 'react'
import { View, StyleSheet, Text, Image, ViewStyle, TextStyle } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Fonts, mainColors } from '../../constants';
import Ripple from 'react-native-material-ripple';

import { BarCode, Box, Search, LOGOUTICON } from '../../assets/index';
import { TextInput, Button, Card, Searchbar } from 'react-native-paper';
import {useNavigation} from '@react-navigation/native'
interface HeaderSearchCustom {
  onScanSuccess ? (barCode): any;
  onPressSearch: any;
  value?: any;
  _onChangeText?: any;
  style?: ViewStyle;
  titleStyle?: TextStyle;
  onPressBarCode?:any
}
export const HeaderSearchCustom = (props: HeaderSearchCustom) => {
  const { onScanSuccess, value, onPressBarCode,style, titleStyle, onPressSearch, _onChangeText } = props
  const navigation = useNavigation();
  return (
    <View style={styles.view}>
      <View style={styles.headertabview}>
        <View style={{ height: hp(6.8), borderRadius: 3, justifyContent: 'center', width: wp(60) }}>
          <Searchbar
            icon={Search}
            style={{ alignItems: 'center', justifyContent: 'center', width: '100%' }}
            inputStyle={{ fontSize: wp(3.5) }}
            placeholder="Số Chứng Từ"
            onChangeText={_onChangeText}
            value={value}
          />
        </View>
     
        <View style={styles.headertabview_iconsearch}>
          <Ripple onPressIn={onPressBarCode} style={{ height: hp(5), width: wp(12), justifyContent: 'center', alignItems: 'center' }}>
            <Image source={BarCode} style={{ aspectRatio: 1, height: hp(4), width: wp(12) }}></Image>
          </Ripple>
          <Ripple onPressIn={onPressSearch} style={{ backgroundColor: '#057DC0', height: hp(5), borderRadius: 5, width: wp(20), justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: wp(3.5), color: 'white' }}>Tìm</Text>
          </Ripple>
        </View>
      </View>
      <View style={{ backgroundColor: 'black', height: 1.5 }}></View>
    </View>
  );

}
const styles = StyleSheet.create({
  view: {
    flexDirection: 'column',
    marginBottom: 10,
  },
  headertabview: {
    margin: 3,

    flexDirection: 'row',
    height: hp(7.7),
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headertabview_iconsearch: {
    paddingRight: 5,
    width: wp(35),
    height: hp(6.8),
    backgroundColor: '#fff',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 5,

  },
  item: {
    paddingLeft: 2,
    paddingRight: 2,
    marginTop: 2,
    flexDirection: 'column',
    borderColor: 'black',
    borderWidth: 1,
    height: hp(20),
    borderRadius: 2
  }

})

