import React from 'react';
import { StyleSheet } from 'react-native';
import Map from './Map';

const MapScreen = () => {
  return (
    <Map />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
});

export default MapScreen;
