import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from './Icon';

interface HamburgerMenuProps {
  role: 'admin' | 'doctor' | 'pharmacy';
  onLogout: () => void;
}

const HamburgerMenu = ({ role, onLogout }: HamburgerMenuProps): React.JSX.Element => {
  const navigation = useNavigation();

  const menuItems = {
    admin: [
      { label: 'Dashboard', icon: 'dashboard', route: 'AdminDashboard' },
      { label: 'Inventario', icon: 'inventory', route: 'InventoryManagement' },
      { label: 'Órdenes', icon: 'local-shipping', route: 'OrdersTracking' },
    ],
    doctor: [
      { label: 'Dashboard', icon: 'dashboard', route: 'DoctorDashboard' },
      { label: 'Pacientes', icon: 'people', route: 'PatientList' },
    ],
    pharmacy: [
      { label: 'Dashboard', icon: 'dashboard', route: 'PharmacyDashboard' },
      { label: 'Despachos', icon: 'local-pharmacy', route: 'DispatchOrders' },
    ],
  };

  return (
    <View style={styles.menu}>
      {menuItems[role].map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.menuItem}
          onPress={() => navigation.navigate(item.route as never)}
        >
          <Icon name={item.icon} size={24} color="#2c3e50" />
          <Text style={styles.menuText}>{item.label}</Text>
        </TouchableOpacity>
      ))}
      
      <TouchableOpacity style={styles.logoutButton} onPress={onLogout}>
        <Icon name="logout" size={24} color="#e74c3c" />
        <Text style={styles.logoutText}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#bdc3c7',
  },
  menuText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#2c3e50',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginTop: 'auto',
  },
  logoutText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#e74c3c',
  },
});

export default HamburgerMenu;