import React, {useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { NativeBaseProvider} from 'native-base'
import { checkLogin } from '../redux/auth/action'

import MainStack from './mainStack'
import Login from '../components/profile/login'

const Stack = createStackNavigator()

const AuthStack = () => {

  const dispatch = useDispatch();
  const restoring = useSelector((store) => store.auth.restoring);
  const isLoggedIn = useSelector((store) => store.auth.isLoggedIn);

  useEffect(() => {
    dispatch(checkLogin())
}, [dispatch])

  return (
    <NavigationContainer>
      <NativeBaseProvider >
        {
          !isLoggedIn ? (
            <Stack.Navigator screenOptions={{headerMode:'none'}}>
              <Stack.Screen name='Login' component={Login}/>
            </Stack.Navigator>
          )  : (
            <Stack.Navigator screenOptions={{headerMode:'none'}}>
              <Stack.Screen name='MainStack' component={MainStack}/>
            </Stack.Navigator>
          )
        }
      </NativeBaseProvider>
    </NavigationContainer>
  )
};

export default AuthStack;