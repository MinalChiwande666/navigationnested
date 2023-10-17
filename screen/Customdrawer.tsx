import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
const Customdrawer = (props) => {
    const navigation:any = useNavigation()
  return (
    <View>
      <TouchableOpacity
      onPress={()=>navigation.navigate('Settings')}
      >
        <Text>Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={()=>navigation.navigate('Profile')}
      >
        <Text>Settings</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Customdrawer