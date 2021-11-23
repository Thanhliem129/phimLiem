import AsyncStorage from '@react-native-community/async-storage';
import jwt_decode from "jwt-decode";
import {callApiSignIn, callApiProfile} from '../../api/auth';
import { 
  DETAIL_PROFILE,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOGOUT,
  REQUEST_AUTH,
  SET_LOGGED_IN
 } from '../type'
const tokenKey = 'tokenKey';
import message from '../message';

export const getApiLogin = (username, password) => async dispatch => {
    await dispatch({type: REQUEST_AUTH});
    try {
        callApiSignIn(username, password)
        .then(function(res) {
            if(res.notification.indexOf('thành công') >= 0) {
                const expiresAt = {
                    expiresAt: new Date().getTime() + 86400000
                }
                const codeToken = (res.token);
                const decodeToken = jwt_decode(res.token);
                const token = JSON.stringify(Object.assign(decodeToken, expiresAt));
                const userToken = AsyncStorage.setItem(tokenKey, token);
                const userCodeToken = AsyncStorage.setItem('codeToken', codeToken)
                message('Đăng nhập thành công', 200);
                return dispatch({
                    type: LOGIN_SUCCESS,
                    token: token
                });
            } else {
                message(res.notification, 300);
                return dispatch ({
                    type: LOGIN_FAILED
                })
            }
        })
    } catch (error) {
        message(res.notification, 300);
        return dispatch ({type: LOGIN_FAILED, error});
    }
};

export const checkLogin = () => {
    return async (dispatch) => {
        let now = new Date().getTime();
        const isLoggedIn = JSON.parse(await restoreAuthStateFromStorage());
        if(isLoggedIn) {
            if(isLoggedIn.expiresAt < now) {
                removeToken()
            }
        }
        dispatch({
            type: SET_LOGGED_IN,
            isLoggedIn
        })
    }
};

const restoreAuthStateFromStorage = async () => {
    try {
        return await AsyncStorage.getItem(tokenKey);
    } catch (error) {
        return false;
    }
};

const removeToken = async () => {
    try {
        return await AsyncStorage.removeItem(tokenKey)
    } catch (error) {
        return false;
    }
}

export const logOut = () => async dispatch => {
    await AsyncStorage.removeItem(tokenKey);
    message('Đăng xuất thành công', 200);
    dispatch({type: LOGOUT})
};

export const getApiProfile = (username) => async dispatch => {
    try {
        callApiProfile(username)
        .then(function(res){
            return dispatch({type: DETAIL_PROFILE, profile: res});
        })
    } catch (error) {
        console.log(error);
    }
}
