/* eslint-disable react-native/no-inline-styles */
import {whileStatement} from '@babel/types';
import React, {useState, useEffect} from 'react';
import {Text, View, Image, StyleSheet, Dimensions, Button} from 'react-native';
import ScanScreen from '../components/ScanScreen';
import stylez from '../styles/Styles';
import {NavigationContainer} from '@react-navigation/native';

const Home = ({navigation}) => {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}>
      <Image
        style={{flex: 0.25, resizeMode: 'contain', margin: 15}}
        source={require('../assets/vegan4.png')}
      />
      <Button
        title="Scan Barcode"
        onPress={() => navigation.navigate('ScanScreen')}
      />
    </View>
  );
};

export default Home;
