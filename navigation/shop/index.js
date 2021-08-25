import React from "react";
import { Platform } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../screens/HomeScreen";
import CategoryCoupons from "../../screens/CategoryCoupons";
import CouponDetailScreen from "../../screens/CouponDetailScreen";
import Colors from "../../constants/colors";

const CouponStack = createStackNavigator();

const CouponNavigator = () => (
    <CouponStack.Navigator 
        initialRouteName = "Home"
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
        <CouponStack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{title: 'Home'}}>
        </CouponStack.Screen>
        <CouponStack.Screen 
            name="CouponCategory" 
            component={CategoryCoupons} 
            options={({ route }) => ({ title: route.params.name })}>
        </CouponStack.Screen>
        <CouponStack.Screen
            name="CouponDetail"
            component={CouponDetailScreen}
            options={{title: 'Detalle'}}
        />
    </CouponStack.Navigator>
);

export default CouponNavigator