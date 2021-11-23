import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'

import Home from '../screens/home/index';
import MyLesson from '../screens/myLesson/index';
import Notification from '../screens/notification/index';

const Tab = createBottomTabNavigator();

const MainTab = () => {

  return (
    <Tab.Navigator
      initialRouteName="Home"
      shifting={true}
      screenOptions={{
        tabBarActiveTintColor: '#048ad1',
        inactiveTintColor: 'gray',
        style: {backgroundColor: 'white',},
      }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Trang chủ',
            tabBarIcon: ({color, size}) => <Icon name="ios-home" size={size} color={color}/>,
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Search"
          component={MyLesson}
          options={{
            tabBarLabel: 'Bài học của tôi',
            tabBarIcon: ({color, size}) => <Icon name="ios-book" size={size} color={color}/>,
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Notification"
          component={Notification}
          options={{
            tabBarLabel: 'Thông báo',
            tabBarIcon: ({color, size}) => <Icon name="ios-notifications" size={size} color={color}/>,
            headerShown: false,
          }}
        />
    </Tab.Navigator>
  )
};

export default MainTab;