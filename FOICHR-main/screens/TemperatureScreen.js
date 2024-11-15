import React from 'react';
import { View, Text } from 'react-native';
import SensorStyles from '../components/styles/SensorStyles';

const TemperatureScreen = () => {
  return (
    <View style={SensorStyles.container}>
      <Text style={SensorStyles.title}>Temperatura</Text>
      <View style={SensorStyles.dataContainer}>
        <Text style={SensorStyles.dataLabel}>Temperatura:</Text>
        <Text style={SensorStyles.dataValue}>26°C</Text>
      </View>
    </View>
  );
};

export default TemperatureScreen;
