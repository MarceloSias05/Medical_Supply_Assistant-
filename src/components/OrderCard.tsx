import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface OrderCardProps {
  order: {
    id: string;
    status: string;
    priority: string;
    requestedBy: string;
  };
}

const OrderCard = ({ order }: OrderCardProps): React.JSX.Element => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Orden ID: {order.id}</Text>
      <Text style={styles.info}>Estado: {order.status}</Text>
      <Text style={styles.info}>Prioridad: {order.priority}</Text>
      <Text style={styles.info}>Solicitado por: {order.requestedBy}</Text>
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

export default OrderCard;