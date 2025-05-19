import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigator';

type PatientDetailProps = NativeStackScreenProps<RootStackParamList, 'PatientDetail'>;

const PatientDetail = ({ route }: PatientDetailProps): React.JSX.Element => {
  const { patientId } = route.params;

  // Datos de ejemplo
  const patient = {
    id: patientId,
    firstName: 'Juan',
    lastName: 'Pérez',
    diagnosis: 'Diabetes',
    age: 45,
    hospital: 'Hospital Central',
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalle del Paciente</Text>
      <Text style={styles.info}>Nombre: {patient.firstName} {patient.lastName}</Text>
      <Text style={styles.info}>Diagnóstico: {patient.diagnosis}</Text>
      <Text style={styles.info}>Edad: {patient.age}</Text>
      <Text style={styles.info}>Hospital: {patient.hospital}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#2c3e50',
  },
  info: {
    fontSize: 16,
    marginBottom: 8,
    color: '#34495e',
  },
});

export default PatientDetail;