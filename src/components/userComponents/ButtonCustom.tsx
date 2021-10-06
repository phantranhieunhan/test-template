import React, { useRef } from 'react';
import { MKColor, } from 'react-native-material-kit';
import { StyleSheet, Text, TextStyle, ViewStyle } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Fonts, mainColors } from '../../constants';
import Ripple from 'react-native-material-ripple';
import { TextInput, Button } from 'react-native-paper';
interface ButtonCustom {
  title: string;
  onPress: any;
  iconShow?: boolean
  style?: ViewStyle;
  titleStyle?: TextStyle;
}
export const ButtonCustom = (props: ButtonCustom) => {
  const { title, onPress, iconShow, style, titleStyle } = props;
  return (
    <Button style={[style, styles.MainContainer]} labelStyle={[titleStyle,styles.title]} mode='contained' onPress={onPress}>
      {title}
    </Button>
    //   <Ripple onPressIn={onPress} style={[styles.MainContainer, style]}>
    //   <Text style={[styles.title, titleStyle]}>{title}</Text>
    // </Ripple>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor:mainColors.greenscolor,
    borderRadius: wp(3),
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  title: {
    fontFamily: Fonts.Roboto_Slab_Regular,
    color: mainColors.whiteColor,
    fontSize: wp(4),
  },
});
