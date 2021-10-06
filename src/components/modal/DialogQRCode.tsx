
import React, { useState, useEffect, useRef } from 'react';
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
// import QRCode from '';
interface DialogQRCode {

    onPressClose: any;

}

export const DialogQRCode = (props: DialogQRCode) => {
    const {
        onPressClose,

    } = props;
    let myQRCode = useRef();
    const [qrvalue, setQrvalue] = useState('');

    return (
        <KeyboardAvoidingView
            behavior='padding'
            enabled
            style={{
                height: hp(100),
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Ripple style={styles.containerBig} onPressIn={() => onPressClose()}>
                <View style={styles.containerBig}>
                    <View style={styles.container}>
                        <View
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: hp(8),
                                backgroundColor: mainColors.greenscolor,
                                width: '100%',
                                borderRadius: 5,
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
                                QRCode Đơn Hàng Của Bạn
                            </Text>
                        </View>
                        <View style={styles.view_qrcode}>
                            {/* <QRCode
                                value={'http://facebook.github.io/react-native/'}
                                size={hp(50)}
                                bgColor='black'
                                fgColor='white' /> */}
                        </View>
                    </View>
                </View>
            </Ripple>
        </KeyboardAvoidingView>
    );
};
const styles = StyleSheet.create({
    containerBig: {
        alignItems: 'stretch',
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    container: {
        height: hp(63),
        borderRadius: 5,
        flexDirection: 'column',
        backgroundColor: 'white',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
    },
    view_qrcode: {
        height: hp(50),
        backgroundColor: 'white',
        width: wp(100),
        alignItems: 'center',
        justifyContent: 'center'

    }

});
