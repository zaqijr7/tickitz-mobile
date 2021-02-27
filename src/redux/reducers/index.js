import {combineReducers} from 'redux';
import authReducer from './auth';
import scheduleReducer from './findSchedule';
import transactionReducer from './transaction';

const reducers = combineReducers({
  auth: authReducer,
  transaction: transactionReducer,
  findSchedule: scheduleReducer,
});

export default reducers;
