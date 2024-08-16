import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import profileImg from '../../assets/images/icon.png'

const index = () => {
  return (
    <Stack.Screen 
      options={{
        headerTransparent: true,
        headerTitle: '',
        headerLeft: () => (
          <TouchableOpacity onPress={() => {}}>
            <Image source={{uri:'https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=612x612&w=0&k=20&c=8ssXDNTp1XAPan8Bg6mJRwG7EXHshFO5o0v9SIj96nY='}} style={{ width: 40, height: 40, borderRadius: 11 }} />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name='notifications' size={24} color={'#000'} />
          </TouchableOpacity>
        ),
      }}
    />
  )
}

export default index