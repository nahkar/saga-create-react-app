import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from './rootReducer';

import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const loggerMiddleware = createLogger();

const store = createStore(rootReducer, applyMiddleware(loggerMiddleware, sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
