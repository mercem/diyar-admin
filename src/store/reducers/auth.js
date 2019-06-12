import {
  LOGIN_SUCCESS,
  LOGOUT
} from '../actionTypes';

const initialState = {
  user: null,
  token: null,
  details: {}
}

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.user,
        token: action.token
      }
    case LOGOUT:
      return {
        ...state,
        user: null,
        token: null
      }
    default:
      return state;
  }
}

export default authReducer;