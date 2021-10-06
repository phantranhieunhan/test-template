import React, { useState, useEffect } from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  FlatList,
  ViewStyle,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { BackgroundBig } from '../../backgroundScreen/BackgroundBig';
import Ripple from 'react-native-material-ripple';
import {
  EXITICON,
  RECIEVEDICON,
  WAITINGINVOICEICONLIST,
  DELIVERYMAN,
  COMPLETEDTASK,
  FILE,
} from '../../../assets';
import styles from './BackgroundDetailScreen.style';
import { NavigationState, useRoute } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { mainColors } from '../../../constants';
interface BackgroundDetailScreen {
  title: string;
  containerStyle?: ViewStyle;
  children?: any;
  navigation?: any;
  detail?: boolean;
}
const Item = ({ item, onPress, borderColor }) => (
  <Ripple style={[borderColor, styles.BackgroudImage]} onPress={() => onPress(item)}>
    <Image source={item.urlImage} style={styles.urlImage} />
  </Ripple>
);
export const BackgroundDetailScreen = (props: BackgroundDetailScreen) => {
  const { children, containerStyle, title, navigation, detail } = props;
  const [selectedId, setSelectedId] = useState(null);
  const goBack = () => {
    navigation?.navigate('Home');
  };

  const functionList = [
    {
      name: '1. Chờ nhận',
      purposeName: 'Waiting',
      urlImage: WAITINGINVOICEICONLIST,
    },
    {
      name: '2. Đã nhận',
      purposeName: 'Acceptance',
      urlImage: RECIEVEDICON,
    },
    {
      name: '3. Vận chuyển',
      purposeName: 'Transportion',
      urlImage: DELIVERYMAN,
    },
    {
      name: '4. Nộp phiếu',
      purposeName: 'Submission',
      urlImage: FILE,
    },
    {
      name: '5. Hoàn tất',
      purposeName: 'Finish',
      urlImage: COMPLETEDTASK,
    },
  ];
  useEffect(() => {
    // console.log(props.route)
    const accept = navigation.addListener('focus', () => {
      setSelectedId(title);
    });
    return accept;
  });

  const renderItem = ({ item }) => {
    const borderColor = item.name === selectedId ? '#B33771' : '#f1f2f6';
    return <Item item={item} onPress={onPress} borderColor={{ borderColor }} />;
  };
  const onPress = (item) => {
    navigation.navigate(item.purposeName);
  };
  return (
    <BackgroundBig>

      <View style={styles.header}>
        <Text style={styles.menuText}>{title}</Text>
        <Ripple style={styles.iconBack} onPress={goBack}>
          <Image source={EXITICON} style={styles.iconExit} />
        </Ripple>
      </View>
      <View style={{ flex: 1}}>
        <View style={{ marginBottom: 0, backgroundColor: '#fff', flex: 1 }}>{children}</View>
        <View
          style={{
            borderColor: mainColors.whiteColor,
            borderWidth: 1,
            borderBottomColor: 'white',
            paddingLeft: 5,
            paddingRight: 5,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            backgroundColor: '#82ccdd',
          }}
        >
          <FlatList
            data={functionList}
            renderItem={renderItem}
            horizontal={true}
            keyExtractor={(item) => item.name}
            extraData={selectedId}
          />
        </View>
      </View>
    </BackgroundBig>
  );
};
