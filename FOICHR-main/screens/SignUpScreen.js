import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import SignUpStyles from '../components/styles/SignUpStyles'; // Importar los estilos desde la carpeta correcta

const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Aquí puedes manejar la lógica de registro
    console.log('Registrarse con:', name, email, password);
    // Redirigir al usuario a la pantalla de inicio de sesión o a otra pantalla
  };

  return (
    <View style={SignUpStyles.container}>
      <Text style={SignUpStyles.title}>Registrarse</Text>
      <TextInput
        style={SignUpStyles.input}
        placeholder="Nombre"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={SignUpStyles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={SignUpStyles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Registrarse" onPress={handleSignUp} />
    </View>
  );
};

export default SignUpScreen;
