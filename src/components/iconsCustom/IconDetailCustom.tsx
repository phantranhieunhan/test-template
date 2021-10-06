import React, { useRef } from 'react';
import { MKColor, } from 'react-native-material-kit';

import {
    View,
    StyleSheet,
    Text,
    Image,
    ScrollView,
    FlatList,
    ViewStyle,
    ImageSourcePropType,
    TouchableOpacity

} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Fonts, mainColors } from '../../constants';
import Ripple from 'react-native-material-ripple';
import { TextInput, Button, Card, Searchbar, IconButton } from 'react-native-paper';

interface IconDetailCustom {
    title: string,
    onPress: any;
    style?: ViewStyle;
    sourceICon?: ImageSourcePropType;
    labelStyle?: ViewStyle;
    type?: string
    onPressAccpect?: any
    SaleVoiceID?: string
}

export const IconDetailCustom = (props: any) => {
    const { title, SaleVoiceID, onPressAccpect, onPress, type, style, sourceICon, labelStyle } = props;

    return (

        <Ripple onPressIn={onPress} style={[styles.container, style]}>
            <Image source={sourceICon} style={{ width: hp(3), height: hp(3), resizeMode: 'contain', }}></Image>
            <Text style={[styles.textSyle, labelStyle]}>{title}</Text>
        </Ripple>


    )


}
const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        elevation: 5,
    },
    textSyle: {
        fontSize: wp(5),
        fontWeight: 'bold'
    }

})