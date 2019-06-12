import axios from 'axios';
import {baseURL} from './environment';
import {logout} from '../store/actions';

const instance = axios.create({
  baseURL,
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }
})

export const setInterceptors = store => {
  instance.interceptors.request.use( request => {
      const token = store.getState().auth.token || null;
      request.headers['x-auth'] = token;
      if(request.method === 'post') {
        if(!request.data) request.data = {};
        request.data['platform'] = 'WEB';
        request.data['locale'] = 'tr';
      } else if(request.method === 'get') {
        if(!request.params) request.params = {};
        request.params['platform'] = 'WEB';
        request.params['locale'] = 'tr';
      }
      return request;
    }, error => error
  )

  instance.interceptors.response.use(
    response => response,
    error => {
      if(error.response && error.response.status === 401) {
        store.dispatch(logout());
      }
      return Promise.reject(
        error.response && 
        error.response.data && 
        error.response.data.error_description ?
        {
          ...error.response.data,
          message: error.response.data.error_description
        } : error
      )
    }
  )
};

export default instance;