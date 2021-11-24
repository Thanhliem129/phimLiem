import React from 'react'
import { 
   View,
   Text,
   TouchableOpacity,
   ImageBackground,
   FlatList,
} from 'react-native'
import Header from '../../header/header'
import { styles } from '../../../assets/css/phim/_actionPhim'
import { dataActionPhim } from '../../../utilities/datavirtual'
import { moderateScale, width } from '../../../utilities/size'


const ActionPhim = ({navigation, route}) => {
   const data = route.params;
   return(
      <View>
         <Header 
            title={data.name} 
            onPress={() => navigation.goBack()}
         />
         <View style={{
            alignItems:'center',
            paddingBottom:moderateScale(80)
            }}>
               {
                  dataActionPhim.map((item, index) => (
                     index == data.id &&
                     <FlatList 
                        data={item.children}
                        keyExtractor={item => item.id}
                        showsVerticalScrollIndicator={false}
                        renderItem= {({item, index}) => (
                           <Phim
                              name={item.name}
                              thumnail={item.thumnail}
                              onPress= {() => navigation.navigate('PhimDetail', {
                                 name: item.name,
                                 videoUri:item.videoUri,
                                 videoId:item.id,
                                 id : data.id
                              })}
                           />
                        )}
                     />
                  ))
               }
            
         </View>
      </View>
   )
}

export default ActionPhim

const Phim = (props) => {
   const {thumnail, name, onPress} = props
   return(
      <TouchableOpacity style={{
         width: width - moderateScale(40),
         marginVertical:moderateScale(10),
         borderRadius:moderateScale(10)
         }}
         onPress= {onPress}
      >
         <ImageBackground
            source={{uri:thumnail}}
            style={styles.backgroundLesson} 
            resizeMode='cover'
            imageStyle={{
               borderRadius:moderateScale(10)
            }}
         >
            <View style={styles.lessonContent}>
               <Text style={styles.lessonName} numberOfLines={1}>{name}</Text>
            </View>

         </ImageBackground>
      </TouchableOpacity>
   )
}