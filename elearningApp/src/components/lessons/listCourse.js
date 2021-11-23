import React from 'react'
import { 
   View,
   Text,
   TouchableOpacity,
   FlatList,
   ImageBackground,
   Image,
} from 'react-native'
import Header from '../header/header'
import Icon from 'react-native-vector-icons/Ionicons'
import { dataGeneralLesson } from '../../utilities/datavirtual'
import { styles } from '../../assets/css/myLesson/_listCourse'
import { moderateScale, width, height } from '../../utilities/size'

const ListCourse = ({navigation, route}) => {
   const name = route.params.name;
   return(
      <View>
         <Header 
            title={'Danh sách khóa học ' + name} 
            onPress={() => navigation.goBack()}
         />
            <View style={{
               alignItems:'center',
               paddingBottom:moderateScale(80)
            }}>
               <FlatList 
                  data={dataGeneralLesson}
                  showsVerticalScrollIndicator={false}
                  keyExtractor={item => item.id}
                  renderItem= {({item, index}) => (
                     <Course 
                        name={item.name}
                        amount={item.amount}
                        date={item.date}
                        onPress={() => navigation.navigate('ListLesson' , {name: item.name})}
                        color='#049ad1'
                     />
                  )}
               />
            </View>
      </View>
   )
}

export default ListCourse

const Course = (props) => {
   const {name, amount, date, onPress, color} = props
   return(
      <TouchableOpacity style={[styles.course, {backgroundColor: color}]} onPress={onPress}>
         <ImageBackground 
            source={{uri:'https://wallpaper.dog/large/20497861.jpg'}}
            style={styles.backgroundLesson} 
            resizeMode='cover'
         >
            <View style={styles.blurColor}>
               <Text style={styles.nameCourse}>{name}</Text>
            </View>
         </ImageBackground>
         <View style={styles.lessonContent}>
            <View style={{
                  flexDirection:'row', 
                  alignItems:'center',
                  marginTop:moderateScale(10)
            }}>
               <Text style={styles.amountCourse}>Gồm </Text>
               <Text style={styles.amountCourse1}>{amount} </Text>
               <Text style={styles.amountCourse}>video </Text>
            </View>
            <View style={{
               flexDirection:'row', 
               justifyContent:'space-between', 
               alignItems:'center',
               marginTop:moderateScale(5)
               }}>
               <Text style={styles.amountCourse}>Cập nhật</Text>
               <Text style={styles.dateCourse}>{date}</Text>
            </View>
         </View>
      </TouchableOpacity>
   )
}