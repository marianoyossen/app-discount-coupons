import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Colors from '../../constants/colors';
import { cartStyles } from './CartStyles';
import { Ionicons } from '@expo/vector-icons';

const CartItem = ({ item, onDelete }) => {
  return (
    <View style={cartStyles.item}>
      <View style={cartStyles.header}>
        <Text style={cartStyles.text}>{item.commerceName} - {item.title}</Text>
      </View>
      <View style={cartStyles.detail}>
        <View>
          <Text>Cantidad: {item.quantity}</Text>
        </View>
        <View>
          <Text>Precio: ${item.discountPrice}</Text>
        </View>
        <View>
          <Text>Subtotal: ${item.discountPrice*item.quantity}</Text>
        </View>
        <View style={cartStyles.actions}>
          <TouchableOpacity onPress={() => onDelete(item.id)} style={cartStyles.button} color={Colors.primary}>
            <Ionicons size={16} color="white" name="md-trash" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default CartItem;