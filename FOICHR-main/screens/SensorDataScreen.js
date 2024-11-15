import React from 'react';
import { View, Text, Button } from 'react-native';
import SensorStyles from '../components/styles/SensorStyles';

const SensorDataScreen = ({ navigation }) => {
  return (
    <View style={SensorStyles.container}>
      <Text style={SensorStyles.title}>Datos de Sensores</Text>

      {/* Categoría de Temperatura */}
      <View style={SensorStyles.categoryContainer}>
        <Text style={SensorStyles.categoryTitle}>Temperatura</Text>
        <View style={SensorStyles.pyramidRow}>
          <View style={SensorStyles.dataContainer}>
            <Text style={SensorStyles.dataLabel}>Temperatura:</Text>
            <Text style={SensorStyles.dataValue}>26°C</Text>
          </View>
          <Button title="Ver" onPress={() => navigation.navigate('Temperature')} />
        </View>
      </View>

      {/* Categoría de Humedad */}
      <View style={SensorStyles.categoryContainer}>
        <Text style={SensorStyles.categoryTitle}>Humedad</Text>
        <View style={SensorStyles.pyramidRow}>
          <View style={SensorStyles.dataContainer}>
            <Text style={SensorStyles.dataLabel}>Humedad:</Text>
            <Text style={SensorStyles.dataValue}>55%</Text>
          </View>
          <Button title="Ver" onPress={() => navigation.navigate('Humidity')} />
        </View>
      </View>

      {/* Categoría de PH */}
      <View style={SensorStyles.categoryContainer}>
        <Text style={SensorStyles.categoryTitle}>PH</Text>
        <View style={SensorStyles.pyramidRow}>
          <View style={SensorStyles.dataContainer}>
            <Text style={SensorStyles.dataLabel}>PH:</Text>
            <Text style={SensorStyles.dataValue}>6.5</Text>
          </View>
          <Button title="Ver" onPress={() => navigation.navigate('PH')} />
        </View>
      </View>

      {/* Categoría de Luminosidad */}
      <View style={SensorStyles.categoryContainer}>
        <Text style={SensorStyles.categoryTitle}>Luminosidad</Text>
        <View style={SensorStyles.pyramidRow}>
          <View style={SensorStyles.dataContainer}>
            <Text style={SensorStyles.dataLabel}>Luminosidad:</Text>
            <Text style={SensorStyles.dataValue}>300 lx</Text>
          </View>
          <Button title="Ver" onPress={() => navigation.navigate('Luminosity')} />
        </View>
      </View>

      {/* Categoría de CO2 */}
      <View style={SensorStyles.categoryContainer}>
        <Text style={SensorStyles.categoryTitle}>CO2</Text>
        <View style={SensorStyles.pyramidRow}>
          <View style={SensorStyles.dataContainer}>
            <Text style={SensorStyles.dataLabel}>CO2:</Text>
            <Text style={SensorStyles.dataValue}>400 ppm</Text>
          </View>
          <Button title="Ver" onPress={() => navigation.navigate('CO2')} />
        </View>
      </View>

      {/* Categoría de Presión */}
      <View style={SensorStyles.categoryContainer}>
        <Text style={SensorStyles.categoryTitle}>Presión</Text>
        <View style={SensorStyles.pyramidRow}>
          <View style={SensorStyles.dataContainer}>
            <Text style={SensorStyles.dataLabel}>Presión:</Text>
            <Text style={SensorStyles.dataValue}>1013 hPa</Text>
          </View>
          <Button title="Ver" onPress={() => navigation.navigate('Pressure')} />
        </View>
      </View>
    </View>
  );
};

export default SensorDataScreen;
