import React from 'react';
import { View, Image, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { inputStyles } from './InputStyles';
import Input from './Input';

const InputContainer = ({handleChangeText, handleAddItem, inputText}) => {
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={inputStyles.inputContainer}>
          <Input
            placeholder="Nombre del item a agregar"
            blurOnSubmit
            keyboardType="default"
            maxLength={10}
            onChangeText={handleChangeText}
            value={inputText}
          />
          <TouchableOpacity 
                onPress={handleAddItem}
                style={inputStyles.addCart}>
                  <Image source={require('../../assets/images/add-cart.png')} />
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>

    )
};

export default InputContainer;