import React from 'react';
import { TextInput, Text } from "react-native";
import { inputStyles } from './InputStyles';

const Input = ({style = {}, ...props}) => {
    return (
        <TextInput style={{...inputStyles.input, ...style}}{...props} />
    )
};

export default Input;

