import React from 'react';
import { View, Text } from 'react-native';
import SensorStyles from '../components/styles/SensorStyles';

const PHScreen = () => {
  return (
    <View style={SensorStyles.container}>
      <Text style={SensorStyles.title}>PH</Text>
      <View style={SensorStyles.dataContainer}>
        <Text style={SensorStyles.dataLabel}>PH:</Text>
        <Text style={SensorStyles.dataValue}>6.5</Text>
      </View>
    </View>
  );
};

export default PHScreen;
