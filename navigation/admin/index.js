import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import AdminCouponsScreen from '../../screens/AdminCouponsScreen';
import AdminNewCouponScreen from '../../screens/AdminNewCouponScreen';
import Colors from '../../constants/colors';

const AdminStack = createStackNavigator()

const AdminNavigator = () => {
  return (
    <AdminStack.Navigator
      initialRouteName="Admin"
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
      }}
    >
      <AdminStack.Screen
        name="Admin"
        component={AdminCouponsScreen}
        options={{ title: 'Administración de cupones' }}
      />

      <AdminStack.Screen
        name="New"
        component={AdminNewCouponScreen}
        options={{ title: 'Agregar Nuevo Cupón' }}
      />
    </AdminStack.Navigator>
  )
}

export default AdminNavigator;