import React, { useEffect, useState } from 'react';
import { ToastAndroid } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';



export const getErroCode = (props: any) => {

    const dispatch = useDispatch();
    const { profileInfo } = useSelector((state: any) => ({
        profileInfo: state?.auth?.profileInfo,
    }));
    const [userID, setUserID] = useState(profileInfo.UserID);
    const [Devices, setDevices] = useState('');
    const [InfoScreen, setInfoScreen] = useState('');
    const [Function, setFunction] = useState('');
    const [ErrorDescription, setErrorDescription] = useState('')
    const onPressErro = async () => {
        try {

            ToastAndroid.show('lỗi Hệ thống',ToastAndroid.CENTER)

        } catch (E) { }
    }

    return {


    }

}

