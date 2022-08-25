import { combineReducers } from 'redux';
import userReducer from './userReducer';
import saveSearchReducer from './saveSearchReducer';

const rootReducer = combineReducers({
  userReducer,
  saveSearchReducer,
});

export default rootReducer;
