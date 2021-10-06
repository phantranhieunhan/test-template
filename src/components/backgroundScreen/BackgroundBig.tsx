import React from 'react';
import {View, StyleSheet, Image, SafeAreaView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { mainColors } from '../../constants';
export const BackgroundBig = (props: any) => {
  const {children, containerStyle} = props;
  return (
    <SafeAreaView style={{flex: 1}}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        locations={[0.1, 0.55, 1]}
        colors={['#fff', '#fff', '#fff']}
        style={styles.MainContainer}>
        {children}
      </LinearGradient>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor:mainColors.greenscolor
  },
});
