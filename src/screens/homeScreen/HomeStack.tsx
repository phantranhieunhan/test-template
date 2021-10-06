import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './home/Home.view';
import CameraScreen from '../camera/CameraScreen.view';
import CameraScreenDetail from '../camera/CameraScreenToDetail.view';

const HomeSN = createStackNavigator();

const HomeStack = (props: any) => {
  return (
    <HomeSN.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}>
      <HomeSN.Group>
        <HomeSN.Screen name="Home" component={Home} />
      </HomeSN.Group>
      <HomeSN.Group>
        <HomeSN.Screen name="CameraScreen" component={CameraScreen} />
      </HomeSN.Group>
      <HomeSN.Group>
        <HomeSN.Screen name="CameraScreenDetail" component={CameraScreenDetail} />
      </HomeSN.Group>
    </HomeSN.Navigator>

  );
};

export default HomeStack;
