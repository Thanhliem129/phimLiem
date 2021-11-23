import { StyleSheet } from 'react-native'
import { setting } from '../setting'
import { moderateScale, width, height } from '../../../utilities/size'

export const styles = StyleSheet.create({
   container:{
   flex:1  
   },
   background:{
      height:height
   },
   generalTitle:{
      fontSize:setting.fontDefault + 2,
      fontWeight:'bold',
      color:"#fff", 
      marginTop:moderateScale(20),
      marginBottom: moderateScale(10)
   },

   lesson:{
      width: (width - moderateScale(30) - moderateScale(20))/ 2,
      height:moderateScale(120),
      marginVertical:moderateScale(10),
      borderRadius:moderateScale(10),
      // alignItems:'center',
      justifyContent:'center',
      padding:moderateScale(20),
      marginHorizontal:moderateScale(5)
      
   },
   nameLesson:{
      color:'#fff',
      fontSize:setting.fontDefault + 4,
      textAlign:'center'
   },
   amountLesson:{
      color:'#fff',
      fontSize:setting.fontDefault,
      textAlign:'center'
   },
   playIcon:{
      color:'#fff',
      fontSize:setting.fontDefault + 6
   },
   dateLesson:{
      color:'#fff', 
      fontSize:setting.fontDefault,
      // marginTop:moderateScale(20),
      textAlign:'right'
   },
   seeMoreBtn:{
      backgroundColor:"#009da6",
      padding:moderateScale(10),
      borderRadius:moderateScale(10),
      paddingHorizontal:moderateScale(20)
   },
   seeMoreContent:{
      fontSize:setting.fontDefault,
      color:'#fff',
      marginRight:moderateScale(10)
   },
})