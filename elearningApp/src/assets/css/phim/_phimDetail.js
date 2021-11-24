import { StyleSheet } from 'react-native'
import { setting } from '../setting'
import { moderateScale, width, height } from '../../../utilities/size'

export const styles = StyleSheet.create({
   container:{
   flex:1  
   },
   backgroundLesson:{
      width: width - moderateScale(40),
      height: moderateScale(160)
   },
   lessonContent:{
      width: '100%',
      height: moderateScale(160),
      backgroundColor: '#00000080',
      borderRadius: moderateScale(10),
      alignItems:'center', 
      justifyContent:'center',
      paddingHorizontal: moderateScale(20)
   },
   lessonName:{
      color:'#fff',
      fontSize: setting.fontDefault + 6,
      fontWeight: 'bold',
      
   },
   lessonTitle:{
      color:'#fff',
      fontSize: setting.fontDefault + 2,
      textAlign:'center',
      marginTop:moderateScale(15)
   },
   nameVideo:{
      fontSize: setting.fontDefault + 4, 
      color:setting.textColor, 
      fontWeight:'bold'
   },
   titleVideo:{
      fontSize: setting.fontDefault, 
      fontWeight:'bold'
   }

})