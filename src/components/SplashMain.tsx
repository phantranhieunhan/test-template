import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {SkypeIndicator} from 'react-native-indicators';
import Modal from 'react-native-modal';
import {mainColors} from '../constants/Colors';

interface SplashProperties {
    isVisible: boolean
}

export const SplashMain = (props: SplashProperties) => {
  return (
    <Modal style={styles.MainContainer} isVisible={props.isVisible}>
      <SkypeIndicator color={mainColors.mainColor} size={wp('10')} />
    </Modal>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
