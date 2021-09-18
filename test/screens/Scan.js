'use strict';

import React, {Component} from 'react';

import {Text, TouchableOpacity} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import styles from '../styles/Styles';
import fetchData from '../handlers/FetchData';
import IsVegan from './IsVegan';

const Scan = ({navigation}) => {
  return (
    <QRCodeScanner
      onRead={async barcode => {
        try {
          let data = await fetchData(barcode);
          console.log(data);
          if (data.didError) {
            console.log('The error is this: ' + data.error);
          }
          if (data.didError)
            //issue with network/request does not go through
            navigation.replace('ErrorScreen', {error: data.error.toString()});
          else if ('error' in data.data)
            //issue with server/bad call but response received
            navigation.replace('ErrorScreen', {error: data.data.error.message});
          else if (data.data.totalHits == 0)
            //no matching hits on server
            navigation.replace('ErrorScreen', {error: 'Product not found'});
          else if ('foods' in data.data) {
            navigation.replace('IsVegan', {food: data.data.foods[0]});
          } //success
          else {
            navigation.replace('ErrorScreen', {
              error: 'Unknown Error Occurred',
            });
          }
        } catch (e) {
          console.log('Error handling fetched data');
          console.log(e);
        }
      }}
      flashMode={RNCamera.Constants.FlashMode.auto}
    />
  );
};

export default Scan;
