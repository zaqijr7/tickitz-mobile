import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

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
import Profile from '../screens/Profile';
import OrderHistory from '../screens/OrderHistory';
import Admin from '../screens/Admin';
import {useSelector} from 'react-redux';

function NavigationScreenRoot() {
  const Stack = createStackNavigator();
  const Tab = createMaterialTopTabNavigator();
  const token = useSelector((state) => state.auth.token);
  return (
    <>
      <Stack.Navigator>
        {token === null ? (
          <>
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
          </>
        ) : (
          <>
            <Stack.Screen
              component={Home}
              name="Home"
              options={{
                header: () => <Navbar />,
              }}
            />

            <Stack.Screen
              component={Admin}
              name="Admin"
              options={{
                header: () => <Navbar />,
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
            <Stack.Screen
              component={Profile}
              name="Profile"
              options={{
                header: () => <Navbar />,
              }}
            />
            <Stack.Screen
              component={OrderHistory}
              name="OrderHistory"
              options={{
                header: () => <Navbar />,
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </>
  );
}

export default NavigationScreenRoot;
