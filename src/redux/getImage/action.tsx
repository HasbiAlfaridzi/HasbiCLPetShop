/* eslint-disable @typescript-eslint/no-explicit-any */
import api from '../../api';
import {
  GET_IMAGE_ACTION_TYPES,
  GET_IMAGE_DESTROY,
  GET_IMAGE_FAILED,
  GET_IMAGE_REQUEST,
  GET_IMAGE_SUCCESS,
} from './type';
import {Dispatch} from 'redux';

const getImageRequest = () => {
  return {
    type: GET_IMAGE_REQUEST,
  };
};

const getImageSuccess = (data: any) => {
  return {
    type: GET_IMAGE_SUCCESS,
    payload: data,
  };
};

const getImageFailed = (error: any) => {
  return {
    type: GET_IMAGE_FAILED,
    payload: error,
  };
};

export const getImageDestroy = () => {
  return {
    type: GET_IMAGE_DESTROY,
  };
};

export const fetchGetFile = ({
  limit = 10,
  callback,
}: {
  limit: number;
  callback?: any;
}) => {
  return async (dispatch: Dispatch<GET_IMAGE_ACTION_TYPES>): Promise<void> => {
    dispatch(getImageRequest());
    try {
      const res = await api.get('https://api.thecatapi.com/v1/breeds', {
        params: {
          limit: limit,
        },
      });
      callback && callback(res);
      if (res?.status === 200) {
        const data: any = res?.data || [];
        // using Promise.all() for fetch API paralel
        const promises = data?.map(async (obj: any) => {
          if (obj?.reference_image_id) {
            const imgRes = await api.get(`https://api.thecatapi.com/v1/images/${obj?.reference_image_id}`,{
              params: {
                size: 'small'
              }
            } );
            if (imgRes?.status === 200) {
              obj.path_url = imgRes?.data?.url;
              obj.img_width = imgRes?.data?.width;
              obj.img_heigth = imgRes?.data?.height;
            }
          }
        });
        await Promise.all(promises);
        callback && callback(res);
        dispatch(getImageSuccess(res));
      } else {
        dispatch(getImageFailed(res?.data));
      }
    } catch (err) {
      dispatch(getImageFailed(err));
    }
  };
};
