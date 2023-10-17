import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from './Home'
import Customdrawer from './Customdrawer'
import Profile from './Profile'
const Drawer = () => {
    const Drawer = createDrawerNavigator()
  return (
     <Drawer.Navigator
    
     drawerContent={(props)=><Customdrawer {...props}/>}
     >
        <Drawer.Screen name='Home' component={Home}/>
        <Drawer.Screen name='Profile' component={Profile}/>
     </Drawer.Navigator>
  )
}

export default Drawer