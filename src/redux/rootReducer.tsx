import {combineReducers} from 'redux';
import getImageReducer from './getImage/reducer';
import getDetailBreedsReducer from './getDetailBreeds/reducer';

export const rootReducer = combineReducers({
  getImage: getImageReducer,
  getDetailBreeds: getDetailBreedsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
