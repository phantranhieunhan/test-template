import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ViewStyle,
  TextStyle,
  ImageSourcePropType,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Fonts, mainColors } from '../../constants';
import Ripple from 'react-native-material-ripple';
import { TextInputCustom } from '../userComponents/TextInputCustom';
import { BarCode, Box, Search, LOGOUTICON, ICONRIGHT } from '../../assets/index';
import { TextInput, Button, Card, Searchbar, IconButton } from 'react-native-paper';
import { IconSource } from 'react-native-paper/lib/typescript/components/Icon';

interface ItemsDetailCustom {
  onPressItem?: any;
  nameItem: string;
  quantityItem: string;
  titleItem: string;
  styleItem?: ViewStyle;
  index?: any;
  onPressDialog?: any;
  type?: string;
}

export const ItemsDetailCustom = (props: ItemsDetailCustom) => {
  const { onPressDialog, type, index, onPressItem, nameItem, quantityItem, titleItem, styleItem } =
    props;
  const onPress = () => {
    if (type == '5') {
      onPressDialog(index);
    } else {
      onPressItem;
    }
  };
  return (
    <Ripple style={[styles.item, styleItem]} onPressIn={onPress}>
      <Card style={{ width: '100%' }}>

        <View style={styles.header}>
          <View style={{ width: '80%' }}>
            <Text style={{ fontWeight: 'bold', fontSize: wp(4) }}>{nameItem} ( {quantityItem} )</Text>
          </View>
          <Image source={ICONRIGHT} style={{
            height: hp(5),
            width: wp(5),
            aspectRatio: 1,
            marginRight: 5,
          }}>

          </Image>
        </View>
        {titleItem ? (
          <View style={{ width: '100%', marginTop: 5, justifyContent: 'flex-start' }}>
            <Text style={{ fontSize: wp(3.5), fontWeight: '400', fontStyle: 'italic' }}>
              Ghi chú: {titleItem}
            </Text>
          </View>
        ) : (
          <View style={{ marginTop: 0 }}></View>
        )}
      </Card>
    </Ripple>
  );
};
const styles = StyleSheet.create({
  item: {
    marginVertical: hp(1.5),
    marginHorizontal: wp(0.5),
    flexDirection: 'column',
    borderRadius: 0.8,
    justifyContent: 'center',
    borderBottomColor: mainColors.smokecolor,
    borderBottomWidth: 1.2,
    marginLeft: 1,
    backgroundColor: 'white',
    marginRight: 1,
  },
  header: {
    marginBottom: hp(1.5),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
