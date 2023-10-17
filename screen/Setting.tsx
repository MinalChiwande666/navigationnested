import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Setting = ({navigation}:any) => {
  return (
    <View>
      <Text>Setting</Text>
      <TouchableOpacity
      onPress={()=>navigation.navigate('btm')}
      >
        <Text>Profile</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Setting