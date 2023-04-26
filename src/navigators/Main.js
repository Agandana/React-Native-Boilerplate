import * as React from 'react';
import Dashboard from '../screens/Dashboard';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Icon from 'react-native-vector-icons/FontAwesome';

// const myIcon = <Icon name="rocket" size={30} color="#900" />;

const Tab = createBottomTabNavigator();
// @refresh reset
const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={Dashboard} />
    </Tab.Navigator>
  );
};

export default MainNavigator;
