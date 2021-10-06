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
interface DialogCustom {
    onPressAcpect: any;
    onPressClose: any;
    title: string;
    noteOrder: string;
    quanlitiPut: string;
    quanlitiTake: string;
    noteUser: string;
    onTextChange?: any
    onTextTakeChange?:any

}
export const DialogCustom = (props: DialogCustom) => {
    const { onPressAcpect,onTextTakeChange,onPressClose,onTextChange, title, noteOrder, quanlitiPut, quanlitiTake, noteUser } = props;
    return (<Card>
        <View style={styles.container}>
            <Text style={{ fontSize: wp(5), fontWeight: 'bold', margin: 10, textAlign: 'center' }}>{title}</Text>
            <Text style={{ fontSize: wp(4), fontWeight: '400', margin: 10, textAlign: 'center', fontStyle: 'italic' }}>{noteOrder}</Text>
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
                        <Text style={{ fontSize: wp(4), fontWeight: 'bold', color: mainColors.blue }}>Đặt</Text>
                    </View>
                    <View style={{
                        width: wp(30),
                        height: hp(6),

                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Text style={{ fontSize: wp(4), fontWeight: 'bold', color: mainColors.blue }}>{quanlitiPut}</Text>
                    </View>
                    <View style={{
                        width: wp(20),
                        height: hp(6),
                        borderStartWidth: 1,
                        borderStartColor: 'black',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Text style={{ fontSize: wp(4), fontWeight: 'bold', color: mainColors.blue }}>Gói</Text>
                    </View>
                </View>
                <View style={styles.header1_view}>
                    <View style={{
                        width: wp(20),
                        height: hp(6),
                        borderEndWidth: 1,
                        borderEndColor: 'black',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Text style={{ fontSize: wp(4), fontWeight: 'bold', color: mainColors.blue }}>Nhận</Text>
                    </View>
                    <View style={{
                        width: wp(30),
                        height: hp(5),

                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <TextInput keyboardType={'numeric'} onChangeText={onTextTakeChange} defaultValue={quanlitiTake} style={{  backgroundColor: 'white', height: hp(4), fontSize: wp(4), fontWeight: 'bold', color: mainColors.blue }}></TextInput>
                    </View>
                    <View style={{
                        width: wp(20),
                        height: hp(6),
                        borderStartWidth: 1,
                        borderStartColor: 'black',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Text style={{ fontSize: wp(4), fontWeight: 'bold', color: mainColors.blue }}>Gói</Text>
                    </View>
                </View>
            </View>

            <View style={styles.header2}>
                <TextInput placeholder={noteUser} onChangeText={onTextChange} style={{
                    fontSize: wp(4), width: wp(75),
                    height: hp(18),
                    backgroundColor: 'white',
                    textAlign:'center',
                    
                }}></TextInput>
            </View>
            <View style={styles.header3}>
                <IconDetailCustom
                    iconShow={true}
                    onPress={() => onPressClose()}
                    labelStyle={{ color: mainColors.whiteColor, fontSize: wp(4) }}
                    title={'Thoát'}
                    sourceICon={Cancel}
                    style={{ width: wp(30), height: hp(6), borderRadius: 15, backgroundColor: mainColors.smokecolor }}
                ></IconDetailCustom>
                <IconDetailCustom
                    iconShow={true}
                    onPress={() => onPressAcpect()}
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
        marginTop: hp(30),
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        flexDirection: 'column',
        alignItems: 'center',
        borderWidth: 1, borderColor: 'black'
    },
    header1: {
        width: wp(70),
        height: hp(15),

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
