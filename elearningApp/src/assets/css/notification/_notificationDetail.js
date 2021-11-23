import { StyleSheet } from  'react-native'
import { setting } from '../setting';
import { moderateScale, width } from '../../../utilities/size';
export const styles = StyleSheet.create({
   container:{
      backgroundColor: '#f4f4f4',
      flex: 1
   },
   notificationName:{
      fontSize:setting.fontDefault + 10,
      textAlign:'center',
      fontWeight:'bold',
      color:setting.textColor
   },
   notificationDesc:{
      fontSize:setting.fontDefault + 4,
      textAlign:'center',
      marginTop:moderateScale(20)
   },
   btnNotification:{
      backgroundColor: '#009da6',
      padding:moderateScale(10),
      paddingHorizontal:moderateScale(20),
      marginTop:moderateScale(20),
      borderRadius: moderateScale(20),
      
   },
   btnContent:{
      color:'#fff',
      textAlign:'center'
   }
})