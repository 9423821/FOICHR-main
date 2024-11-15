import { StyleSheet } from 'react-native';

const SignUpStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#2C3E50', // Fondo oscuro suave
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#27AE60', // Verde suave para el título
  },
  input: {
    height: 40,
    borderColor: '#BDC3C7', // Gris suave para los bordes de los inputs
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '100%',
    backgroundColor: '#34495E', // Gris oscuro cálido para el fondo de los inputs
    borderRadius: 10, // Bordes redondeados para los campos de entrada
    color: '#ECF0F1', // Texto claro dentro del input
  },
  buttonContainer: {
    width: '100%',
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#2ECC71', // Verde brillante para el botón
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#2ECC71', // Verde brillante para el borde del botón
  },
  buttonText: {
    color: 'white', // Texto blanco en el botón
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default SignUpStyles;

