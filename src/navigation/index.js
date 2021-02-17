import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//import screen
import Login from '../screens/Login';
import Register from '../screens/Register';
import Forgot from '../screens/Forgot';

function NavigationScreenRoot() {
  const Stack = createStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            component={Register}
            name="Register"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            component={Login}
            name="Login"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            component={Forgot}
            name="Forgot"
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default NavigationScreenRoot;
