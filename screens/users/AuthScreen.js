import React, { useState, useEffect, useReducer, useCallback } from 'react';
import { View, Button, KeyboardAvoidingView, Alert, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import InputLogin from '../../components/inputs/InputLogin';
import Colors from '../../constants/colors';
import { login, signup } from '../../store/actions/auth.action';
import Logo from '../../assets/logo-ico.png';
import {screenStyles} from '../screenStyles';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value,
    };

    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid,
    };

    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    }

    return {
      formIsValid: updatedFormIsValid,
      inputValidities: updatedValidities,
      inputValues: updatedValues,
    };
  }

  return state;
}

const AuthScreen = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  useEffect(() => {
    if (error) {
      Alert.alert("Debe ingresar correctamente los datos para continuar:", error, [{ text: 'Ok' }]);
    }
  }, [error]);

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      email: '',
      password: '',
    },
    inputValidities: {
      email: false,
      password: false,
    },
    formIsValid: false,
  });

  const onInputChangeHandler = useCallback((inputIdentifier, inputValue, inputValidity) => {
    dispatchFormState({
      type: FORM_INPUT_UPDATE,
      input: inputIdentifier,
      value: inputValue,
      isValid: inputValidity,
    });
  }, [dispatchFormState]);

  const onLoginHandler = async () => {
    try {
      await dispatch(login(formState.inputValues.email, formState.inputValues.password));
    } catch (err) {
      setError(err.message);
    }
  }

  const onSignupHandler = async () => {
    try {
      await dispatch(signup(formState.inputValues.email, formState.inputValues.password));
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={50}
      style={screenStyles.screenAuth}
    >
      <View style={screenStyles.containerAuth}>
        <View style={screenStyles.headerAuth}>
          <Image source={Logo} alt="Logo" style={screenStyles.logoAuth}></Image>
        </View>
        <View>
          <InputLogin
            id="email"
            label="Email"
            keyboardType="email-address"
            required
            email
            autoCapitalize="none"
            errorText="Por favor, ingrese un email válido"
            onInputChange={onInputChangeHandler}
            initialValue=""
          />
          <InputLogin
            id="password"
            label="Clave"
            keyboardType="default"
            secureTextEntry
            required
            minLength={6}
            autoCapitalize="none"
            errorText="Por favor, ingrese una clave de al menos 6 caracteres"
            onInputChange={onInputChangeHandler}
            initialValue=""
          />
        </View>
        <View style={screenStyles.footerAuth}>
          <View style={screenStyles.buttonAuth}>
            <Button title="INGRESAR" color={Colors.primary} onPress={onLoginHandler} />
          </View>
          <View style={screenStyles.buttonAuth}>
            <Button title="SOY NUEVO AQUÍ" color={Colors.accent} onPress={onSignupHandler} />
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

export default AuthScreen;