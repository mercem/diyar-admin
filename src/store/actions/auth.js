import {
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGOUT
} from '../actionTypes';
import api from '../../config/api';
import axios from '../../config/axios-instance';
// SHOW NOTIFICATION WILL BE ADDED

const loginRequest = () => {
  return {
    type: LOGIN_REQUEST
  }
}

const loginSuccess = (token, user) => {
  return {
    type: LOGIN_SUCCESS,
    token,
    user
  }
}

const loginFail = () => {
  return {
    type: LOGIN_FAIL
  }
}

export const login = (creds) => {
  return dispatch => {
    dispatch(loginRequest());
    return axios.post(api.login, {...creds})
      .then(res => {
        dispatch(loginSuccess(res.data.token, res.data.user));
        localStorage.setItem('user', JSON.stringify(res.data.user)); // Difference?
        localStorage.setItem('token', res.data.token);
        return true;
      })
      .catch(error => {
        dispatch(loginFail);
      })
  }
}

export const autoLogin = () => {
  return dispatch => {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = localStorage.getItem('token');
    if(user && token) {
      dispatch(loginSuccess(token, user));
    }
  }
}

const logoutSuccess = () => {
  return {
    type: LOGOUT
  }
}

export const logout = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('token');
  return logoutSuccess();
}