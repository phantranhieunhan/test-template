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
        backgroundColor: '#20bf6b',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: wp(3),
        paddingVertical: hp(1.5),
      },
      iconExit: {
        width: wp(4),
        height: wp(4),
      },
      iconBack:{
        marginRight:5,
      },
      menuText: {
        color: mainColors.titleColor,
        fontSize: wp(4.3),
        fontFamily: Fonts.Roboto_Stab_Bold,
        fontWeight:'bold',
        textTransform: 'uppercase'
      },
      urlImage: {
        width: wp(9),
        height: wp(9),
      },
      floatting_butotn: {
        width: 20,
        height: 20,
        borderRadius: 30,
        backgroundColor: 'black',
        position: 'absolute',
        bottom: 10,
        right: 10,
      },
      BackgroudImage: {
        height: 50, 
        width: 50, 
        marginHorizontal: 10, 
        alignItems: 'center', 
        justifyContent: 'center', 
        marginVertical: 5, 
        borderRadius: 10, 
        borderWidth: 2,
        elevation: 2,
        backgroundColor:'#69F9FF'},
  });

  
export default styles;