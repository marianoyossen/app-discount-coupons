import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import CartScreen from '../../screens/CartScreen';
import Colors from "../../constants/colors";

const CartStack = createStackNavigator()

const CartNavigator = () => {
    return (
        <CartStack.Navigator
            initialRouteName="Cart"
            screenOptions={{
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
                },
                headerTitlesStyle: {
                    fontWeight: 'bold',
                },
                headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
            }}
        >
            <CartStack.Screen 
                name="Cart"
                component= {CartScreen}
                options={{ title: 'Cupones en Carrito' }}
                />
        </CartStack.Navigator>
    )
}

export default CartNavigator;