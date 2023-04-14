import React from 'react';
import Login from '../screens/Login';
import Dashboard from '../screens/Dashboard';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
// @refresh reset
const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
};
export default MainNavigator;
