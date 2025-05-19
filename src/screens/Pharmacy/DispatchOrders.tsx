import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import OrderCard from '../../components/OrderCard';

const ordersToDispatch = [
  { id: '1', status: 'ready', priority: 'urgent', requestedBy: 'Doctor A' },
  { id: '2', status: 'ready', priority: 'high', requestedBy: 'Doctor B' },
];

const DispatchOrders = (): React.JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Despachar Órdenes</Text>
      <FlatList
        data={ordersToDispatch}
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

export default DispatchOrders;