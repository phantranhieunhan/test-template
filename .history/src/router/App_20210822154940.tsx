import React, {useEffect, useState} from 'react';

import SplashScreen from '../screens/SplashScreen';
import ConfigScreen from '../screens/config';
import Login from '../screens/login/login.view';
import {BottomTab} from './BottomTab';
import {BackgroundDetailScreen} from '../components/backgroundDetailScreen/BackgroundDetailScreen.view';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {connect, useSelector} from 'react-redux';
import {actionInit} from '../utils/mainActions';
import View from 'react-native-gesture-handler/lib/typescript/GestureHandlerRootView';
import BackgroundTimer from 'react-native-background-timer'
import { $axios } from '../constants';
const Stack = createStackNavigator();
const MainRoute = () => {
  const {GuidID, profileInfo, isLogin, UrlString} = useSelector((state: any) => ({
    GuidID: state.config.GuidID,
    profileInfo: state.auth.profileInfo,
    isLogin: state.auth.isLogin,
    UrlString: state.config.UrlString
  }));
  // console.log({GuidId: GuidID, isLogin: isLogin});
  const [isSplashLoad, setIsSplashLoad] = useState<boolean>(true);

  // const [isLogin, setIsLogin] = useState<boolean>(false)
  useEffect(() => {
    const intervalId = BackgroundTimer.setTimeout(() => {
      setIsSplashLoad(false);
      
    }, 500);
    return () => {
      if(UrlString){
        $axios({baseURL: UrlString})
      }
      BackgroundTimer.clearTimeout(intervalId);
    };
  }, []);
  return (
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
  );
};

// modify the App component
const App = (props: any) => {
  useEffect(() => {
    actionInit(props);
  }, []);
  return <MainRoute />;
};
export default App;
