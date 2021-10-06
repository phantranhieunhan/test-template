import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import SplashScreen from '../screens/SplashScreen';
import ConfigScreen from '../screens/config';
import Login from '../screens/login/login.view';
import {ModalCustom} from '../components/modal';
import {BottomTab} from './BottomTab';
import {BackgroundDetailScreen} from '../components/backgroundScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {$axios} from '../constants';

import {connect, useSelector} from 'react-redux';
import {actionInit} from '../utils/mainActions';
import BackgroundTimer from 'react-native-background-timer';
import {apiConfigDefault} from '../constants';
import { SplashMain } from '../components';
import store from '../redux/store';
import {system, modal, auth} from '../redux';

const Stack = createStackNavigator();
const App = (props: any) => {
  const {GuidID, profileInfo, isLogin, UrlString} = useSelector(
    (state: any) => ({
      GuidID: state.config.GuidID,
      profileInfo: state.auth.profileInfo,
      isLogin: state.auth.isLogin,
      UrlString: state.config.UrlString,
    }),
  );
  const {loading, modal} = props;
  const [isSplashLoad, setIsSplashLoad] = useState<boolean>(true);

  // const [isLogin, setIsLogin] = useState<boolean>(false)
  if (UrlString) {
    apiConfigDefault(UrlString, GuidID, $axios);
  }
  useEffect(() => {
    const intervalId = BackgroundTimer.setTimeout(() => {
      setIsSplashLoad(false);
    }, 500);
    return () => {
      BackgroundTimer.clearTimeout(intervalId);
    };
  }, []);
  useEffect(() => {
    actionInit(props);
  }, []);
  const onRequestClose = () => props.setVisibleModal({status: false});

  const a = ()=>{
    console.log({loading})
    if(loading){
      return <SplashMain isVisible={loading}/>
    }
  }
  return (
    <View style={{flex: 1}}>
      {/* {isLoading && <SplashMain isVisible={isLoading}/>} */}
      {a()}
      {modal?.status && (
        <ModalCustom
          title={modal?.title}
          content={modal?.content}
          onPressClose={onRequestClose}
          actionRight={onRequestClose}
        />
      )}
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {isSplashLoad && (
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
          )}
          {!GuidID ? (
            <Stack.Screen name="ConfigScreen" component={ConfigScreen} />
          ) : !isLogin ? (
            <Stack.Screen name="LoginScreen" component={Login} />
          ) : (
            <Stack.Screen name="HomeScreen" component={BottomTab} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

const mapStateFromProps = (state: any) => {
  return {
    loading: state.system.isLoading,
    modal: state.modal.modal,
  };
};
export default connect(mapStateFromProps, {...system, ...modal, ...auth})(App);
