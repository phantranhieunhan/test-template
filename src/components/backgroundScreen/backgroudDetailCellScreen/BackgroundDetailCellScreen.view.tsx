import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  FlatList,
  ViewStyle,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {BackgroundBig} from '../BackgroundBig';
import Ripple from 'react-native-material-ripple';
import {
  EXITICON,
  RECIEVEDICON,
  WAITINGINVOICEICONLIST,
  DELIVERYMAN,
  COMPLETEDTASK,
  FILE,
} from '../../../assets';
import styles from './BackgroundDetailCellScreen.style';
import {NavigationState, useRoute} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {mainColors} from '../../../constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
interface BackgroundDetailCellScreen {
  title: string;
  containerStyle?: ViewStyle;
  children?: any;
  navigation?: any;
  detail?: boolean;
}
export const BackgroundDetailCellScreen = (
  props: BackgroundDetailCellScreen,
) => {
  const {children, containerStyle, title, navigation, detail} = props;
  const goBack = () => {
    navigation.goBack();
  };

  useEffect(() => {});
  return (
    <BackgroundBig>
      <SafeAreaView style={{flex: 1,  }}>
        <View style={styles.header}>
          <Text style={styles.menuText}>{title}</Text>
          <Ripple style={styles.iconBack} onPress={goBack}>
            <Image source={EXITICON} style={styles.iconExit} />
          </Ripple>
        </View>
          <View style={{paddingBottom: 5, backgroundColor: 'white', flex:1}}>
            {children}
          </View>
      </SafeAreaView>
    </BackgroundBig>
  );
};
