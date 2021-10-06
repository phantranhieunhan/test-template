import {StyleSheet} from 'react-native';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
 
import {mainColors, Fonts} from '../../../constants';

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
        paddingVertical: hp(1.5),
      },
      iconExit: {
        width: wp(6),
        height: wp(6),
      },
      iconAvatar: {
        width: wp(7),
        height: wp(7),
      },
      menuText: {
        marginLeft:10,
        color: mainColors.titleColor,
        fontSize: wp(4.3),
        fontWeight: '600',
        fontFamily: Fonts.Roboto_Stab_Bold,
        textTransform: 'uppercase'
      },
  });

  
export default styles;