import React from 'react'
import {
   View, 
   Text,
   TouchableOpacity,
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../header/header';
import { styles } from '../../assets/css/notification/_notificationDetail';
import { height, moderateScale } from '../../utilities/size';

const NotificationDetail = ({navigation, route}) => {
   const data = route.params
   return(
      <View style={styles.container}>
         <Header
            title={data.name}
            onPress={() => navigation.goBack()}
         />
         <View style={{
            height: height - moderateScale(50),
            alignItems:'center', 
            justifyContent:'center'
         }}>
            <Text style={styles.notificationName}>{data.name}</Text>
            <Text style={styles.notificationDesc}>{data.desc}</Text>
            
            <TouchableOpacity style={styles.btnNotification}
               onPress={() => navigation.push('MyLesson')}
            >
               <Text style={styles.btnContent}>Bài học của tôi</Text>
            </TouchableOpacity>
         </View>
      </View>
   )
}
export default NotificationDetail