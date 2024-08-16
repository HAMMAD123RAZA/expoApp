import { Tabs } from 'expo-router';
import React from 'react';

import { Colors } from '@/constants/Colors';
import { useEffect } from 'react';
import 'react-native-reanimated';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Stack } from 'expo-router';


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
    screenOptions={{
      tabBarStyle:{
        backgroundColor:'white',
        borderWidth:0,
        padding:0
      },
      tabBarShowLabel:false
    }}
     >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons size={24} name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
        <Stack.Screen 
          name="Search"  
          options={{
            title: 'Search',
            tabBarIcon: ({ color, focused }) => (
              <Ionicons size={24} name={focused ? 'search' : 'search-outline'} color={color} />
            ),
          }}
        />
        <Stack.Screen 
          name="Profile"  
          options={{
            title: 'Profile',
            tabBarIcon: ({ color, focused }) => (
              <Ionicons size={24} name={focused ? 'people' : 'people-outline'} color={color} />
            ),
          }}
        />
        <Stack.Screen 
          name="Bookmark"  
          options={{
            title: 'bookmark',
            tabBarIcon: ({ color, focused }) => (
              <Ionicons size={24} name={focused ? 'bookmark' : 'bookmark-outline'} color={color} />
            ),
          }}        />
        <Stack.Screen 
          name="Category"  
          options={{
            title: 'menu',
            tabBarIcon: ({ color, focused }) => (
              <Ionicons size={24} name={focused ? 'menu' : 'menu-outline'} color={color} />
            ),
          }}
        />

    </Tabs>
  );
}
