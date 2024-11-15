import React from 'react';
import { View, Text } from 'react-native';
import SensorStyles from '../components/styles/SensorStyles';

const HumidityScreen = () => {
  return (
    <View style={SensorStyles.container}>
      <Text style={SensorStyles.title}>Humedad</Text>
      <View style={SensorStyles.dataContainer}>
        <Text style={SensorStyles.dataLabel}>Humedad:</Text>
        <Text style={SensorStyles.dataValue}>55%</Text>
      </View>
    </View>
  );
};

export default HumidityScreen;
