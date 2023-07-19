/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  GET_DETAIL_BREEDS_DESTROY,
  GET_DETAIL_BREEDS_FAILED,
  GET_DETAIL_BREEDS_REQUEST,
  GET_DETAIL_BREEDS_SUCCESS,
} from './type';

const initialState = {
  loading: false,
  data: [],
  error: null,
};

const getDetailBreedsReducer = (state = initialState, action: any) => {
  switch (action?.type) {
    case GET_DETAIL_BREEDS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_DETAIL_BREEDS_SUCCESS:
      return {
        loading: false,
        data: action.payload.data,
        error: '',
      };
    case GET_DETAIL_BREEDS_FAILED:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
    case GET_DETAIL_BREEDS_DESTROY:
      return state;
    default:
      return state;
  }
};

export default getDetailBreedsReducer;
