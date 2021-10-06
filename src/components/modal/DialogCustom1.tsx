import React from 'react'
import { View, StyleSheet, Text, Image, ViewStyle, TextStyle, ImageSourcePropType } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Fonts, mainColors } from '../../constants';
import Ripple from 'react-native-material-ripple';
import { TextInputCustom } from '../userComponents/TextInputCustom';
import { BarCode, Box, Search, LOGOUTICON, Phone, Cancel, Check } from '../../assets/index';
import { TextInput, Button, Card, Searchbar, IconButton } from 'react-native-paper';
import { IconSource } from 'react-native-paper/lib/typescript/components/Icon';
import { IconDetailCustom } from '../iconsCustom/IconDetailcustom'
interface DialogCustom1 {
    onPressAcpect: any;
    onPressClose: any;
     price:string;
    noteUser: string;

}
export const DialogCustom1 = (props: DialogCustom1) => {
    const { onPressAcpect, onPressClose,  price,noteUser } = props;
    return (<Card>
        <View style={styles.container}>
            <Text style={{ fontSize: wp(5), fontWeight: 'bold', margin: 10, textAlign: 'center' }}>Số Tiền Nhận Được</Text>
            <View style={styles.header1}>
                
                <View style={styles.header1_view}>
                    <View style={{
                        width: wp(20),
                        height: hp(6),
                        borderEndWidth: 1,
                        borderEndColor: 'black',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Text style={{ fontSize: wp(4), fontWeight: 'bold', color: mainColors.blue }}>Số Tiền</Text>
                    </View>
                    <View style={{
                        width: wp(30),
                        height: hp(6),

                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Text style={{ fontSize: wp(4), fontWeight: 'bold', color: mainColors.warningColor }}>{price}</Text>
                    </View>
                    <View style={{
                        width: wp(20),
                        height: hp(6),
                        borderStartWidth: 1,
                        borderStartColor: 'black',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Text style={{ fontSize: wp(4), fontWeight: 'bold', color: mainColors.blue }}>VND</Text>
                    </View>
                </View>
            </View>

            <View style={styles.header2}>
                <Text style={{ fontSize: wp(4) }}>{noteUser}</Text>
            </View>
            <View style={styles.header3}>
                <IconDetailCustom
                    iconShow={true}
                    onPress={() => { }}
                    labelStyle={{ color: mainColors.whiteColor, fontSize: wp(4) }}
                    title={'Thoát'}
                    sourceICon={Cancel}
                    style={{ width: wp(30), height: hp(6), borderRadius: 15, backgroundColor: mainColors.smokecolor }}
                ></IconDetailCustom>
                <IconDetailCustom
                    iconShow={true}
                    onPress={() => { }}
                    labelStyle={{ color: mainColors.blackColor, fontSize: wp(4) }}
                    title={'Lưu'}
                    sourceICon={Check}
                    style={{ width: wp(30), height: hp(6), borderRadius: 15, backgroundColor: mainColors.greenscolor }}
                ></IconDetailCustom>
            </View>
        </View>
    </Card>
    )

}
const styles = StyleSheet.create({
    container: {
        width: wp(99),
        height: hp(50),
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        flexDirection: 'column',
        alignItems: 'center',
        borderWidth: 1, borderColor: 'black'
    },
    header1: {
        width: wp(70),
        height: hp(8),

        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    header1_view: {
        width: wp(70),
        height: hp(6),
        borderRadius: 15,
        borderColor: 'black',
        borderWidth: 1,
        flexDirection: 'row',
        margin: 8
    },
    header2: {
        margin: 10,
        width: wp(80),
        height: hp(20),
        borderColor: 'black',
        borderRadius: 10,
        borderWidth: 1,
        alignItems: 'center',
        padding: 3
    },
    header3: {
        width: wp(80),
        height: hp(8),
        margin: 8,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})
