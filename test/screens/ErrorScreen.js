/* eslint-disable react-native/no-inline-styles */
import {whileStatement} from '@babel/types';
import React, {useState, useEffect} from 'react';
import {Text, View, Image, StyleSheet, Dimensions, Button} from 'react-native';
import ScanScreen from '../components/ScanScreen';
import stylez from '../styles/Styles';
import {NavigationContainer} from '@react-navigation/native';

const ErrorPage = ({navigation, route}) => {
  return (
    <View>
      <Text>{route.params.error}</Text>
    </View>
  );
};

export default ErrorPage;
