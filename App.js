import React from 'react';
import { Text, View, Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import Navigator from './Navigator/Navigator'

export default function App() {
  return (
    <NavigationContainer>
        <Navigator/>
    </NavigationContainer>
  )
};

