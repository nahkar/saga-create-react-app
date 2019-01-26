import * as types from './types';

export const requestDog = () => {
  return { type: types.GET_DOG_REQUEST };
};

export const requestDogSuccess = data => {
  return { type: types.GET_DOG_SUCCESS, url: data.message };
};

export const requestDogError = () => {
  return { type: types.GET_DOG_FAILURE };
};
