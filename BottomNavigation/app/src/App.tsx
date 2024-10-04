import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Home from './screens/Home';
import Profile from './screens/Profile';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './RootStack';
import BottomTab from './screens/BottomTab';

const MyTabs = createBottomTabNavigator({
  screens: {
    Home: Home,
    Profile: Profile,
  },
});

const App = () => {
  return (
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
  );
};

export default App;
