import { StyleSheet } from 'react-native';

const SensorStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#2C3E50', // Fondo oscuro suave para la pantalla
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#27AE60', // Verde suave para el título
  },
  categoryContainer: {
    width: '100%',
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#34495E', // Gris oscuro cálido para el contenedor de categoría
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#27AE60', // Verde suave como borde para combinar
    flexDirection: 'column', 
    alignItems: 'center',
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#27AE60', // Título de la categoría en verde suave
    marginBottom: 10,
  },
  pyramidRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  dataContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2C3E50', // Fondo más oscuro para los datos
    paddingVertical: 5,
    marginRight: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#27AE60', // Borde en verde suave
    flex: 1,
  },
  dataLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#BDC3C7', // Color de texto gris suave para las etiquetas
    marginRight: 5,
  },
  dataValue: {
    fontSize: 14,
    color: '#BDC3C7', // Gris suave para los valores
  },
  buttonContainer: {
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#27AE60', // Botón verde suave
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white', // Texto de botón blanco para resaltar
    fontWeight: 'bold',
  },
});

export default SensorStyles;
