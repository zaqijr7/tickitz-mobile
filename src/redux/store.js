import {createStore, applyMiddleware, compose} from 'redux';
import {persistStore} from 'redux-persist';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducers from './reducers/index.js';

const persistedStore = () => {
  const composeEnchancer =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducers,
    composeEnchancer(applyMiddleware(thunk, logger)),
  );

  const persistor = persistStore(store);
  return {persistor, store};
};

export default persistedStore;
