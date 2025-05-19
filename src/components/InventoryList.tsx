import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface InventoryListProps {
  item: {
    id: string;
    name: string;
    quantity: number;
    minStock: number;
  };
}

const InventoryList = ({ item }: InventoryListProps): React.JSX.Element => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.info}>Cantidad: {item.quantity}</Text>
      <Text style={styles.info}>Stock mínimo: {item.minStock}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#2c3e50',
  },
  info: {
    fontSize: 14,
    color: '#34495e',
  },
});

export default InventoryList;