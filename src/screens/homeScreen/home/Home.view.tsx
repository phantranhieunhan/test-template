import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  ToastAndroid, 
  BackHandler,
  Alert,
} from 'react-native';
import {ButtonCustom} from '../../../components';
import {BackgroundBigScreen} from '../../../components/backgroundScreen/backgroundBigScreen/BackgroundBigScreen.view';
import styles from './Home.style';
import Ripple from 'react-native-material-ripple';
import {actionMain} from '../../../utils/mainActions';
import {
  RECIEVEDICON,
  WAITINGINVOICEICONLIST,
  DELIVERYMAN,
  COMPLETEDTASK,
  FILE,
} from '../../../assets';

const Home = (props: any) => {
  const transportion = name => {
    props.navigation.navigate(name);
  };
  const [exitApp, setExitApp] = useState(false);
  const backAction = () => {
    Alert.alert(
      'Thoát ứng dụng',
      'Bạn muốn thoát khỏi ứng dụng?', [{
          text: 'Hủy',
          onPress: () =>{},
          style: 'cancel'
      }, {
          text: 'Đồng ý',
          onPress: () => BackHandler.exitApp()
      }, ], {
          cancelable: false
      }
   )
    return true;
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
}, []);
  return (
    <BackgroundBigScreen navigation={props.navigation}>
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text style={{fontSize: 20}}>TRANG CHỦ</Text>
    </View>
      
    </BackgroundBigScreen>
  );
};

export default Home;
