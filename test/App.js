/* eslint-disable react-native/no-inline-styles */
import {whileStatement} from '@babel/types';
import React, {useState, useEffect} from 'react';
import {Text, View, Image, StyleSheet, Dimensions} from 'react-native';
//import ScanScreen from './components/ScanScreen';
import stylez from './styles/Styles';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import Scan from './screens/Scan';
import IsVegan from './screens/IsVegan';
import ErrorScreen from './screens/ErrorScreen';

const Stack = createNativeStackNavigator();

const HelloWorldApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'What does this do?', headerShown: false}}
        />
        <Stack.Screen name="ScanScreen" component={Scan} />
        <Stack.Screen
          name="IsVegan"
          component={IsVegan}
          options={{headerBackVisible: false}}
        />
        <Stack.Screen name="ErrorScreen" component={ErrorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HelloWorldApp;
