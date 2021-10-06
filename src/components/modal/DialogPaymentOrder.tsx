
import { BackgroundBigScreen } from '../../../src/components/backgroundScreen/backgroundBigScreen/BackgroundBigScreen.view';
import {
    View,
    StyleSheet,
    Text,
    Image,
    ScrollView,
    FlatList,
    ToastAndroid,
    Modal,
    Picker,
    TextInput,
    KeyboardAvoidingView,
} from 'react-native';
import Ripple from 'react-native-material-ripple';

import React, { useState, useEffect } from 'react';
import { BarCode, Box, Search, LOGOUTICON, Receiver, Cancel } from '../../assets/index';
import ModalDropdown from 'react-native-modal-dropdown';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { mainColors } from '../../constants';
import { GetTypeBanking } from '../../screens/homeScreen/detailEnvoice/GetTypeBanking'
import lodash from 'lodash'
import { SaleInvoiceDetailClient, PaymentInfo } from '../object/Order'
import { handOutSaleInvoice } from '../../screens/homeScreen/detailEnvoice/PaymentOrder'
import getDataByThing from '../../utils/getDataByThing';


interface DialogPaymentOrder {
    onPressClosePay?: any
    navigation?: any
    SaleInvoiceDetailClient?: any
    TotalPrice?: any
    SaleInvoiceClient?: any


}
export const DialogPaymentOrder = (props: DialogPaymentOrder) => {
    const { DataTypeBanking, onPressGetBanking } = GetTypeBanking(props)
    const { onPressClosePay, navigation, SaleInvoiceDetailClient, SaleInvoiceClient, TotalPrice } = props
    const { onPressHandout, returnResultHandout } = handOutSaleInvoice(props)
    const [selectedValue, setSelectedValue] = useState("Ngân Hàng");
    const [show, setshow] = useState(1)
    const [stringPrice, setStringPrice] = useState(0)
    const [stringTitle, setStringTitle] = useState('')
    const [stringTNote, setStringTNote] = useState('')
    const [dataPayment, setdataPayment] = useState<PaymentInfo>({ PaymentMethodID: '', AccountBankingTypeID: '', Amount: '', Notes: '' })
    const [PricePay, setPricePay] = useState(TotalPrice)
    const [PriceTake, setPriceTake] = useState(TotalPrice)
    const onTextChangePrice = (value: any) => {
        if (value > 0 && value < TotalPrice) {
            try {
                setStringPrice(value)
                // setPricePay(TotalPrice - value)
                setdataPayment({ ...dataPayment, Amount: value })
                setPriceTake(value)
            } catch (E) {

            }
        }
        else {
            ToastAndroid.show('Nhập Quá Số Tiền', ToastAndroid.CENTER)
        }

    }
    const onTextChangeTitle = (value: any) => {
        if (value != '') {
            setStringTitle(value)
            try {
                setdataPayment({ ...dataPayment, Notes: value })


            } catch (E) {

            }

        }
    }
    const onTextChangeNote = (value: any) => {
        if (value != '') {
            setStringTNote(value)
            SaleInvoiceClient.Notes = value
        }
    }
    const onPressAccpectPayment = async () => {

        await onPressHandout(SaleInvoiceClient, SaleInvoiceDetailClient, dataPayment)
        if ((await returnResultHandout) == 1) {
            onPressClosePay();
            props.navigation.goBack();
        }

    }
    const onChangeValue = (value: any) => {
        setSelectedValue(value)
        if (lodash.isEmpty(DataTypeBanking)) { }
        else {
            if (value == 1) {
                try {


                } catch (E) {
                    console.log(1)
                }
                setshow(2)
            }
            else {
                setshow(1)
            }
        }
    }
    const onSelectTypePay = (value: any) => {
        if (lodash.isEmpty(DataTypeBanking)) {

        }
        else {
            try {
                const _temp = {
                    ...dataPayment,
                    AccountBankingTypeID: DataTypeBanking[value].AccountBankingTypeID,
                    PaymentMethodID: DataTypeBanking[value].BankingTypeID.toString()
                }
                setdataPayment(_temp);
            }
            catch (E) { }

        }
    }
    const getdata = async () => {
        await onPressGetBanking()
    }

    useEffect(() => {
        const _temp = {
            ...dataPayment,
            AccountBankingTypeID: '1'
        }
        setdataPayment(_temp);
        setdataPayment({ ...dataPayment, Amount: TotalPrice })
        getdata();
        return () => { };
    }, []);
    return <KeyboardAvoidingView
        behavior="padding"
        enabled
        style={{
            height: hp(100),
            width: wp(100),
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
        }}>
        <View style={styles.containerBig}>
            <View style={styles.container}>

                <View style={styles.header}>
                    <Text style={{ color: '#fff', fontSize: hp(2.8) }}>Thanh Toán Hóa Đơn</Text>
                </View>
                <View style={styles.main}>
                    <View style={styles.view_item}>
                        <Text style={{ fontSize: hp(2), width: wp(30) }}>Hình Thức: </Text>
                        <ModalDropdown
                            defaultValue={'Chọn Loại'}
                            style={{
                                width: wp(55), height: hp(6), alignItems: 'center', justifyContent: 'center', borderColor: 'black',
                                borderWidth: 1, borderRadius: 5,
                            }}
                            dropdownStyle={{ width: wp(55) }}
                            textStyle={{ color: 'black', fontSize: hp(2), }}
                            dropdownTextStyle={{ color: 'black', fontSize: hp(2.5), width: wp(55) }}
                            options={['Tiền Mặt', 'Ngân Hàng']}
                            onSelect={(value) => onChangeValue(value)}
                            isFullWidth={true}
                        >
                        </ModalDropdown>

                    </View>

                    {show == 2 ? <View style={styles.view_item}>
                        <Text style={{ fontSize: hp(2), width: wp(30) }}>Loại: </Text>

                        <ModalDropdown
                            defaultValue={'Chọn Loại'}
                            style={{
                                width: wp(55), height: hp(6), alignItems: 'center', justifyContent: 'center', borderColor: 'black',
                                borderWidth: 1, borderRadius: 5,
                            }}

                            dropdownStyle={{ width: wp(55), alignItems: 'center', }}
                            textStyle={{ color: 'black', fontSize: hp(2), }}
                            dropdownTextStyle={{ color: 'black', fontSize: hp(2.5), width: wp(55) }}
                            options={DataTypeBanking.map((item, index) => item.TypeName)}
                            onSelect={(value) => { onSelectTypePay(value) }}
                        >

                        </ModalDropdown>


                    </View> : <View></View>}

                    {/*Tổng Tiền*/}
                    <View style={styles.view_item}>
                        <Text style={{ fontSize: hp(2), width: wp(30) }}>Tổng Tiền: </Text>
                        <View style={{ borderColor: 'red', borderWidth: 1, borderRadius: 5, alignItems: 'flex-start', justifyContent: 'center', height: hp(5), width: wp(55), }}>
                            <Text style={{ backgroundColor: 'white', color: 'red', fontWeight: 'bold', fontSize: hp(2) }}> {getDataByThing.getcurrency(
                                TotalPrice.toString(),
                            )}</Text>
                        </View>
                    </View>

                    {/*Số Tiền Nhận*/}
                    <View style={styles.view_item}>
                        <Text style={{ fontSize: hp(2), width: wp(30) }}>Số Tiền Nhận: </Text>
                        <View style={{ borderColor: 'black', borderWidth: 1, borderRadius: 5, }}>
                            <TextInput defaultValue={getDataByThing.getcurrency(
                                PriceTake.toString(),
                            )} clearTextOnFocus={true} onChangeText={text => onTextChangePrice(text)} keyboardType='numeric' style={{ height: hp(5), width: wp(55), backgroundColor: 'white', color: 'black', fontWeight: '500', fontSize: hp(2) }}> </TextInput>
                        </View>
                    </View>

                    {/* Số Tiền Còn*/}
                    <View style={styles.view_item}>
                        <Text style={{ fontSize: hp(2), width: wp(30) }}>Số Tiền Còn: </Text>
                        <View style={{ borderColor: 'black', borderWidth: 1, borderRadius: 5, alignItems: 'flex-start', justifyContent: 'center', height: hp(5), width: wp(55), }}>
                            <Text style={{ backgroundColor: 'white', color: 'black', fontWeight: '500', fontSize: hp(2) }}>  {getDataByThing.getcurrency(
                                PricePay.toString(),
                            )}</Text>
                        </View>
                    </View>
                    {/* Nội Dung */}

                    {show == 2 ? <View style={styles.view_item1}>
                        <Text style={{ fontSize: hp(2), width: wp(30) }}>Nội Dung: </Text>
                        <View style={{ borderColor: 'black', borderWidth: 1, borderRadius: 5, }}>
                            <TextInput multiline={true} numberOfLines={2} onChangeText={text => onTextChangeTitle(text)} style={{ height: hp(8), width: wp(55), backgroundColor: 'white', color: 'black', fontWeight: '500', fontSize: hp(2), textAlignVertical: 'top', }}> </TextInput>
                        </View>
                    </View> : <View></View>}

                    {/* Ghi Chú */}


                    <View style={styles.view_item1}>
                        <Text style={{ fontSize: hp(2), width: wp(30) }}>Ghi Chú: </Text>
                        <View style={{ borderColor: 'black', borderWidth: 1, borderRadius: 5, }}>
                            <TextInput multiline={true} numberOfLines={4} onChangeText={text => onTextChangeNote(text)} style={{ height: hp(8), width: wp(55), backgroundColor: 'white', color: 'black', fontWeight: '500', fontSize: hp(2), textAlignVertical: 'top', }}> </TextInput>
                        </View>
                    </View>
                </View>
                <View style={styles.bottom_Button}>
                    <Ripple style={{ height: hp(6), width: hp(12), backgroundColor: mainColors.smokecolor, borderRadius: 5, alignItems: 'center', justifyContent: 'center', elevation: 5, }} onPressIn={onPressClosePay} >
                        <Text style={{ color: 'black', fontSize: hp(2) }}>Đóng</Text>
                    </Ripple>
                    <Ripple style={{ height: hp(6), width: hp(12), backgroundColor: mainColors.greenscolor, borderRadius: 5, alignItems: 'center', justifyContent: 'center', elevation: 5, }} onPressIn={onPressAccpectPayment} >
                        <Text style={{ color: 'white', fontSize: hp(2) }}>Chấp Nhận</Text>
                    </Ripple>
                </View>
            </View>

        </View>
    </KeyboardAvoidingView>
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
        flexDirection: 'column',
        width: '100%',
        height: hp(75),
        backgroundColor: 'white',
        alignItems: 'center',
        borderColor: 'black',
        borderRadius: 8,

    },
    header: {
        height: hp(7),
        width: wp(100),
        paddingHorizontal: wp(1.5),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: mainColors.greenscolor,
        borderRadius: 8,
    },
    main: {
        paddingLeft: wp(1),
        paddingRight: wp(1),
        marginTop: hp(1),
        height: hp(48),

        width: wp(100),
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    view_item: {
        marginTop: hp(1),
        height: hp(6),
        width: wp(100),

        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    view_item1: {
        marginTop: hp(1),
        height: hp(10),
        width: wp(100),

        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-start'
    },
    bottom_Button: {
        marginTop: hp(10),
        height: hp(8),
        width: wp(100),

        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-start'
    }
})
