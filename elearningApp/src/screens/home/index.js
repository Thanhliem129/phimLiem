import React, { useEffect, useState } from 'react'
import { 
   View, 
   Text ,
   TouchableOpacity,
   Image,
   ScrollView,
   ImageBackground,
   FlatList,
   Animated,
   TextInput
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage';
import { Menu } from "native-base"
import Icon from 'react-native-vector-icons/Ionicons'
import {getApiProfile} from '../../redux/auth/action'
import { logOut } from '../../redux/auth/action'
import { styles } from '../../assets/css/home/_home'
import { moderateScale, width, height } from '../../utilities/size'
import { dataActionPhim, dataProductCourse } from '../../utilities/datavirtual'

const Home = ({navigation}) => {
   const dispatch = useDispatch()
   const listProfile = useSelector((store) => store.auth.listProfile)

   const [username, setUsername] = useState('')
   const [search, setSearch] = useState('')

   const getToken = async () => {
      const dataToken = await AsyncStorage.getItem('tokenKey')
      const jsonToken = JSON.parse(dataToken)
      setUsername(jsonToken.unique_name)
      // console.log(jsonToken)
    };

    useEffect(() => {
      getToken();
    }, []);

   useEffect(() => {
      dispatch(getApiProfile(username))
   },[username])
   
  
   return (
      <View style={styles.container}>
         <ScrollView>
            <ImageBackground 
               source={{uri:'https://media.istockphoto.com/photos/top-view-of-pitch-black-office-desk-with-computer-and-supplies-picture-id675715346?k=20&m=675715346&s=612x612&w=0&h=i-jPzdSiSxTc2e1j75Dlh-mIXpxTM-AHFeefLwh4vUk='}}
               resizeMode="cover"
               style={{height:height - moderateScale(45)}}
            >
               <View style={styles.mainIntro}>
                  <View style={styles.header}>
                     <Menu w="190" trigger={(triggerProps) => {
                        return (
                        <TouchableOpacity {...triggerProps} style={styles.menuBtn}>
                           <Icon name='reorder-three-outline' style={{color:'#fff'}} size={moderateScale(26)} />
                        </TouchableOpacity>
                        )
                     }} >
                        <View style={styles.profile}>
                           <Image 
                              source={{uri:'http://app.hoplong.com/Content/Images/Avatar/'+ listProfile.AVATAR}} 
                              style={styles.avatarProfile} />
                           <Text style={styles.userName}>{listProfile.HO_VA_TEN}</Text>
                        </View>
                        <Menu.Item style={styles.menu} onPress ={() => dispatch(logOut())}>
                           <Icon name='exit-outline' size={moderateScale(16)} />
                           <Text style={styles.menuItem}>
                              Logout
                           </Text>
                        </Menu.Item>
                        <Menu.Item style={styles.menu}>
                           <Icon name='md-chatbox-ellipses-outline' size={moderateScale(16)} />
                           <Text style={styles.menuItem}>
                              Phản hồi   
                           </Text>
                        </Menu.Item>
                     </Menu>
                  </View>
                  {/* <Image source={Logo} style={styles.imageLogo} /> */}
                  <Text style={styles.introTitle}>Loki Phim</Text>
                  <Text style={styles.introSubTitle}>
                     Enjoin that moment!!!
                  </Text>
                  <View style={{marginTop:moderateScale(50)}}>
                     <View style={styles.groupSearch}>
                        <TextInput 
                           style={styles.searchInput}
                           placeholder='Tìm kiếm phim'
                           onChangeText={text => setSearch(text)}
                           // onEndEditing={() => navigation.navigate('ListLesson', {name:search})}
                        />
                        <TouchableOpacity style={styles.btnSearch} onPress={() => navigation.navigate('ListLesson', {name:search})}>
                           <Icon name='ios-search-outline' style={styles.btnSearchTitle} />
                        </TouchableOpacity>
                     </View>
                     <GroupVideo
                        amount={45}
                        title='Phim hot nhất'
                        color='#009da6'
                        // onPress={() => navigation.navigate('ListLesson', {name:'Kĩ năng chuyên ngành'})}
                     />
                     <GroupVideo
                        amount={27}
                        title='Phim mới cập nhật'
                        color='#009da6'
                        // onPress={() => navigation.navigate('ListLesson', {name:'Kiến thức cần có'})}
                     />
                  </View>
               </View>
            </ImageBackground>
            <Text style={styles.courseTitle}>
               Phim hành động mới:
            </Text>
            <View style={{alignItems:'center'}}>
               <FlatList 
                  data={dataActionPhim}
                  keyExtractor={item => item.id}
                  renderItem={({item, index}) => (
                     <ActionPhim 
                        name={item.name}
                        amount={item.amount}
                        image={item.image}
                        onPress={() => navigation.navigate('ActionPhim', {name:item.name, id: item.id})}
                     />
                  )}
               />
               <TouchableOpacity style={styles.allCourse} onPress={() => navigation.navigate('ListCourse', {name:'chung'})}>
                  <View style={{flexDirection:'row', alignItems:'center'}}>
                     <Text style={styles.allCourseTitle}>Xem tất cả Phim </Text>
                     <Icon name='md-chevron-forward' style={{color:'#fff'}} size={moderateScale(16)} />
                  </View>
               </TouchableOpacity>
            </View>
            <Text style={styles.courseTitle}>
               Các khóa học riêng:
            </Text>
            <Text style={styles.courseSubTitle}>
               Sản phẩm điện dân dụng theo hãng
            </Text>
            <View style={{alignItems:'center'}}>
               <FlatList 
                  data={dataProductCourse}
                  keyExtractor={item => item.id}
                  renderItem={({item, index}) => (
                     <PrivateCourse 
                        // onPress={() => navigation.navigate('ListLesson', {name:item.title})}
                        title={item.title}
                        teacher={item.teacher}
                        image={item.image}
                        avatar={item.avatar}
                     />
                  )}
               />
               <TouchableOpacity style={styles.allCourse} onPress={() => navigation.navigate('ListCourse', {name:'riêng'})}>
                  <View style={{flexDirection:'row', alignItems:'center'}}>
                     <Text style={styles.allCourseTitle}>Xem tất cả khóa học </Text>
                     <Icon name='md-chevron-forward' style={{color:'#fff'}} size={moderateScale(16)} />
                  </View>
               </TouchableOpacity>
            </View>
         </ScrollView>
      </View>
   )
}
export default Home

const GroupVideo = (props) => {
   const {onPress, amount, title, color} = props
   return(
      <View style={[styles.btnGroupVideo,{ backgroundColor:color} ]}>
         <View style={styles.btnContentHeader}>
            <View style={{width:'20%', padding:moderateScale(15), borderEndWidth:0.5, borderEndColor:'#fff'}}>
               <Text style={styles.amountVideo}>
                  {amount}
               </Text>
            </View>
            <View style={{width:'80%',padding:moderateScale(15)}}>
               <Text style={styles.groupVideoName}>
                  {title}
               </Text>
               <TouchableOpacity onPress={onPress}>
                  <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                     <Text style={styles.groupVideoSubName}>
                        Xem đầy đủ
                     </Text>
                     <Icon 
                        name='md-chevron-forward-circle-outline' 
                        style={styles.iconMore} 
                     />
                  </View>
               </TouchableOpacity>
            </View>
         </View>
      </View>
   )
}
const ActionPhim = (props) => {
   const {onPress, name, amount, image} = props

   return(
      <View style={{
         borderRadius:moderateScale(10), 
         marginVertical:moderateScale(15)
         }}>
         <ImageBackground 
            source={{uri:image}} 
            style={styles.course} 
            resizeMode='cover'
            imageStyle={{ borderRadius: moderateScale(15)}}
         >
            <View style={styles.courseContent}>
               <TouchableOpacity onPress={onPress}>
                  <Text style={styles.nameCourse}>{name}</Text>
               </TouchableOpacity>
               <View style={{flexDirection:'row', marginTop:moderateScale(10)}}>
                  <Text style={styles.amountCourse}>Over </Text>
                  <Text style={styles.amountCourse1}>{amount}</Text>
                  <Text style={styles.amountCourse}> courses</Text>
               </View>
               
            </View>
         </ImageBackground>
      </View>
   )
}
const PrivateCourse = (props) => {
   const {onPress, title, teacher, image, avatar} = props
   return(
      <View style={styles.productCourse}>
         <ImageBackground 
            source={{uri:image}}
            style={styles.productCourseBack}   
         >
         </ImageBackground>
         <View style={styles.avatar}>
            <Image style={styles.avatarTeacher} source={{uri:avatar}}/>
            <Text style={styles.teacherName}>{teacher}</Text>
            <TouchableOpacity onPress={onPress}>
               <Text style={styles.titleProductCourse}>{title}</Text>
            </TouchableOpacity>
         </View>
      </View>
   )
}