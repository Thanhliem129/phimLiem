import React from 'react';
import { 
   View, 
   Text, 
   ScrollView, 
   ImageBackground,
   FlatList,
   TouchableOpacity
} from 'react-native'
import { moderateScale, width, height } from '../../utilities/size';
import Icon from 'react-native-vector-icons/Ionicons'
import { styles } from '../../assets/css/myLesson/_myLesson';
import { dataGeneralLesson } from '../../utilities/datavirtual';
import { NavigationContainer } from '@react-navigation/native';
import { backgroundColor } from 'styled-system';

const MyLesson = ({navigation}) => {
   return (
      <View style={styles.container}>
         <ImageBackground 
            source={{uri:'https://wallpaper.dog/large/20497861.jpg'}} 
            style={styles.background}
            resizeMode={'cover'} 
            imageStyle={{
               width:width, 
               height:height
            }}
            blurRadius={8}
         >
            <ScrollView style={{backgroundColor:'#00000050', paddingHorizontal:moderateScale(15)}}> 
               <Text style={styles.generalTitle}>
                  Xem gần đây:
               </Text>
               <Lesson 
                  name='Kĩ năng chào hỏi khách hàng'
                  date='21/11/2021'
                  amount='10'
                  color='#049ad1'
                  onPress={() => navigation.navigate('ListLesson', {name:'Kĩ năng chào hỏi khách hàng'})}
               />

               <Text style={styles.generalTitle}>
                  Khóa học chung
               </Text>
               <View style={{paddingBottom:moderateScale(20)}}>
                  <FlatList 
                     data={dataGeneralLesson}
                     keyExtractor={item => item.id}
                     horizontal={false}
                     numColumns={2}
                     renderItem={({item, index}) => (
                        <Lesson 
                           name={item.name}
                           date={item.date}
                           amount={item.amount}
                           color='#049ad1'
                           onPress={() => navigation.navigate('ListLesson', {name:item.name})}
                        />
                     )}
                  />
                  <View style={{alignItems:'center'}}>
                     <TouchableOpacity style={styles.seeMoreBtn} onPress={() => navigation.navigate('ListCourse', {name:'chung'})}>
                        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                           <Text style={styles.seeMoreContent}>
                              Xem thêm 
                           </Text>
                           <Icon 
                              name='arrow-forward-outline' 
                              color='#fff' 
                              size={moderateScale(18)} />
                        </View>
                     </TouchableOpacity>
                  </View>
                  
               </View>
               <Text style={styles.generalTitle}>
                  Khóa học riêng
               </Text>
               <View style={{paddingBottom:moderateScale(70)}}>
                  <FlatList 
                     data={dataGeneralLesson}
                     keyExtractor={item => item.id}
                     horizontal={false}
                     numColumns={2}
                     renderItem={({item, index}) => (
                        <Lesson 
                           name={item.name}
                           date={item.date}
                           amount={item.amount}
                           color='#049ad1'
                           onPress={() => navigation.navigate('ListLesson', {name:item.name})}
                        />
                     )}
                  />
                  <View style={{alignItems:'center'}}>
                     <TouchableOpacity style={styles.seeMoreBtn} onPress={() => navigation.navigate('ListCourse', {name:'riêng'})}>
                        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                           <Text style={styles.seeMoreContent}>
                              Xem thêm 
                           </Text>
                           <Icon 
                              name='arrow-forward-outline' 
                              color='#fff' 
                              size={moderateScale(18)} />
                        </View>
                        
                     </TouchableOpacity>
                  </View>
                  
               </View>
               
            </ScrollView>
         </ImageBackground>
      </View>
   )
}
export default MyLesson

const Lesson = (props) => {
   const {name, amount, date, onPress, color} = props
   return(
      <TouchableOpacity style={[styles.lesson, {backgroundColor: color}]} onPress={onPress}>
         <Text style={styles.nameLesson}>{name}</Text>
         <View style={{
            flexDirection:'row', 
            justifyContent:'space-between', 
            alignItems:'center',
            marginTop:moderateScale(20)
            }}>
            <View style={{flexDirection:'row'}}>
               <Text style={styles.amountLesson}>{amount} </Text>
               <Icon name='play-outline' style={styles.playIcon} />
            </View>
            <Text style={styles.dateLesson}>{date}</Text>
         </View>
      </TouchableOpacity>
   )
}
