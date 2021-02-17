import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//import screen
import Login from '../screens/Login';
import Register from '../screens/Register';

function NavigationScreenRoot() {
  const Stack = createStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen component={Login} name="Login" />
          <Stack.Screen component={Register} name="Register" />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default NavigationScreenRoot;
