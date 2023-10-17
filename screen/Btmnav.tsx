import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from './Profile';

import Account from './Account';
import Home from './Home';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
const Btmnav = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
      tabBarPosition="bottom"
      style={{
        backgroundColor: 'black',
      }}
      screenOptions={{
        swipeEnabled: false,
        tabBarIndicatorStyle: {
          opacity: 0,
        },
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

export default Btmnav;
