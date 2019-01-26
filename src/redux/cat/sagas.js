import * as actions from './actions';
import * as types from './types';
import service from './services';

import { put, call, takeEvery, all } from 'redux-saga/effects';

function* getRandomCat(action) {
  try {
    const data = yield call(service.getRandomCat);
    yield put(actions.requestCatSuccess(data));
  } catch (error) {
    yield put(actions.requestCatError());
  }
}

export default function* root() {
  yield all([takeEvery(types.GET_CAT_REQUEST, getRandomCat)]);
}
