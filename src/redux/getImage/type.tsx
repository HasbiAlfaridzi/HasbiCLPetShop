/* eslint-disable @typescript-eslint/no-explicit-any */
const BASE_NAME = 'GET_IMAGE';
export const GET_IMAGE_REQUEST = `${BASE_NAME}_REQUEST`;
export const GET_IMAGE_SUCCESS = `${BASE_NAME}_SUCCESS`;
export const GET_IMAGE_FAILED = `${BASE_NAME}_FAILED`;
export const GET_IMAGE_DESTROY = `${BASE_NAME}_DESTROY`;

interface GetImageRequestAction {
  type: typeof GET_IMAGE_REQUEST;
}

interface GetImageSuccessAction {
  type: typeof GET_IMAGE_SUCCESS;
  payload: {data: any};
}

interface GetImageFailedAction {
  type: typeof GET_IMAGE_FAILED;
  payload: any;
}

interface GetImageDestroyAction {
  type: typeof GET_IMAGE_DESTROY;
}

export type GET_IMAGE_ACTION_TYPES =
  | GetImageRequestAction
  | GetImageSuccessAction
  | GetImageFailedAction
  | GetImageDestroyAction;
