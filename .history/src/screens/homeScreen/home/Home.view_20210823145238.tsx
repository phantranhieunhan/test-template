import React from 'react'
import {Text} from 'react-native'
import { ButtonCustom } from '../../../components'
import { BackgroundDetailScreen } from '../../../components/backgroundScreen/backgroundDetailScreen/BackgroundDetailScreen.view'
import {actionMain} from '../../../utils/mainActions'

const Map = (props: any)=>{
    console.log({abc: props})
    
    return(
        <BackgroundDetailScreen title="Home" navigation={props.navigation}>
            <ButtonCustom onPress={actionMain.loading(true)} title = 'abc'/>
        </BackgroundDetailScreen>
    )
}

export default Map;