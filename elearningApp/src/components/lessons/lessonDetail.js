import React, { useEffect, useState } from 'react'
import { 
   View,
   Text,
   TouchableOpacity,
   FlatList,
   ImageBackground,
   Dimensions
} from 'react-native'
import Header from '../header/header'
import YouTube from 'react-native-youtube';
import { moderateScale, width, height } from '../../utilities/size'
import { dataLesson } from '../../utilities/datavirtual';
import { styles } from '../../assets/css/myLesson/_lessonDetail';


const LessonDetail = ({navigation, route}) => {
   const data = route.params;
   const [customWidth, setCustomWidth] = useState(width)

   const onLayout = () => {
      let width1 = Dimensions.get('window').width;
      let height1 = Dimensions.get('window').height;
      if(width1 < height1){
         setCustomWidth(width1)
      }
      else{
         setCustomWidth(width1)
      }
    }
   // console.log(route.params)
   return(
      <View onLayout={onLayout}>
         <Header 
            title={data.name}
            onPress={() => navigation.goBack()}
         />
         <View style={{
            alignItems:'center'
         }}>
            <View style={{
               width:customWidth,
               height:moderateScale(280)
            }}>
               <YouTube
                  controls={1}
                  videoId={"dhYOPzcsbGM"} // The YouTube video ID
                  apiKey='AIzaSyAj4ExVey3wAcVYQsfEujtC1HbL6uYldkA'
                  style={{
                     width:customWidth,
                     height:moderateScale(220)
                   }}
                  />
               <View style={{
                  paddingHorizontal:moderateScale(20),
                  marginTop:moderateScale(5)
               }}>
                  <Text style={styles.nameVideo}>{data.name}</Text>
                  <Text style={styles.titleVideo}>{data.title}</Text>
               </View>
            </View>
            <View style={{
               height:height - moderateScale(280),
               paddingBottom:moderateScale(40)
            }}>
               <FlatList 
                  data={dataLesson}
                  keyExtractor={item => item.id}
                  renderItem={({item, index}) => (
                     index != data.lesson &&
                     <Lesson
                        name={item.name}
                        title= {item.title}
                        onPress={() => navigation.navigate('LessonDetail', {
                           lesson: index, 
                           name: item.name,
                           title: item.title
                        })}
                     />
                  )}
               />
            </View>
            
         </View>
      </View>
   )
}

export default LessonDetail

const Lesson = (props) => {
   const {name, title, onPress} = props
   return(
      <TouchableOpacity style={{
         width: width - moderateScale(40),
         marginVertical:moderateScale(10),
         borderRadius:moderateScale(10)
         }}
         onPress= {onPress}
      >
         <ImageBackground
            source={{uri:'https://media.istockphoto.com/photos/business-and-education-background-picture-id671101136?k=20&m=671101136&s=170667a&w=0&h=IRW440E5O4UWMO0wRHdkTaNgdO6DzD_VnEqzJ-XAl0M='}}
            style={styles.backgroundLesson} 
            resizeMode='cover'
            imageStyle={{
               borderRadius:moderateScale(10)
            }}
         >
            <View style={styles.lessonContent}>
               <Text style={styles.lessonName} numberOfLines={1}>{name}</Text>
               <Text style={styles.lessonTitle} numberOfLines={2}>{title}</Text>
            </View>

         </ImageBackground>
      </TouchableOpacity>
   )
}