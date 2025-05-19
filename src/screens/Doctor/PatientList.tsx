import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import PatientCard from '../../components/PatientCard';

const patients = [
  { id: '1', firstName: 'Juan', lastName: 'Pérez', diagnosis: 'Diabetes' },
  { id: '2', firstName: 'María', lastName: 'Gómez', diagnosis: 'Hipertensión' },
  { id: '3', firstName: 'Carlos', lastName: 'López', diagnosis: 'Asma' },
];

const PatientList = (): React.JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Pacientes</Text>
      <FlatList
        data={patients}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PatientCard patient={item} />}
      />
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
});

export default PatientList;