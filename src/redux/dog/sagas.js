import * as actions from './actions';
import * as types from './types';
import service from './services';

import { put, call, takeEvery, all } from 'redux-saga/effects';

function* getRandomDog(action) {
  try {
    const data = yield call(service.getRandomDog);
    yield put(actions.requestDogSuccess(data));
  } catch (error) {
    yield put(actions.requestDogError());
  }
}

export default function* root() {
  yield all([takeEvery(types.GET_DOG_REQUEST, getRandomDog)]);
}
