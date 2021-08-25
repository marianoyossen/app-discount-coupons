import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import OrdersScreen from '../../screens/OrdersScreen';
import Colors from '../../constants/colors';

const OrdersStack = createStackNavigator()

const OrdersNavigator = () => {
  return (
    <OrdersStack.Navigator
      initialRouteName="Orders"
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
      <OrdersStack.Screen
        name="Orders"
        component={OrdersScreen}
        options={{ title: 'Órdenes de cupones' }}
      />
    </OrdersStack.Navigator>
  )
}

export default OrdersNavigator;