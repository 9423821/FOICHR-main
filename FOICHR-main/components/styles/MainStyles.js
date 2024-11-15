import { StyleSheet } from 'react-native';

const MainStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#2C3E50', // Fondo oscuro suave para la pantalla principal
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#27AE60', // Verde suave para el título
  },
  orText: {
    marginVertical: 20,
    fontSize: 16,
    color: '#BDC3C7', // Gris suave para el texto "o"
  },
  buttonContainer: {
    width: '100%',
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#34495E', // Gris oscuro cálido para los contenedores de botones
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#27AE60', // Verde suave para el borde
  },
  buttonText: {
    color: 'white', // Botones con texto blanco
    fontWeight: 'bold',
  },
});

export default MainStyles;
