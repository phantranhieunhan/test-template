import React, { useState } from 'react'
import { ViewStyle, StyleSheet } from 'react-native';
import { mainColors, Fonts } from '../../constants';
import { TextInput } from 'react-native-paper';
interface TextInputProperties {
  style?: ViewStyle;
  titileInput?: string;
  inputStyle?: ViewStyle;
  placeHolder: string;
  txtError?: string;
  onChangeText?: any;
  defaultValue?: string;
  secureTextEntry?: boolean

}

export const TextInputCustom = (props: TextInputProperties) => {
  const { style, inputStyle, placeHolder, txtError, onChangeText, defaultValue, secureTextEntry, titileInput } = props;
  const [value, setValue] = useState(defaultValue);

  const _onChangeText = (value: any) => {
    onChangeText(value);
    setValue(value);
  };
  return (
  
      <TextInput mode='outlined' label={placeHolder} style={[style, styles.textInput]}  onChangeText={_onChangeText}
        value={defaultValue}
        secureTextEntry={secureTextEntry}
       />
  );
};
const styles = StyleSheet.create({
  textInput: {
    width: '100%',
    textAlign: 'left',
    textAlignVertical: 'center',
    fontFamily: Fonts.Roboto_Slab_Regular,
    color: mainColors.blackColor,
    backgroundColor:'white',
    marginTop:10,
    paddingVertical: 0,
  },
  viewBackground: {
    padding: 5,
    width: '100%',

  },

});