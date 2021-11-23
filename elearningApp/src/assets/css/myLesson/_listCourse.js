import { StyleSheet } from 'react-native'
import { setting } from '../setting'
import { moderateScale, width, height } from '../../../utilities/size'

export const styles = StyleSheet.create({
   container:{
   flex:1  
   },
   backgroundLesson:{
      width: width - moderateScale(40),
      height:moderateScale(110),
   },
   blurColor:{
      width: width - moderateScale(40),
      height:moderateScale(110),
      backgroundColor:'#00000070',
      alignItems:'center',
      justifyContent:'center',
      paddingHorizontal:moderateScale(20)
   },
   generalTitle:{
      fontSize:setting.fontDefault + 2,
      fontWeight:'bold',
      color:"#fff", 
      marginTop:moderateScale(20),
      marginBottom: moderateScale(10)
   },

   course:{
      width: width - moderateScale(40),
      height:moderateScale(170),
      marginVertical:moderateScale(10),
   },
   lessonContent:{
      paddingHorizontal:moderateScale(15),
      justifyContent:'flex-end',
   },
   nameCourse:{
      color:"#fff",
      fontSize:setting.fontDefault + 4,
      textAlign:'center',
      fontWeight:'bold',
      marginTop:moderateScale(5)
   },
   amountCourse:{
      color:'#fff',
      fontSize:setting.fontDefault,
      textAlign:'center'
   },
   amountCourse1:{
      color:setting.backgroundWarning,
      fontSize:setting.fontDefault,
      textAlign:'center'
   },
   dateCourse:{
      color:'#fff', 
      fontSize:setting.fontDefault,
      textAlign:'right'
   },
   seeMoreBtn:{
      backgroundColor:setting.backgroundBlue,
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