import React, {useState} from 'react';
import { useForm, Controller } from "react-hook-form";
import {useDispatch} from 'react-redux';
import {
   View,
   Text,
   TextInput,
   TouchableOpacity,
   ScrollView,
   KeyboardAvoidingView,
   Image,
   Alert
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Ionicons'
import Logo from '../../assets/images/logo_hoplong.png'
import {getApiLogin} from '../../redux/auth/action';
import { styles } from '../../assets/css/profile/_login';
import { setting } from '../../assets/css/setting';

const Login = ({navigation}) => {
   const dispatch = useDispatch();
   const { control, handleSubmit, formState: { errors } } = useForm();

   const [showPass, setShowPass] = useState(true);

   const onSubmit = (data) => {
      dispatch(getApiLogin(data.username, data.password));
      console.log(data)
   }

   return(
      <KeyboardAvoidingView style={{flex:1}}>
         <View style={styles.container}>
            <ScrollView>
               <View style={styles.loginTop}>
                  <Animatable.Image
                     animation='fadeIn'
                     duration={1000}
                     style={styles.imageLogo}
                     source={Logo} />
                  <Animatable.Text animation='fadeInDown' duration={500} delay={1000} style={styles.loginSubTitle}>
                     Always Ready To Be Different
                  </Animatable.Text>
               </View>
               <View style={styles.loginForm}>
                  <View style={styles.inputForm}>
                     <Text style={{fontSize:setting.fontDefault}}>Email/ Số điện thoại</Text>
                     <Controller control={control} rules={{ required: true }}
                        render={({ field: { onChange, onBlur, value } }) => (
                           <TextInput
                              style={styles.loginInput}
                              onBlur={onBlur}
                              onChangeText={onChange}
                              value={value}
                           />
                        )}
                        name="username"
                        defaultValue=""
                     />
                     {errors.username && <Text>This is required.</Text>}
                  </View>
                  <View style={styles.inputForm}>
                     <Text style={{fontSize:setting.fontDefault}}>Mật khẩu</Text>
                     <Controller control={control} rules={{ required: true }}
                        render={({ field: { onChange, onBlur, value } }) => (
                           <TextInput
                              style={styles.loginInput}
                              onBlur={onBlur}
                              onChangeText={onChange}
                              value={value}
                              secureTextEntry={showPass}
                              placeholder={'Password'}
                           />
                        )}
                        name="password"
                        defaultValue=""
                     />
                     {errors.password && <Text>This is required.</Text>}
                     <TouchableOpacity
                        style={styles.btnEye}
                        onPress={() => setShowPass(!showPass)}>
                           {showPass ? (  <Icon name={'ios-eye-outline'} size={24} color={'#000'} />) 
                           : 
                        (  <Icon name={'ios-eye-off-outline'} size={24} color={'#000'}/>)}
                     </TouchableOpacity>
                  </View>
                  <View>
                     <TouchableOpacity style={styles.loginBtn} onPress={handleSubmit(onSubmit)}>
                        <Text style={styles.loginBtnTitle}>Đăng nhập</Text>
                     </TouchableOpacity>
                  </View>
               </View>
            </ScrollView>
         </View>
      </KeyboardAvoidingView>
   )
}

export default Login;
