import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DoctorDashboard = (): React.JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard Médico</Text>
      <Text style={styles.subtitle}>Bienvenido al panel de control para médicos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#2c3e50',
  },
  subtitle: {
    fontSize: 16,
    color: '#7f8c8d',
    textAlign: 'center',
  },
});

export default DoctorDashboard;