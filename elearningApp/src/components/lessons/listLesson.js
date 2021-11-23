import React from 'react'
import { 
   View,
   Text,
   TouchableOpacity,
   ImageBackground,
   FlatList,
} from 'react-native'
import Header from '../header/header'
import { styles } from '../../assets/css/myLesson/_listLesson'
import { dataLesson } from '../../utilities/datavirtual'
import { moderateScale, width } from '../../utilities/size'


const ListLesson = ({navigation, route}) => {
   const name = route.params.name;
   return(
      <View>
         <Header 
            title={name} 
            onPress={() => navigation.goBack()}
         />
         <View style={{
            alignItems:'center',
            paddingBottom:moderateScale(80)
            }}>
            <FlatList 
               data={dataLesson}
               keyExtractor={item => item.id}
               showsVerticalScrollIndicator={false}
               renderItem= {({item, index}) => (
                  <Lesson
                     name={item.name}
                     title={item.title}
                     onPress= {() => navigation.navigate('LessonDetail', {
                        lesson: index, 
                        name: item.name,
                        title: item.title
                     })}
                  />
               )}
            />
         </View>
      </View>
   )
}

export default ListLesson

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