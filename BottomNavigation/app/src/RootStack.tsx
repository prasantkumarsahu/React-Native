import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './screens/Home';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
    </Stack.Navigator>
  )
}

export default RootStack