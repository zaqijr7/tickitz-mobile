import React, {useEffect} from 'react';
import NavigationScreenRoot from './src/navigation';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import persistedStore from './src/redux/store';
import SplashScreen from 'react-native-splash-screen';
import PushNotification from 'react-native-push-notification';

PushNotification.createChannel(
  {
    channelId: 'general', // (required)
    channelName: 'General Notification', // (required)
    channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
    playSound: false, // (optional) default: true
    soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
    importance: 4, // (optional) default: 4. Int value of the Android notification importance
    vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
  },
  (created) => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
);

const App = () => {
  const {persistor, store} = persistedStore();
  useEffect(() => {
    SplashScreen.hide();
  }, []);
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
