import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import InventoryList from '../../components/InventoryList';

const inventoryItems = [
  { id: '1', name: 'Paracetamol', quantity: 50, minStock: 20 },
  { id: '2', name: 'Ibuprofeno', quantity: 30, minStock: 15 },
  { id: '3', name: 'Amoxicilina', quantity: 10, minStock: 5 },
];

const InventoryManagement = (): React.JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gestión de Inventario</Text>
      <FlatList
        data={inventoryItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <InventoryList item={item} />}
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

export default InventoryManagement;