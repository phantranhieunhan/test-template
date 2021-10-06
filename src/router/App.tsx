import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, Modal } from 'react-native';
import SplashScreen from '../screens/SplashScreen';
import ConfigScreen from '../screens/config';
import Login from '../screens/login/login.view';
import { ModalBottomCustom } from '../components/modal/ModalBottomCustom';
import { BottomTab } from './BottomTab';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { $axios } from '../constants';
import { connect, useSelector } from 'react-redux';
import { actionInit } from '../utils/mainActions';
import { apiConfigDefault } from '../constants';
import { SplashMain } from '../components';
import { system, modal, auth } from '../redux';
import { DialogError } from '../components/modal/DialogError';
import { type } from 'os';

const Stack = createStackNavigator();
const App = (props: any) => {
  const { GuidID, profileInfo, isLogin, UrlString, isLoading, splashLoad } = useSelector(
    (state: any) => ({
      GuidID: state.config.GuidID,
      profileInfo: state.auth.profileInfo,
      isLogin: state.auth.isLogin,
      UrlString: state.config.UrlString,
      isLoading: state.system.isLoading,
      splashLoad: state.system.splashLoad,
    })
  );
  const { modal } = props;

  // const [isLogin, setIsLogin] = useState<boolean>(false)
  if (UrlString) {
    apiConfigDefault(UrlString, GuidID, $axios);
  }
  useEffect(() => {
    actionInit(props);
  }, []);
  const onRequestClose = () => props.setVisibleModal({ status: false });
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {isLoading && <SplashMain isVisible={isLoading} />}

      {modal?.status && modal?.type == 1 && (
        <ModalBottomCustom
          title={modal?.title}
          // content={modal?.content}
          onPressClose={onRequestClose}
          actionRight={onRequestClose}
        />
      )}

      <Modal
        animationType='slide'
        transparent
        visible={modal?.status && modal?.type == 2}
        presentationStyle='formSheet'
        style={{ justifyContent: 'flex-end', margin: 0 }}
      >
        <DialogError
          onPressClose={onRequestClose}
          title={modal?.title}
          content={modal?.content}
          colorHeader={modal?.colorHeader}
        ></DialogError>
      </Modal>

      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {splashLoad && <Stack.Screen name='SplashScreen' component={SplashScreen} />}
          {!GuidID ? (
            <Stack.Screen name='ConfigScreen' component={ConfigScreen} />
          ) : !isLogin ? (
            <Stack.Screen name='LoginScreen' component={Login} />
          ) : (
            <Stack.Screen name='HomeScreen' component={BottomTab} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const mapStateFromProps = (state: any) => {
  return {
    loading: state.system.isLoading,
    modal: state.modal.modal,
  };
};
export default connect(mapStateFromProps, { ...system, ...modal, ...auth })(App);
