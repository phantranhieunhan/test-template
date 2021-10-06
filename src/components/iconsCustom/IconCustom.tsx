import React, { useRef } from 'react';
import { MKColor, } from 'react-native-material-kit';
import { StyleSheet, Text, TextStyle, ViewStyle } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Fonts, mainColors } from '../../constants';
import Ripple from 'react-native-material-ripple';

import { IconSource } from 'react-native-paper/lib/typescript/components/Icon';
import { TextInput, Button, Card, Searchbar, IconButton } from 'react-native-paper';
interface IconCustom {
  title: string;
  onPress: any;
  iconShow: boolean
  style?: ViewStyle;
  sourceICon?: IconSource;
  labelStyle?: ViewStyle;

}
export const IconCustom = (props: IconCustom) => {
  const { title, onPress, iconShow, style, sourceICon, labelStyle } = props;
  return (
    <Card>
    <Button labelStyle={[styles.title, labelStyle]} icon={iconShow == true ? sourceICon : ''} style={[styles.MainContainer, style]} mode='contained' onPress={onPress}>
      {title}
    </Button>
    </Card>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: 'white',
    borderRadius: wp(2),
    alignItems: 'center',
    justifyContent: 'center',
    color: mainColors.greenscolor,
    width: wp(50)
  },
  title: {
    fontFamily: Fonts.Roboto_Slab_Regular,
    color: 'black',
    fontSize: wp(2),
  },
});
