import React from 'react';
import {View, Image, Text, ScrollView, FlatList, ViewStyle, TouchableOpacity} from 'react-native';
import {BackgroundBig} from '../BackgroundBig';
import Ripple from 'react-native-material-ripple';
import {EXITICON} from '../../assets';
import styles from './BackgroundDetailScreen.style';
import {NavigationState} from '@react-navigation/native';
interface BackgroundDetailScreen {
  title: string;
  containerStyle?: ViewStyle;
  children?: any;
  navigation?: any;
}
export const BackgroundDetailScreen = (props: BackgroundDetailScreen) => {
  const {children, containerStyle, title, navigation} = props;
  const goBack = () => {
    // console.log(navigation);
    navigation?.goBack();
  };

  const functionList = [
    {
      name: '1. Chờ nhận',
      purposeName: 'Waiting',
    },
    {
      name: '2. Đã nhận',
      purposeName: '',
    },
    {
      name: '3. Vận chuyển',
      purposeName: '',
    },
    {
      name: '4. Nộp phiếu',
      purposeName: '',
    },
    {
      name: '5. Hoàn tất',
      purposeName: '',
    },
  ];
  const onPress =(item)=>{
    navigation.navigate(item.purposeName)
  }
  return (
    <BackgroundBig>
      <View style={styles.header}>
        <Text style={styles.menuText}>{title}</Text>
        <Ripple style={styles.iconBack} onPress={goBack}>
          <Image source={EXITICON} style={styles.iconExit} />
        </Ripple>
      </View>
      <ScrollView style={{backgroundColor: 'white', padding: 10}}>
        {children}
      </ScrollView>
      <View>
      <FlatList
        data={functionList}
        renderItem={({item, index}) => (
          <TouchableOpacity onPress={()=>onPress(item)}>
            <Text style={{color: 'black',margin: 10}}>{item.name}</Text>
          </TouchableOpacity>
        )}
        horizontal = {true}
        keyExtractor={item => item.name}/>
      </View>
    </BackgroundBig>
  );
};
