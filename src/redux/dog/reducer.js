import * as types from './types';

const initialState = {
  url: '',
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_DOG_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case types.GET_DOG_SUCCESS:
      return {
        ...state,
        url: action.url,
        isLoading: false
      };
    case types.GET_DOG_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };
    default:
      return state;
  }
};
