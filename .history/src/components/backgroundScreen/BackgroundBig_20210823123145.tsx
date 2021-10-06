import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
export const BackgroundBig = (props: any) => {
  const {children, containerStyle} = props;
  return (
    <View style={{flex: 1}}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        locations={[0.1, 0.55, 1]}
        colors={['#65FFB7', '#75FECD', '#69F9FF']}
        style={styles.MainContainer}>
        {children}
      </LinearGradient>
    </View>
  );
};
const styles = StyleSheet.create({
  MainContainer: {
    height: '100%',
    flex: 1,
    width: '100%',
  },
});
