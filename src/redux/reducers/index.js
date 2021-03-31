import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import authReducer from './auth';
import scheduleReducer from './findSchedule';
import transactionReducer from './transaction';

const authConfig = {
  key: 'auth',
  storage: AsyncStorage,
  stateReconciler: hardSet,
};

const reducers = combineReducers({
  auth: persistReducer(authConfig, authReducer),
  transaction: transactionReducer,
  findSchedule: scheduleReducer,
});

export default reducers;
