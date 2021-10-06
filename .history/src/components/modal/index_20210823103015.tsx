import React from 'react';
import { Image } from 'react-native';
import Modal from 'react-native-modal';
import {View, StyleSheet, Text} from 'react-native';
import {Fonts, mainColors} from '../../constants';
import {EXITICON} from '../../assets'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {ButtonCustom} from '../../components';
import Ripple from 'react-native-material-ripple';
export const ModalCustom = (props: any) => {
  const {title, content, onPressClose, actionRight} = props;
  return (
    <Modal isVisible={true}>
      <View style={styles.container}>
        <Ripple style={styles.btnIconClose} onPress={onPressClose}>
          <Image
            source={EXITICON}
            style={{width: wp(5)}}
          />
        </Ripple>
        <Image
            source={EXITICON}
            style={{width: wp(7)}}
          />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content}>{content}</Text>
        <ButtonCustom
          title={'Đóng'}
          style={styles.btnStyle}
          onPress={actionRight}
        />
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: mainColors.whiteColor,
    paddingHorizontal: wp(3),
    paddingVertical: hp(1),
    borderRadius: wp(1),
  },
  title: {
    color: mainColors.blackColor,
    fontSize: wp(5),
    alignSelf: 'center',
    fontFamily: Fonts.Roboto_Stab_Bold,
  },
  content: {
    color: mainColors.blackColor,
    marginTop: hp(1),
    fontFamily: Fonts.Roboto_Slab_Regular,
    textAlign: 'center',
    fontSize: wp(4),
  },
  btnStyle: {
    backgroundColor: '#C1C1C1',
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
