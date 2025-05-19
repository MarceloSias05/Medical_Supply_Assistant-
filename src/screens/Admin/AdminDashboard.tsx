import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigator';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HamburgerMenu from '../../components/HamburgerMenu';

type AdminDashboardProps = NativeStackScreenProps<RootStackParamList, 'AdminDashboard'>;

const AdminDashboard = ({ navigation }: AdminDashboardProps): React.JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Datos de ejemplo para el dashboard
  const summaryData = {
    totalHospitals: 5,
    totalPatients: 1287,
    totalDoctors: 76,
    lowStockItems: 8,
    pendingOrders: 12
  };

  // Métricas de cumplimiento de hospitales
  const hospitalComplianceData = [
    { id: '1', name: 'Hospital Central', complianceRate: 92 },
    { id: '2', name: 'Hospital Norte', complianceRate: 87 },
    { id: '3', name: 'Hospital Sur', complianceRate: 95 },
    { id: '4', name: 'Clínica del Valle', complianceRate: 78 },
    { id: '5', name: 'Hospital Metropolitano', complianceRate: 90 },
  ];

  const navigateToInventory = () => {
    navigation.navigate('InventoryManagement');
  };

  const navigateToOrders = () => {
    navigation.navigate('OrdersTracking');
  };

  const handleLogout = () => {
    // Add logout logic here
    // For example: clear authentication state and navigate to login
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => setIsMenuOpen(!isMenuOpen)}
          style={styles.menuButton}
        >
          <MaterialIcons name="menu" size={28} color="#2c3e50" />
        </TouchableOpacity>
        <Text style={styles.title}>Dashboard Administrador</Text>
      </View>

      <ScrollView style={styles.content}>
        <Text style={styles.welcomeText}>¡Bienvenido, Administrador!</Text>
        
        {/* Resumen General */}
        <View style={styles.summaryContainer}>
          <Text style={styles.sectionTitle}>Resumen General</Text>
          <View style={styles.statsContainer}>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>{summaryData.totalHospitals}</Text>
              <Text style={styles.statLabel}>Hospitales</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>{summaryData.totalDoctors}</Text>
              <Text style={styles.statLabel}>Médicos</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>{summaryData.totalPatients}</Text>
              <Text style={styles.statLabel}>Pacientes</Text>
            </View>
          </View>
        </View>
        
        {/* Alertas */}
        <View style={styles.alertsContainer}>
          <Text style={styles.sectionTitle}>Alertas</Text>
          <View style={styles.alertCard}>
            <Text style={styles.alertTitle}>Stock Bajo</Text>
            <Text style={styles.alertText}>
              {summaryData.lowStockItems} productos están bajo el nivel mínimo de stock
            </Text>
            <TouchableOpacity 
              style={styles.actionButton}
              onPress={navigateToInventory}
            >
              <Text style={styles.actionButtonText}>Ver Inventario</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.alertCard}>
            <Text style={styles.alertTitle}>Órdenes Pendientes</Text>
            <Text style={styles.alertText}>
              {summaryData.pendingOrders} órdenes necesitan seguimiento
            </Text>
            <TouchableOpacity 
              style={styles.actionButton}
              onPress={navigateToOrders}
            >
              <Text style={styles.actionButtonText}>Ver Órdenes</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        {/* Métricas de Hospitales */}
        <View style={styles.metricsContainer}>
          <Text style={styles.sectionTitle}>Cumplimiento de Hospitales</Text>
          {hospitalComplianceData.map((hospital) => (
            <View key={hospital.id} style={styles.hospitalRow}>
              <Text style={styles.hospitalName}>{hospital.name}</Text>
              <View style={styles.progressContainer}>
                <View 
                  style={[
                    styles.progressBar, 
                    {width: `${hospital.complianceRate}%`},
                    hospital.complianceRate < 80 ? styles.lowProgress : 
                    hospital.complianceRate < 90 ? styles.mediumProgress : 
                    styles.highProgress
                  ]} 
                />
              </View>
              <Text style={styles.progressText}>{hospital.complianceRate}%</Text>
            </View>
          ))}
        </View>
        
        {/* Acciones Rápidas */}
        <View style={styles.actionsContainer}>
          <Text style={styles.sectionTitle}>Acciones Rápidas</Text>
          <View style={styles.actionButtonsContainer}>
            <TouchableOpacity 
              style={styles.quickActionButton}
              onPress={navigateToInventory}
            >
              <Text style={styles.quickActionText}>Gestionar Inventario</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.quickActionButton}
              onPress={navigateToOrders}
            >
              <Text style={styles.quickActionText}>Seguimiento de Órdenes</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {isMenuOpen && (
        <HamburgerMenu 
          role="admin" 
          onLogout={handleLogout}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  menuButton: {
    padding: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 16,
    color: '#2c3e50',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2c3e50',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#34495e',
  },
  summaryContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statCard: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3498db',
  },
  statLabel: {
    fontSize: 14,
    color: '#7f8c8d',
    marginTop: 4,
  },
  alertsContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
  },
  alertCard: {
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#e74c3c',
  },
  alertTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#e74c3c',
  },
  alertText: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 10,
  },
  actionButton: {
    backgroundColor: '#3498db',
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 12,
    alignSelf: 'flex-start',
  },
  actionButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  metricsContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
  },
  hospitalRow: {
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  hospitalName: {
    width: '35%',
    fontSize: 14,
    color: '#2c3e50',
  },
  progressContainer: {
    flex: 1,
    height: 12,
    backgroundColor: '#ecf0f1',
    borderRadius: 6,
    marginRight: 10,
  },
  progressBar: {
    height: '100%',
    borderRadius: 6,
  },
  lowProgress: {
    backgroundColor: '#e74c3c',
  },
  mediumProgress: {
    backgroundColor: '#f39c12',
  },
  highProgress: {
    backgroundColor: '#2ecc71',
  },
  progressText: {
    width: '10%',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  actionsContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  quickActionButton: {
    backgroundColor: '#3498db',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    flex: 0.48,
    alignItems: 'center',
  },
  quickActionText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default AdminDashboard;