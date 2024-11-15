import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import SignInStyles from '../components/styles/SignInStyles'; // Importar los estilos desde la carpeta correcta

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Aquí puedes manejar la lógica de inicio de sesión
    console.log('Iniciar sesión con:', email, password);
    // Redirigir al usuario a la pantalla principal o a otra pantalla
  };

  return (
    <View style={SignInStyles.container}>
      <Text style={SignInStyles.title}>Iniciar Sesión</Text>
      <TextInput
        style={SignInStyles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={SignInStyles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Iniciar Sesión" onPress={handleSignIn} />
    </View>
  );
};

export default SignInScreen;
