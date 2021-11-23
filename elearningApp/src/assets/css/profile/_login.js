import {
   StyleSheet
} from 'react-native';
import { moderateScale,height } from '../../../utilities/size';
import { setting } from '../setting';

export const styles = StyleSheet.create({
   container:{
      flex:1,
      alignContent:'center',
      justifyContent:'center',
      backgroundColor:'#fff',
   },
   loginTop:{
      marginTop:moderateScale(20),
      marginBottom:moderateScale(20),
      alignItems:'center'
   },
   imageLogo:{
      width:moderateScale(200),
      height:moderateScale(150)
   },
   loginTitle:{
      color:'black',
      fontSize:28,
      fontWeight:'bold',
      marginBottom:moderateScale(5)
   },
   loginSubTitle:{
      fontSize:setting.fontDefault,
      color:setting.backgroundBlue
   },
   loginForm:{
      backgroundColor:'white',
      padding:moderateScale(20),
      paddingVertical:moderateScale(40),
      marginHorizontal:moderateScale(20),
      borderRadius:moderateScale(10),
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.8,
      shadowRadius: 2,  
      elevation: 3,
      marginVertical:moderateScale(10),
   },
   inputForm:{
      marginVertical:moderateScale(15)
   },
   loginInput:{
      borderBottomWidth:1, 
      borderBottomColor:'#ccc', 
      padding:0,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical:moderateScale(5),
      paddingLeft:moderateScale(5),
      fontSize:setting.fontDefault
   },
   btnEye: {
      position: 'absolute',
      top: moderateScale(25),
      right: moderateScale(10),
      color: 'red',
    },
   losePassword:{
      color:setting.backgroundBlue,
      textAlign:'right',
   }, 
   loginBtn:{
      backgroundColor:setting.backgroundBlue,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      padding:moderateScale(15),
      borderRadius:moderateScale(5),
      marginTop:moderateScale(30)
   },
   signUpBtn:{
      backgroundColor:'#fff',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      padding:moderateScale(15),
      borderRadius:moderateScale(5),
      marginTop:moderateScale(30),
      borderWidth:0.5
   },
   loginBtnTitle:{
      fontSize:setting.fontDefault+2,
      color:'white',
      fontWeight:'bold'
   },
   signUpBtnTitle:{
      fontSize:setting.fontDefault+2,
      // color:setting.textColor,
      fontWeight:'bold'
   },
   loginMethod:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      width:'100%',
      marginBottom:moderateScale(10)
   },
   loginMethodBtn:{
      width:'45%',
      borderWidth:1,
      padding:moderateScale(10),
      borderColor:'#ccc',
      borderRadius:moderateScale(5),
      justifyContent:'center',
      flexDirection:'row'
   },
   loginMethodTitle:{
      textAlign:'center',
      fontWeight:'bold',
   },
   imageIcon:{
      width:moderateScale(20),
      height:moderateScale(20),
      marginRight:moderateScale(10)
   }
})