import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image,StyleSheet } from 'react-native';
import Setting from '../screens/setting/Setting.view';
import HomeStack from '../screens/homeScreen/HomeStack';
import { HOMEICON, SETTINGICON, MAPICON } from '../assets';

//for tabbar

const Tab = createBottomTabNavigator();

export const BottomTab = (props: any)=> {
  // const myIcon = ;

  return (
    <Tab.Navigator
    initialRouteName='Trang chủ'
    screenOptions={{headerShown: false}}
    >
      <Tab.Screen
        name={'Trang chủ'}
        component={HomeStack}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={HOMEICON}
              style={[styles.tabbarIcon, {tintColor: color}]}
            />
          ),
        }}
      />

      <Tab.Screen
        name={'Cài đặt'}
        component={Setting}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={SETTINGICON}
              style={[styles.tabbarIcon, {tintColor: color}]}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  tabbarIcon: {
    width: 26,
    height: 26,
  },
});