import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/Auth/LoginScreen';
import DoctorDashboard from '../screens/Doctor/DoctorDashboard';
import PharmacyDashboard from '../screens/Pharmacy/PharmacyDashboard';
import AdminDashboard from '../screens/Admin/AdminDashboard';
import PatientList from '../screens/Doctor/PatientList';
import PatientDetail from '../screens/Doctor/PatientDetail';
import InventoryManagement from '../screens/Admin/InventoryManagement';
import OrdersTracking from '../screens/Admin/OrdersTracking';
import DispatchOrders from '../screens/Pharmacy/DispatchOrders';

// Definición de tipos para la navegación
export type RootStackParamList = {
  Login: {
    onAuthentication?: (authenticated: boolean, role: 'admin' | 'doctor' | 'pharmacy') => void;
  };
  // Admin routes
  AdminDashboard: undefined;
  InventoryManagement: undefined;
  OrdersTracking: undefined;
  // Doctor routes
  DoctorDashboard: undefined;
  PatientList: undefined;
  PatientDetail: { patientId: string };
  // Pharmacy routes
  PharmacyDashboard: undefined;
  DispatchOrders: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = (): React.JSX.Element => {
  // Estado para controlar si el usuario está autenticado
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // Estado para el rol del usuario
  const [userRole, setUserRole] = useState<'admin' | 'doctor' | 'pharmacy' | null>(null);

  // Esta función se pasa a LoginScreen para actualizar el estado de autenticación
  const handleAuthentication = (authenticated: boolean, role: 'admin' | 'doctor' | 'pharmacy') => {
    setIsAuthenticated(authenticated);
    setUserRole(role);
  };

  // Determinamos qué pantalla inicial mostrar basado en la autenticación
  const getInitialRouteName = () => {
    if (!isAuthenticated) return "Login";
    
    switch(userRole) {
      case 'admin': return "AdminDashboard";
      case 'doctor': return "DoctorDashboard";
      case 'pharmacy': return "PharmacyDashboard";
      default: return "Login";
    }
  };

  return (
    <Stack.Navigator initialRouteName={getInitialRouteName()}>
      {!isAuthenticated ? (
        // Ruta de autenticación
        <Stack.Screen 
          name="Login" 
          component={LoginScreen}
          options={{ 
            headerShown: false 
          }}
          initialParams={{ onAuthentication: handleAuthentication }}
        />
      ) : (
        // Rutas autenticadas basadas en el rol
        <>
          {userRole === 'doctor' && (
            <>
              <Stack.Screen 
                name="DoctorDashboard" 
                component={DoctorDashboard} 
                options={{ 
                  title: 'Dashboard Médico',
                  headerLeft: () => null, // Previene volver atrás al login
                }}
              />
              <Stack.Screen 
                name="PatientList" 
                component={PatientList} 
                options={{ title: 'Lista de Pacientes' }}
              />
              <Stack.Screen 
                name="PatientDetail" 
                component={PatientDetail} 
                options={{ title: 'Detalle del Paciente' }}
              />
            </>
          )}
          {userRole === 'pharmacy' && (
            <>
              <Stack.Screen 
                name="PharmacyDashboard" 
                component={PharmacyDashboard} 
                options={{ 
                  title: 'Dashboard Farmacia',
                  headerLeft: () => null, // Previene volver atrás al login
                }}
              />
              <Stack.Screen 
                name="DispatchOrders" 
                component={DispatchOrders} 
                options={{ title: 'Despachar Órdenes' }}
              />
            </>
          )}
          {userRole === 'admin' && (
            <>
              <Stack.Screen 
                name="AdminDashboard" 
                component={AdminDashboard} 
                options={{ 
                  title: 'Dashboard Administrador',
                  headerLeft: () => null, // Previene volver atrás al login
                }}
              />
              <Stack.Screen 
                name="InventoryManagement" 
                component={InventoryManagement} 
                options={{ title: 'Gestión de Inventario' }}
              />
              <Stack.Screen 
                name="OrdersTracking" 
                component={OrdersTracking} 
                options={{ title: 'Seguimiento de Órdenes' }}
              />
            </>
          )}
        </>
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;