/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  GET_IMAGE_DESTROY,
  GET_IMAGE_FAILED,
  GET_IMAGE_REQUEST,
  GET_IMAGE_SUCCESS,
} from './type';

const initialState = {
  loading: false,
  data: [],
  error: null,
};

const getImageReducer = (state = initialState, action: any) => {
  switch (action?.type) {
    case GET_IMAGE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_IMAGE_SUCCESS:
      return {
        loading: false,
        data: action.payload.data,
        error: '',
      };
    case GET_IMAGE_FAILED:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
    case GET_IMAGE_DESTROY:
      return state;
    default:
      return state;
  }
};

export default getImageReducer;
