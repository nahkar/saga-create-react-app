import { all, fork } from 'redux-saga/effects';

import dogSagas from './dog/sagas';
import catSagas from './cat/sagas';

export default function* rootSaga(dispatch) {
  yield all([fork(dogSagas, dispatch), fork(catSagas, dispatch)]);
}
