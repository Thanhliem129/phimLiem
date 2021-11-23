import { StyleSheet } from 'react-native';
import { moderateScale } from '../../../utilities/size';
import { setting } from '../setting';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconAdd: {
    color: '#fff',
    marginLeft:moderateScale(10)
  },
  content: {
    alignItems: 'center',
    color: 'white',
    left: moderateScale(-20),
  },
  header: {
    shadowColor: '#000',
    flexDirection: 'row',
    shadowOffset: {width: 1, height: 3},
    shadowOpacity: Platform.OS === 'ios' ? 0 : 0.2,
    backgroundColor: setting.backgroundBlue,
    elevation: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    zIndex: 99,
    height:moderateScale(40)
  },
  menu:{
    flexDirection:'row',
    alignItems:"center"
  },
  menuItem:{
    marginLeft:moderateScale(5)
  }
}) 