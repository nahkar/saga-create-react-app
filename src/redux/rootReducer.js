import { combineReducers } from 'redux';

import dogReducer from './dog/reducer';
import catReducer from './cat/reducer';

const rootReducer = combineReducers({
  dogReducer,
  catReducer
});

export default rootReducer;
