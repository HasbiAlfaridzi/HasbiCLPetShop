/* eslint-disable @typescript-eslint/no-explicit-any */
const BASE_NAME = 'GET_DETAIL_BREEDS';
export const GET_DETAIL_BREEDS_REQUEST = `${BASE_NAME}_REQUEST`;
export const GET_DETAIL_BREEDS_SUCCESS = `${BASE_NAME}_SUCCESS`;
export const GET_DETAIL_BREEDS_FAILED = `${BASE_NAME}_FAILED`;
export const GET_DETAIL_BREEDS_DESTROY = `${BASE_NAME}_DESTROY`;

interface GetDetailBreedsRequestAction {
  type: typeof GET_DETAIL_BREEDS_REQUEST;
}

interface GetDetailBreedsSuccessAction {
  type: typeof GET_DETAIL_BREEDS_SUCCESS;
  payload: {data: any};
}

interface GetDetailBreedsFailedAction {
  type: typeof GET_DETAIL_BREEDS_FAILED;
  payload: any;
}

interface GetDetailBreedsDestroyAction {
  type: typeof GET_DETAIL_BREEDS_DESTROY;
}

export type GET_DETAIL_BREEDS_ACTION_TYPES =
  | GetDetailBreedsRequestAction
  | GetDetailBreedsSuccessAction
  | GetDetailBreedsFailedAction
  | GetDetailBreedsDestroyAction;
