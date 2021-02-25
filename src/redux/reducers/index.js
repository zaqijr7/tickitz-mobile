import {combineReducers} from 'redux';
import authReducer from './auth';
import transactionReducer from './transaction';

const reducers = combineReducers({
  auth: authReducer,
  transaction: transactionReducer,
});

export default reducers;
