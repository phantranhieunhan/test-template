import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
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

interface DialogError {
  content?: string;
  title: string;
  onPressClose: any;
  colorHeader: string;
}

export const DialogError = (props: DialogError) => {
  const { title, onPressClose, content, colorHeader } = props;
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={styles.containerItem}>
          <View style={[styles.headerView, {backgroundColor: colorHeader}]}>
            <Text style={styles.headerTitle}>{title}</Text>
          </View>
          <View style={styles.bodypu}>
            <Text style={[styles.label,{color: colorHeader}]}>{content}</Text>
          </View>
          <View style={styles.viewBottomButton}>
            <TouchableOpacity
              style={[
                styles.button, {borderColor: colorHeader},
                Platform.OS == 'ios' ? styles.shadowIos : styles.shadowAndroid,
              ]}
              onPress={() => {
                onPressClose();
              }}
            >
              <Text style={styles.textButton}>Đóng</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    paddingHorizontal: 5,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  containerItem: {
    backgroundColor: '#FFF',
    borderRadius: 2,
  },
  headerView: {
    height: 40,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  buttonLogout: {
    width: 20,
    height: 20,
  },

  label: {
    fontSize: 17,
    fontWeight: '700',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#fff',
    marginRight: 10,
    marginBottom: 3,
    width: 75,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
  },
  shadowAndroid: {
    elevation: 5,
  },
  shadowIos: {
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.21,
    shadowRadius: 4,
  },
  textButton: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  viewBottomButton: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
    marginBottom: 5,
  },
  bodypu: {
    width: '100%',
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
