import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './home/Home.view'
import Waiting from './waiting/Waiting.view'
const HomeSN = createStackNavigator();

const HomeStack = (props: any) => {
  return (
    <HomeSN.Navigator 
      initialRouteName='Home'
      screenOptions={{headerShown: false}}
    >
      <HomeSN.Group>
        <HomeSN.Screen name = 'Home' component={Home}/>
      </HomeSN.Group>
      <HomeSN.Group>
        <HomeSN.Screen name = 'Waiting' component={Waiting}/>
      </HomeSN.Group>
    </HomeSN.Navigator>
  );
};

export default HomeStack; 