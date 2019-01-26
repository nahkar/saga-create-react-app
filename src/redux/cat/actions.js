import * as types from './types';

export const requestCat = () => {
  return { type: types.GET_CAT_REQUEST };
};

export const requestCatSuccess = data => {
  return { type: types.GET_CAT_SUCCESS, url: data[0].url };
};

export const requestCatError = () => {
  return { type: types.GET_CAT_FAILURE };
};
