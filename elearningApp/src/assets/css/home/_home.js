import { StyleSheet } from 'react-native'
import { setting } from '../setting'
import { moderateScale, width, height } from '../../../utilities/size'


export const styles = StyleSheet.create({
   container: {
      flex: 1
   },
   header: {
      justifyContent:'flex-end',
      alignItems:'center',
      paddingVertical:moderateScale(5),
      flexDirection:'row',
      backgroundColor:'transparent',
      position:'absolute',
      top:0,
      width: width
   },
   profile:{
      alignItems:'center', 
      padding:moderateScale(10),
      borderBottomWidth:0.5,
      borderBottomColor:'#ccc'
   },
   userName:{
      fontSize:setting.fontDefault,
      color:'#444',
      textAlign:'center'
   },
   avatarProfile:{
      height:moderateScale(45),
      width:moderateScale(45),
      borderWidth:1,
      borderColor:'#049ad1',
      borderRadius:moderateScale(35)
   },
   menuBtn:{
      margin:moderateScale(15),
      alignItems:'center',
      justifyContent:'center',
      width:moderateScale(35),
      height:moderateScale(30),
      borderWidth:1,
      borderColor:'#fff',
      borderRadius:moderateScale(5)
   },
   imageLogo: {
      width:moderateScale(175),
      height:moderateScale(125),
      marginBottom:moderateScale(15)
   },
   menu:{
      flexDirection:'row',
      alignItems:"center"
   },
   menuItem:{
      marginLeft:moderateScale(5)
   },
   mainIntro:{
      alignItems:'center',
      justifyContent:'center',
      height: height - moderateScale(45),
      backgroundColor:'#00000020',
      position:'relative'
   },
   introTitle:{
      fontSize:setting.fontDefault + 38,
      color:'white',
      fontWeight:'bold'
   },
   introSubTitle:{
      fontSize:setting.fontDefault + 10,
      color:'white',
      textAlign:'center',
      // marginBottom:moderateScale(30)
   },
   groupSearch:{
      marginBottom:moderateScale(10),
      flexDirection:'row',
      alignItems:'center'
   },
   searchInput:{
      width:width - moderateScale(40) - moderateScale(60),
      backgroundColor:'#fff', 
      paddingLeft:moderateScale(20),
      borderBottomLeftRadius:moderateScale(40),
      borderTopLeftRadius:moderateScale(40),
      height:moderateScale(45),
      fontSize:setting.fontDefault,
   },
   btnSearch:{
      width:moderateScale(60),
      backgroundColor:"#009da6",
      borderBottomRightRadius:moderateScale(40),
      borderTopRightRadius:moderateScale(40),
      height:moderateScale(45),
      alignItems:'center',
      justifyContent:'center',
   },
   btnSearchTitle:{
      fontSize:setting.fontDefault + 8,
      color:'#fff'
   },
   btnGroupVideo:{
      width:width - moderateScale(40),
      borderRadius:moderateScale(10),
      marginVertical:moderateScale(10)
   },
   btnContentHeader:{
      flexDirection:'row',
      alignItems:'center',
   },
   amountVideo:{
      textAlign:'center',
      fontSize:setting.fontDefault + 10,
      fontWeight:'bold',
      color:'white'
   },
   groupVideoName:{
      fontSize:setting.fontDefault + 5,
      color:'white'
   },
   groupVideoSubName:{
      fontSize:setting.fontDefault,
      color:'white'
   },
   iconMore:{
      color:'#fff',
      fontSize: setting.fontDefault + 2,
      marginLeft:moderateScale(15)
   },
   courseTitle:{
      marginTop:moderateScale(20),
      textAlign:'center',
      fontSize:setting.fontDefault + 4,
      color:setting.textColor,
      fontWeight:'bold'
   },
   courseSubTitle:{
      // marginLeft:moderateScale(20),
      textAlign:'center',
      fontSize:setting.fontDefault ,
      marginBottom: moderateScale(10),
      letterSpacing: 2
   },
   course:{
      width:width - moderateScale(40),
      height:moderateScale(150),
   },
   courseContent:{
      height:moderateScale(150),
      backgroundColor:'#00000099',
      alignItems:'center',
      justifyContent:'center',
      borderRadius:moderateScale(15)
   },
   nameCourse:{
      fontSize:setting.fontDefault + 4,
      color:"#fff",
      letterSpacing:3
   },
   amountCourse:{
      fontSize:setting.fontDefault,
      color:'#fff',
      letterSpacing:2
      
   },
   amountCourse1:{
      fontSize:setting.fontDefault,
      color:setting.backgroundWarning,
      letterSpacing:2
   },
   allCourse:{
      backgroundColor:'#009da6',
      padding:moderateScale(10),
      marginVertical:moderateScale(10),
      paddingHorizontal:moderateScale(30),
      borderRadius:moderateScale(30)
   },
   allCourseTitle:{
      color:'#ffffff',
      fontSize:setting.fontDefault
   },

   // product course
   productCourse:{
      height: moderateScale(260),
      width: width - moderateScale(20),
      marginVertical:moderateScale(10),
      borderWidth:0.5,
      borderColor:'#ccc',
   },
   productCourseBack:{
      height: moderateScale(160),
      width: width - moderateScale(20)
   },
   avatar:{
      alignItems:'center',
      zIndex:10
   },
   avatarTeacher:{
      height:moderateScale(70),
      width:moderateScale(70), 
      marginTop:moderateScale(-35),
      borderRadius:moderateScale(35),
      borderWidth:2,
      borderColor:'#fff'
   },
   teacherName:{
      fontSize:setting.fontDefault
   },
   titleProductCourse:{
      fontSize: setting.fontDefault + 2,
      color: setting.textColor,
      fontWeight:'bold',
      zIndex:10,
      marginTop:moderateScale(10)
   }

})