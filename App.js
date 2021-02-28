import React from 'react';
import NavigationScreenRoot from './src/navigation';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import persistedStore from './src/redux/store';

const App = () => {
  const {persistor, store} = persistedStore();
  return (
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <NavigationContainer>
          <NavigationScreenRoot />
        </NavigationContainer>
      </Provider>
    </PersistGate>
  );
};

export default App;
