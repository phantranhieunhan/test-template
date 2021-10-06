import React from 'react';
import { Image } from 'react-native';
import Modal from 'react-native-modal';
import { View, StyleSheet, Text } from 'react-native';
import { Fonts, mainColors } from '../../constants';
import { EXITICON, WAITINGINVOICEICON, Warring } from '../../assets'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { ButtonCustom } from '../../components';
import Ripple from 'react-native-material-ripple';
export const ModalCustom = (props: any) => {
  const { title, content, onPressClose, actionRight} = props;
  return (
    <Modal isVisible={true}>
      <View >
        <View style={styles.container1}>
          <View style={styles.header}>
            <Text style={{ fontSize: hp(2.5), fontFamily: Fonts.Roboto_Stab_Bold, color: mainColors.warningColor, }}>THÔNG BÁO</Text>
            <Image
              source={Warring}
              style={{ width: wp(5), height: wp(6.5) }}
            ></Image>
          </View>
          <View style={{ height: 2, backgroundColor: mainColors.greenscolor, }} ></View>
          <View style={styles.title}>
            <Text style={styles.content
            }>{title}</Text>
          </View>
          <View style={styles.title}>
            <Text style={styles.content1}>{content}</Text>
          </View>
          <View>
          </View>
          <View style={styles.bottom}>
            <Ripple onPressIn={onPressClose} style={{width:'50%',  alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{color:'black',fontSize:wp(4)}}>Hủy Bỏ</Text>
            </Ripple>
            <View style={{width:1,backgroundColor:'white'}}></View>
            <Ripple onPressIn={onPressClose} style={{width:'50%',  alignItems: 'center', justifyContent: 'center',}}>
            <Text style={{color:'white',fontSize:wp(4),}}>Xác Nhận</Text>
            </Ripple>
          </View>
        </View>
      </View>
    </Modal>
  )
};
const styles = StyleSheet.create({

  container1: {
    backgroundColor: mainColors.whiteColor,
    height: hp(30),
    borderRadius: wp(5),
    flexDirection: 'column',
  },
  header: {
    marginTop: 10,
    paddingLeft: 15,
    justifyContent: 'center',
    height: hp(5),
    flexDirection: 'row',
    alignContent: 'center',
  },
  title: {
    paddingLeft: 15,
    width: wp(80),
    alignSelf: 'center',
  },
  content: {
    color: mainColors.smokecolor,
    marginTop: 20,
    fontFamily: Fonts.Roboto_Slab_Light,
    textAlign: 'center',
    fontSize: hp(3),
  },
  content1: {
    color: mainColors.blackColor,
    marginTop: 20,
    fontFamily: Fonts.Roboto_Slab_Light,
    textAlign: 'center',
    fontSize: hp(2),
  },
  bottom: {
    flexDirection: 'row',
    borderRadius: wp(3),
    marginTop: 36,
    backgroundColor: mainColors.greenscolor,
    height: 45,
  },
  btnStyle: {
    backgroundColor: '#dfe6e9',
    alignItems: 'center',
    width: wp(40),
    alignSelf: 'center',
    marginTop: hp(1.5),
    paddingVertical: hp(0.5),
  },
  btnIconClose: {
    width: wp(5),
    height: wp(5),
    alignSelf: 'flex-end',
  },
});
