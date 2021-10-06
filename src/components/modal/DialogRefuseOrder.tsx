
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ViewStyle,
  TextStyle,
  ImageSourcePropType,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Fonts, mainColors} from '../../constants';
import Ripple from 'react-native-material-ripple';
import {TextInputCustom} from '../userComponents/TextInputCustom';
import {
  BarCode,
  Box,
  Search,
  LOGOUTICON,
  Phone,
  Cancel,
  Check,
} from '../../assets/index';
import {Button, Card, Searchbar, IconButton} from 'react-native-paper';
import {IconSource} from 'react-native-paper/lib/typescript/components/Icon';
import {IconDetailCustom} from '../iconsCustom/IconDetailCustom';
import Toast from 'react-native-toast-message';
interface DialogRefuseOrder {
  onPressAcpect: any;
  onPressClose: any;
  onTextChange?: any;
}
export const DialogRefuseOrder = (props: DialogRefuseOrder) => {
  const {onPressAcpect, onPressClose, onTextChange} = props;
  return (
      <KeyboardAvoidingView
        behavior="padding"
        enabled
        style={{
          height: hp(100),
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
        }}>
          <View style={styles.containerBig}>
          <View style={styles.container}>
          <View style={{backgroundColor:mainColors.greenscolor, width:'100%',borderTopLeftRadius: 20, borderTopRightRadius: 20,}}>
            <Text
              style={{
                fontSize: wp(5),
                fontWeight: 'bold',
                margin: 10,
                textAlign: 'center',
                color:'#fff'
              }}>
              Từ Chối Đơn Hàng
            </Text>
          </View>
          <View style={{backgroundColor:'#fff', flex:1, width:'100%', alignItems:'center', justifyContent:'space-around'}}>
          <View style={styles.header2}>
            <TextInput
              multiline={true}
              onChangeText={onTextChange}
              placeholder={'Nhập Lí Do Từ Chối'}
              style={{
                fontSize: wp(4),
                width: '100%',
                height: '100%',
                backgroundColor: '#fff',
                textAlign: 'left',
                textAlignVertical :'top',
                color:mainColors.blackColor,
                padding: 0,
                paddingTop:5,
                paddingLeft: 5,
              }}></TextInput>
          </View>
            <View style={styles.header3}>
              <IconDetailCustom
                iconShow={true}
                onPress={() => {
                  onPressClose();
                }}
                labelStyle={{color: mainColors.whiteColor, fontSize: wp(4)}}
                title={'Hủy'}
                sourceICon={Cancel}
                style={{
                  width: wp(30),
                  height: hp(6),
                  borderRadius: 5,
                  backgroundColor: mainColors.smokecolor,
                }}></IconDetailCustom>
              <IconDetailCustom
                iconShow={true}
                onPress={() => {
                  onPressAcpect();
                }}
                labelStyle={{color: mainColors.blackColor, fontSize: wp(4)}}
                title={'Xác Nhận'}
                sourceICon={Check}
                style={{
                  width: wp(30),
                  height: hp(6),
                  borderRadius: 5,
                  backgroundColor: mainColors.greenscolor,
                }}></IconDetailCustom>
            </View>
          </View>
        </View>
      
          </View>
      </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  containerBig: {
    alignItems: 'stretch',
    width:'100%',
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  container: {
    marginHorizontal:1,
    height: hp(50),
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
  },
  header1: {
    width: wp(70),
    height: hp(7),

    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header1_view: {
    width: wp(70),
    height: hp(6),
    borderRadius: 15,
    borderColor: 'black',
    borderWidth: 1,
    flexDirection: 'row',
    margin: 8,
  },
  header2: {
    margin: 10,
    width: wp(80),
    height: hp(20),
    borderColor: '#555',
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'center',
    padding: 3,
  },
  header3: {
    width: wp(80),
    height: hp(8),
    margin: 8,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
