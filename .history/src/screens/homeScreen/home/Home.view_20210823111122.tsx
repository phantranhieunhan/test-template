import React from 'react'
import {Text} from 'react-native'
import { ButtonCustom } from '../../../components'
import { BackgroundDetailScreen } from '../../../components/backgroundDetailScreen/BackgroundDetailScreen.view'

const Map = (props: any)=>{
    console.log(props)
    const onRequestClose = () => props.setVisibleModal({status: false});
    return(
        <BackgroundDetailScreen title="Home" navigation={props.navigation}>
            <ButtonCustom onPress={onRequestClose} title = 'abc'/>
        </BackgroundDetailScreen>
    )
}

export default Map;