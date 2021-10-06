import React from 'react'
import {Text} from 'react-native'
import { useSelector } from 'react-redux'
import { ButtonCustom } from '../../../components'
import { BackgroundDetailScreen } from '../../../components/backgroundScreen/backgroundDetailScreen/BackgroundDetailScreen.view'
import {actionMain} from '../../../utils/mainActions'


const Map = (props: any)=>{
    
    const {profileInfo} = useSelector((state: any) => ({
        profileInfo: state?.auth?.profileInfo,
      }));
      console.log(profileInfo)
    return(
        <BackgroundDetailScreen title="Home" navigation={props.navigation}>
            {/* <ButtonCustom onPress={()=>actionMain.showModal({
              status: true,
              title: 'Thông báo',
              content:
                'Tài khoản hoặc mật khẩu không chính xác, vui lòng thử lại.',
            })} title = 'abc'/> */}
            
        </BackgroundDetailScreen>
    )
}

export default Map;