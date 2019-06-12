import {
  GET_ALL_MODELS_SUCCESS
} from '../actionTypes';

const initialState = {
  mine: null,
}

const modelReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_ALL_MODELS_SUCCESS:
      return {
        ...state,
        mine: action.models,
      }
    default:
      return state;
  }
}

export default modelReducer;