import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './screens/MainScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import SensorDataScreen from './screens/SensorDataScreen';

import TemperatureScreen from './screens/TemperatureScreen';
import HumidityScreen from './screens/HumidityScreen';
import PHScreen from './screens/PHScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FOICHRw">
        <Stack.Screen name="FOICHR" component={MainScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="SensorData" component={SensorDataScreen} />

        {/* Añade las pantallas de cada categoría de datos */}
        <Stack.Screen name="Temperature" component={TemperatureScreen} options={{ title: 'Temperatura' }} />
        <Stack.Screen name="Humidity" component={HumidityScreen} options={{ title: 'Humedad' }} />
        <Stack.Screen name="PH" component={PHScreen} options={{ title: 'PH' }} />
        {/* Puedes añadir más pantallas para otras categorías si es necesario */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
