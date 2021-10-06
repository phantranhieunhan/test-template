import React, { useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    ViewStyle,
    TextStyle,
    ImageSourcePropType,
    ToastAndroid,
    ScrollView,

} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Fonts, mainColors } from '../../constants';
import Ripple from 'react-native-material-ripple';
import { TextInputCustom } from '../userComponents/TextInputCustom';
import {
    BarCode,
    Box,
    Search,
    LOGOUTICON,
    Phone,
    Info,
    Check,
    Exchange2

} from '../../assets/index';
import {
    TextInput,
    Button,
    Card,
    Searchbar,
    IconButton,
} from 'react-native-paper';
import { IconSource } from 'react-native-paper/lib/typescript/components/Icon';
import { IconDetailCustom } from '../iconsCustom/IconDetailCustom'
import { receiveSaleInvoiceByID } from '../../screens/homeScreen/waiting/ReceiveSaleInvoiceByID'
import { GetSaleInvoiceNoteReceive } from '../../screens/homeScreen/waiting/GetSaleInvoice';
import { Linking, Alert, Platform } from 'react-native';
import getDataByThing from '../../utils/getDataByThing';
interface ItemPrintedCustom {
    navigation?: any;
    onPressItem: any;
    codeOrder: string;
    invoiceWeight: string;
    dateTime: string;
    nameCustomer: string;
    addressCustomer: string;
    noteOder?: String;
    typeItem: boolean;
    sourceIcon?: any;
    styleItem?: ViewStyle;
    onPressIcon?: any;
    SaleVoiceID?: string;
    PhoneNumBer?: string;
    Option?: string;
    type?: string;
    Reload?: any
    onPressAcept?: any
    onPressGet?: any
    onPressApply?: any
    index?: any;
    onPressTransposition?: any
    onPressReturn?: any
    titleAcpect?: string
    customerCode?: string
    onPressClose?: any

}

