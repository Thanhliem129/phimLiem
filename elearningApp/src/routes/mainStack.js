import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import MainTab from './mainTab'
import ListLesson from '../components/lessons/listLesson'
import LessonDetail from '../components/lessons/lessonDetail'
import ListCourse from '../components/lessons/listCourse'
import NotificationDetail from '../components/notification/notificationDetail'
import MyLesson from '../screens/myLesson'

const Stack = createStackNavigator()

const MainStack = () => {

  return (

    <Stack.Navigator screenOptions={{headerMode:'none'}}>
      <Stack.Screen name='MainTab' component={MainTab}/>

      <Stack.Screen name='ListLesson' component={ListLesson}/>
      <Stack.Screen name='LessonDetail' component={LessonDetail}/>
      <Stack.Screen name='ListCourse' component={ListCourse}/>
      <Stack.Screen name='NotificationDetail' component={NotificationDetail}/>
      <Stack.Screen name='MyLesson' component={MyLesson}/>


    </Stack.Navigator>

  )
};

export default MainStack;