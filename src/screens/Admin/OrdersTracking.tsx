import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import OrderCard from '../../components/OrderCard';

const orders = [
  { id: '1', status: 'pending', priority: 'high', requestedBy: 'Doctor A' },
  { id: '2', status: 'shipped', priority: 'medium', requestedBy: 'Doctor B' },
  { id: '3', status: 'delivered', priority: 'low', requestedBy: 'Doctor C' },
];

const OrdersTracking = (): React.JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seguimiento de Órdenes</Text>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <OrderCard order={item} />}
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

export default OrdersTracking;