export const ItemPrintedCustom = (props: ItemPrintedCustom) => {
    const [showIcon, setShowIcon] = useState(false)
    const { PhoneNumBer, customerCode, onPressClose, titleAcpect, onPressTransposition, onPressReturn, index, onPressApply, onPressAcept, onPressGet, onPressIcon, type, Reload, SaleVoiceID, styleItem, navigation, Option, onPressItem, codeOrder, invoiceWeight, dateTime, nameCustomer, addressCustomer, noteOder, sourceIcon, typeItem } = props
    const CallCustomer = (phone: string) => {
        if (Platform.OS == 'android') {
            Linking.openURL('tel:' + phone + '').then(supported => {
                if (!supported) {
                    Alert.alert('Số điện thoại không đúng');
                } else {
                    return Linking.openURL(phone);
                }
            })
        }
        else if (Platform.OS == 'ios') {
            Linking.openURL('tel:' + phone);
        }
    }



    const transportion = (name, typeOrder) => {
        if (typeOrder == '11') {
            navigation.push(name, {
                IDOrder: SaleVoiceID,
                TypeAPI: typeOrder

            });
            onPressClose()
        }
        else {
            navigation.push(name, {
                IDOrder: SaleVoiceID,
                TypeAPI: typeOrder

            });
        }

        //git pull orgin Sang
    }

    const onPress = (type: string) => {
        if (type == '11') {
            onPressAcept(SaleVoiceID, index);
   
        }
        else if (type == '3') {
            onPressGet(SaleVoiceID);
        }
        else if (type == '4') {
            onPressApply(SaleVoiceID);
        }
        else if (type == '5') {
            // onPressTransposition(SaleVoiceID);
        }
        else if (type == '1') {
            onPressAcept(SaleVoiceID, index);
        }
    }

    return (
        <Card style={[styles.container, styleItem]}>
            <Ripple
                onPress={() =>
                    Option != '0'
                        ? showIcon == false
                            ? setShowIcon(true)
                            : setShowIcon(false)
                        : {}
                }>
                <View style={[styles.item, styleItem]}>
                    {/* headder */}
                    <View style={styles.header}>
                        <View style={styles.header1}>
                            <Text
                                style={{
                                    fontSize: wp(3.6),
                                    color: 'black',
                                    fontFamily: Fonts.Roboto_Stab_Bold,
                                    fontWeight: '700',
                                }}>
                                {codeOrder}
                            </Text>
                        </View>
                        <View style={styles.header1_icon}>
                            <Image
                                source={Box}
                                style={{
                                    height: hp(5),
                                    width: wp(6),
                                    aspectRatio: 1,
                                    marginRight: 5,
                                }}></Image>
                            <Text
                                style={{
                                    fontSize: wp(3),
                                    color: 'red',
                                    fontFamily: Fonts.Roboto_Stab_Bold,
                                }}>
                                {invoiceWeight}
                            </Text>
                        </View>
                        <View style={{ justifyContent: 'center' }}>

                            <Text
                                style={{
                                    fontSize: wp(3.6),
                                    color: 'black',
                                    fontFamily: Fonts.Roboto_Stab_Bold,
                                }}>
                                {getDataByThing.getDayMonthYearHourStringDetail(dateTime)}
                            </Text>
                        </View>
                    </View>
                    {/* headder2 */}
                    <View style={styles.header2}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingRight: 8, height: hp(3.7), alignItems: 'center' }}>
                            <Text
                                style={{
                                    fontSize: wp(4),
                                    color: 'black',
                                    fontFamily: Fonts.Roboto_Slab_Light,
                                    fontWeight: '700',
                                }}>
                                {customerCode} - {nameCustomer}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.header2_icon}>
                        <Text
                            style={{
                                width: wp(80),
                                fontSize: wp(3.5),
                                color: mainColors.smokecolor,
                                fontFamily: Fonts.Roboto_Slab_Regular,
                                fontStyle: 'italic',
                            }}>
                            {addressCustomer}
                        </Text>

                    </View>
                    {noteOder ? (
                        <View style={styles.header3}>
                            <Text
                                style={{
                                    fontSize: wp(3.5),
                                    color: 'black',
                                    fontFamily: Fonts.Roboto_Stab_Bold,
                                    marginRight: 5,
                                    fontStyle: 'italic',
                                }}>
                                Ghi chú:
                            </Text>
                            <Text
                                style={{
                                    fontSize: wp(3.5),
                                    color: 'black',
                                    fontFamily: Fonts.Roboto_Stab_Bold,
                                    fontStyle: 'italic',
                                }}>
                                {noteOder}
                            </Text>
                        </View>
                    ) : (
                        <View></View>
                    )}
                </View>
            </Ripple>

            {showIcon == true ? 
                <View style={styles.bottom}>
                  
                    <IconDetailCustom
                        iconShow={true}
                        onPress={() => { CallCustomer(PhoneNumBer) }}
                        labelStyle={{ color: mainColors.greenscolor, fontSize: wp(4) }}
                        title={'Gọi'}
                        sourceICon={Phone}
                        style={styles.ButtonBottom}></IconDetailCustom>

                    <IconDetailCustom
                        iconShow={true}
                        onPress={() => transportion('DetailEnvoice', type)}
                        labelStyle={{ color: mainColors.blue, fontSize: wp(3) }}
                        title={'Chi Tiết'}
                        sourceICon={Info}
                        style={styles.ButtonBottom}></IconDetailCustom>

                    {Option == '7' ? <IconDetailCustom
                        iconShow={true}
                        onPress={() => { onPressReturn(SaleVoiceID) }}
                        labelStyle={{ color: mainColors.blue, fontSize: wp(4) }}
                        title={'Trả'}
                        sourceICon={Exchange2}
                        style={styles.ButtonBottom}>
                        </IconDetailCustom> : 
                        <View></View>}
                    {Option == '1' ? <IconDetailCustom
                        iconShow={true}
                        onPress={() => onPress(type)}
                        labelStyle={{ color: mainColors.greenscolor, fontSize: wp(2.8) }}
                        title={'Nhận phiếu'}
                        sourceICon={Check}
                        style={styles.ButtonBottom}
                    ></IconDetailCustom> : <View></View>}
                </View> 
            :
            <View></View>
            }
        </Card>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        marginTop: 2,
     
        borderBottomWidth: 2,
        paddingHorizontal: 2,
    },
    item: {
        marginBottom: 5,
        paddingVertical: 2,
        paddingHorizontal: 3,
        marginTop: 5,
        flexDirection: 'column',
        borderColor: 'black',
        backgroundColor: '#fff',
    },
    header: {
        height: hp(4),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    header1: { justifyContent: 'center', maxWidth: wp(58) },
    header1_icon: {
        height: hp(4),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header2: {
        marginTop: 5,
        marginBottom: 1,
        justifyContent: 'center',
    },
    header2_icon: {
        minHeight: hp(5),
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    header3: {
        width: '84%',
        flexDirection: 'row'
    },
    bottom: {
        marginBottom: 5,
        height: hp(5),
        justifyContent: 'flex-end',
        flexDirection: 'row'
    },
    ButtonBottom: {
        width: wp(80) / 4, 
        height: hp(5), 
        borderRadius: 5, 
        backgroundColor: '#fff',
        marginLeft:wp(6),
    }
})


