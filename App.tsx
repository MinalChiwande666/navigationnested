import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Home from './screen/Home';
import Setting from './screen/Setting';
import Profile from './screen/Profile';
import Btmnav from './screen/Btmnav';
import Drawer from './screen/Drawer';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Customdrawer from './screen/Customdrawer';
const App = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createMaterialTopTabNavigator();
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <Customdrawer {...props} />}>
        <Drawer.Screen name="Home" component={Btmnav} />
        <Drawer.Screen name="Profile" component={Profile} />
      </Drawer.Navigator>
      {/* <Tab.Navigator
          tabBarPosition="bottom"
          style={{
            backgroundColor:'black'
          }}
          screenOptions={{
            
            swipeEnabled: false,
            tabBarIndicatorStyle: {
              opacity: 0,
            },
          }}>
          <Tab.Screen name="Drawer" component={Drawer} />
          <Tab.Screen name="Settings" component={Setting} />
        </Tab.Navigator> */}
    </NavigationContainer>
  );
};

export default App;
