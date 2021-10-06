import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ViewStyle,
  TextStyle,
  ImageSourcePropType,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Fonts, mainColors } from '../../constants';
import Ripple from 'react-native-material-ripple';
import { TextInputCustom } from '../userComponents/TextInputCustom';
import { BarCode, Box, Search, LOGOUTICON, Phone, Cancel, Check } from '../../assets/index';
import { Button, Card, Searchbar, IconButton } from 'react-native-paper';
import { IconSource } from 'react-native-paper/lib/typescript/components/Icon';
import { IconDetailCustom } from '../iconsCustom/IconDetailCustom';

interface DialogAccpetOrder {
  onPressAcpect: any;
  onPressClose: any;
  title: string;
  noteOrder: string;
  quanlitiPut: string;
  quanlitiTake: string;
  noteUser: string;
  onTextChange?: any;
  onTextTakeChange?: any;
}

export const DialogAccpetOrder = (props: DialogAccpetOrder) => {
  const {
    onPressAcpect,
    onTextTakeChange,
    onPressClose,
    onTextChange,
    title,
    noteOrder,
    quanlitiPut,
    quanlitiTake,
    noteUser,
  } = props;
  return (
    <KeyboardAvoidingView
      behavior='padding'
      enabled
      style={{
        height: hp(100),
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
      }}
    >
      <View style={styles.containerBig}>
        <View style={styles.container}>
          <View
            style={{
              backgroundColor: mainColors.greenscolor,
              width: '100%',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}
          >
            <Text
              style={{
                fontSize: wp(5),
                fontWeight: 'bold',
                margin: 10,
                textAlign: 'center',
                color: '#fff',
              }}
            >
              {title}
            </Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'column',
              justifyContent: 'space-around',
              backgroundColor: '#fff',
              flex: 1,
              width: '100%',
              paddingBottom: hp(2),
            }}
          >
            {noteOrder ? (
              <View style={{ backgroundColor: '#fff', width: '100%', alignItems: 'center' }}>
                <Text
                  style={{ fontSize: wp(4), fontWeight: '400', margin: 10, fontStyle: 'italic' }}
                >
                  Ghi chú: {noteOrder}
                </Text>
              </View>
            ) : (
              <View />
            )}
            <View style={styles.header1}>
              <View style={styles.header1_view}>
                <View
                  style={{
                    width: wp(20),
                    height: hp(6),
                    borderEndWidth: 1,
                    borderEndColor: 'black',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Text style={{ fontSize: wp(4), fontWeight: 'bold', color: mainColors.blue }}>
                    SL Đặt
                  </Text>
                </View>
                <View
                  style={{
                    width: wp(30),
                    height: hp(6),

                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Text style={{ fontSize: wp(4), fontWeight: 'bold', color: mainColors.blue }}>
                    {quanlitiPut}
                  </Text>
                </View>
                <View
                  style={{
                    width: wp(20),
                    height: hp(6),
                    borderStartWidth: 1,
                    borderStartColor: 'black',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Text style={{ fontSize: wp(4), fontWeight: 'bold', color: mainColors.blue }}>
                    Gói
                  </Text>
                </View>
              </View>
              <View style={styles.header1_view}>
                <View
                  style={{
                    width: wp(20),
                    height: hp(6),
                    borderEndWidth: 1,
                    borderEndColor: 'black',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Text style={{ fontSize: wp(4), fontWeight: 'bold', color: mainColors.blue }}>
                    SL Nhận
                  </Text>
                </View>
                <View
                  style={{
                    width: wp(30),
                    height: hp(5),
                    paddingTop: wp(1.4),
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <TextInput
                    keyboardType={'numeric'}
                    onChangeText={onTextTakeChange}
                    defaultValue={quanlitiTake}
                    style={{
                      backgroundColor: 'white',
                      height: hp(4),
                      width: wp(15),
                      borderRadius: 5,
                      fontSize: wp(4),
                      fontWeight: 'bold',
                      color: mainColors.blue,
                      borderColor: mainColors.blackColor,
                      borderWidth: 1,
                      padding: 0,
                      textAlign: 'center',
                    }}
                  ></TextInput>
                </View>
                <View
                  style={{
                    width: wp(20),
                    height: hp(6),
                    borderStartWidth: 1,
                    borderStartColor: 'black',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Text style={{ fontSize: wp(4), fontWeight: 'bold', color: mainColors.blue }}>
                    Gói
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.header2}>
              <TextInput
                multiline={true}
                placeholder={noteUser}
                onChangeText={onTextChange}
                style={{
                  fontSize: wp(4),
                  width: wp(75),
                  height: hp(18),
                  backgroundColor: 'white',
                  textAlign: 'left',
                  textAlignVertical: 'top',
                  padding: 0,
                  paddingTop: 5,
                  paddingLeft: 5,
                  color: mainColors.blackColor,
                }}
              ></TextInput>
            </View>
            <View style={styles.header3}>
              <IconDetailCustom
                iconShow={true}
                onPress={() => onPressClose()}
                labelStyle={{ color: mainColors.whiteColor, fontSize: wp(4) }}
                title={'Thoát'}
                sourceICon={Cancel}
                style={{
                  width: wp(30),
                  height: hp(6),
                  borderRadius: 15,
                  backgroundColor: mainColors.smokecolor,
                }}
              ></IconDetailCustom>
              <IconDetailCustom
                iconShow={true}
                onPress={() => onPressAcpect()}
                labelStyle={{ color: mainColors.blackColor, fontSize: wp(4) }}
                title={'Lưu'}
                sourceICon={Check}
                style={{
                  width: wp(30),
                  height: hp(6),
                  borderRadius: 15,
                  backgroundColor: mainColors.greenscolor,
                }}
              ></IconDetailCustom>
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
    width: '100%',
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  container: {
    height: hp(63),
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: 'column',
    backgroundColor: 'white',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
  },
  header1: {
    width: wp(70),
    height: hp(15),
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
    borderColor: 'black',
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
