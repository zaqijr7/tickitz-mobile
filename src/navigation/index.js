import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//import screen
import Login from '../screens/Login';
import Register from '../screens/Register';
import Forgot from '../screens/Forgot';
import Home from '../screens/Home';
import MovieDetail from '../screens/MovieDetail';
import Navbar from '../components/Navbar';
import Order from '../screens/Order';
import Payment from '../screens/Payment';
import Ticket from '../screens/Ticket';

function NavigationScreenRoot() {
  const Stack = createStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            component={Home}
            name="Home"
            options={{
              header: () => <Navbar />,
            }}
          />
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
          <Stack.Screen
            component={MovieDetail}
            name="MovieDetail"
            options={{
              header: () => <Navbar />,
            }}
          />
          <Stack.Screen
            component={Order}
            name="Order"
            options={{
              header: () => <Navbar />,
            }}
          />
          <Stack.Screen
            component={Payment}
            name="Payment"
            options={{
              header: () => <Navbar />,
            }}
          />
          <Stack.Screen
            component={Ticket}
            name="Ticket"
            options={{
              header: () => <Navbar />,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default NavigationScreenRoot;
