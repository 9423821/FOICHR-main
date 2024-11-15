import React from 'react';
import { View, Text, Button } from 'react-native';
import MainStyles from '../components/styles/MainStyles'; // Importar los estilos desde la carpeta correcta

const MainScreen = ({ navigation }) => {
  return (
    <View style={MainStyles.container}>
      <Text style={MainStyles.title}>¿Tienes una cuenta?</Text>
      <Button title="Iniciar Sesión" onPress={() => navigation.navigate('SignIn')} />
      <Text style={MainStyles.orText}>o</Text>
      <Button title="Registrarse" onPress={() => navigation.navigate('SignUp')} />
      <Text style={MainStyles.orText}>o</Text>
      <Button title="Ver datos de sensores" onPress={() => navigation.navigate('SensorData')} />
    </View>
  );
};

export default MainScreen;
