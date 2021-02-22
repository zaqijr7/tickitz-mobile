import React, {Component} from 'react';
import NavigationScreenRoot from './src/navigation';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';

import store from './src/redux/store.js';
import {Text} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <NavigationScreenRoot />
        </NavigationContainer>
      </Provider>
    );
  }
}
