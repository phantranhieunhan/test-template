import React from 'react'
import {Text} from 'react-native'
import { BackgroundDetailScreen } from '../../../components/backgroundDetailScreen/BackgroundDetailScreen.view'

const Map = (props: any)=>{
    return(
        <BackgroundDetailScreen title="Home" navigation={props.navigation}>
            <Text>abc</Text>
        </BackgroundDetailScreen>
    )
}

export default Map;