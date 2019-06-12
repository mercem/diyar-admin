import {
  GET_ALL_MODELS_REQUEST,
  GET_ALL_MODELS_SUCCESS,
  GET_ALL_MODELS_FAIL,
} from '../actionTypes'
import api from '../../config/api';
import axios from '../../config/axios-instance';

const getAllModelsRequest = () => {
  return {
    type: GET_ALL_MODELS_REQUEST
  }
}

const getAllModelsSuccess = (models) => {
  return {
    type: GET_ALL_MODELS_SUCCESS,
    models
  }
}

const getAllModelsFail = () => {
  return {
    type: GET_ALL_MODELS_FAIL
  }
}

export const getAllModels = () => {
  return dispatch => {
    dispatch(getAllModelsRequest());
    return axios.get(api.getAllModels)
      .then(res => {
        dispatch(getAllModelsSuccess(res.data));
      })
      .catch(error => {
        dispatch(getAllModelsFail);
      })
  }
}