import { StyleSheet } from  'react-native'
import { setting } from '../setting';
import { moderateScale, width } from '../../../utilities/size';
export const styles = StyleSheet.create({
   container:{
      backgroundColor: '#f4f4f4',
      flex: 1
   },
   rowFront:{
      borderBottomWidth: 1,
      borderBottomColor: "#ccc",
   },
   rowFrontVisible:{
      backgroundColor: '#fff',
      padding: 10,
      minHeight: moderateScale(130)
   },
   iconLeft:{
      alignItems: 'center',
      justifyContent: 'center',
      width: moderateScale(60),
      height: moderateScale(60),
      borderWidth: 1,
      borderColor: '#048ad1',
      borderRadius: moderateScale(30)
   },
   notContent:{
      width: width - moderateScale(80),
      marginRight: moderateScale(20),
      padding: moderateScale(10)
   },
   rowBack:{
      alignItems: 'center',
      backgroundColor: '#f4f4f4',
      minHeight: moderateScale(130),
      flex: 1,
      maxHeight: moderateScale(130),
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: setting.pDefault,
      marginBottom: moderateScale(15),
      borderRadius: 5,
   },
   backRightBtn: {
      alignItems: 'center',
      bottom: 0,
      maxHeight: moderateScale(130),
      minHeight: moderateScale(130),
      justifyContent: 'center',
      position: 'absolute',
      width: moderateScale(75),
   },
   backRightBtnLeft: {
      backgroundColor: setting.backgroundBlue,
      right: moderateScale(75),
      maxHeight: moderateScale(130),
      minHeight: moderateScale(130),
   },
   backRightBtnRight: {
      backgroundColor: setting.backgroundDanger,
      right: 0,
      maxHeight: moderateScale(130),
      minHeight: moderateScale(130),
   },
   trash: {
      height: moderateScale(25),
      width: moderateScale(25),
      marginRight: 7,
   },
   title:{
      fontSize: setting.fontDefault + 2,
      fontWeight: 'bold',
      marginBottom: 5,
      color: setting.textColor, 
   },
   details: {
      fontSize: setting.fontDefault, 
      color: setting.textColor
   },
   date:{
      color: '#888',
      fontSize: setting.fontDefault - 2,
      marginTop: moderateScale(5)
   },
   notTop:{
      backgroundColor: '#fff',
      padding: setting.pDefault,
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
   },
   checkAllText: {
      textAlign: 'right',
      fontSize: setting.fontDefault,
      color: setting.backgroundBlue
   }
})