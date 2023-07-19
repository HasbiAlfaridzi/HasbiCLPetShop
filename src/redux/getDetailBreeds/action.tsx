/* eslint-disable @typescript-eslint/no-explicit-any */
import api from '../../api';
import {
  GET_DETAIL_BREEDS_ACTION_TYPES,
  GET_DETAIL_BREEDS_DESTROY,
  GET_DETAIL_BREEDS_FAILED,
  GET_DETAIL_BREEDS_REQUEST,
  GET_DETAIL_BREEDS_SUCCESS,
} from './type';
import {Dispatch} from 'redux';

const getDetailBreedsRequest = () => {
  return {
    type: GET_DETAIL_BREEDS_REQUEST,
  };
};

const getDetailBreedsSuccess = (data: any) => {
  return {
    type: GET_DETAIL_BREEDS_SUCCESS,
    payload: data,
  };
};

const getDetailBreedsFailed = (error: any) => {
  return {
    type: GET_DETAIL_BREEDS_FAILED,
    payload: error,
  };
};

export const getDetailBreedsDestroy = () => {
  return {
    type: GET_DETAIL_BREEDS_DESTROY,
  };
};

export const fetchGetDetailBreeds = ({
  breeds_id,
  height,
  path_url,
  width,
  callback,
}: {
  breeds_id: any;
  path_url: string;
  width: number;
  height: number;
  callback?: any;
}) => {
  return async (dispatch: Dispatch<GET_DETAIL_BREEDS_ACTION_TYPES>): Promise<void> => {
    dispatch(getDetailBreedsRequest());
    try {
      const res = await api.get(`https://api.thecatapi.com/v1/breeds/${breeds_id}`);
      if (res?.status === 200) {
          res.data.path_url = path_url;
          res.data.img_width = width;
          res.data.img_height = height;
          callback && callback(res);
          dispatch(getDetailBreedsSuccess(res));
      } else {
        dispatch(getDetailBreedsFailed(res?.data));
      }
    } catch (err) {
      dispatch(getDetailBreedsFailed(err));
    }
  };
};
