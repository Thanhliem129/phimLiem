import { 
//   INFO_USER,
  DETAIL_PROFILE,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOGOUT,
  REQUEST_AUTH,
  SET_LOGGED_IN 
} from '../type'
import {REHYDRATE} from 'redux-persist';

const initialState = {
  isLoggedIn: false,
  restoring: true,
  err: null,
  isLoading: true,
  listProfile: []
}

const auth = ( state = initialState, action ) => {
  switch (action.type) {
    case REHYDRATE: {
        if(!action.payload || !action.payload.auth) {
            return state;
        }
        return {...action.payload.auth, isLoading: false}
    }
    case REQUEST_AUTH:
        return {
            ...state,
            restoring: false
        };
    case LOGIN_SUCCESS:
        return {
            ...state,
            isLoggedIn: true,
            restoring: false,
        };
    case LOGIN_FAILED: 
        return {
            ...state,
            restoring: false,
            err: action.err
        };
    case SET_LOGGED_IN:
        return {
            ...state,
            restoring: false,
            isLoggedIn: action.isLoggedIn
        };
    case LOGOUT:
        return {
            ...state,
            isLoggedIn: false
        };
    case DETAIL_PROFILE:
        return{
            ...state,
            isLoading: false,
            listProfile: action.profile
        }
    default:
        return state;
}
}

export default auth