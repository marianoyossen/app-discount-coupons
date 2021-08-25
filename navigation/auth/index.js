import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from '../../screens/users/AuthScreen';

const AuthStack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name="Login" component={AuthScreen} />
    </AuthStack.Navigator>
  );
}

export default AuthNavigator;