import {StyleSheet} from 'react-native';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
 
import {mainColors, Fonts} from '../../constants';

 const styles = StyleSheet.create({
    MainContainer: {
      height: '100%',
      flex: 1,
      width: '100%',
    },
      header: {
        backgroundColor: 'transparent',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: wp(3),
        paddingVertical: hp(2),
      },
      iconExit: {
        width: wp(10),
        height: wp(10),
      },
      menuText: {
        color: mainColors.titleColor,
        fontSize: wp(4.5),
        fontFamily: Fonts.Roboto_Stab_Bold,
        textTransform: 'uppercase'
      },
  });

  
export default styles;