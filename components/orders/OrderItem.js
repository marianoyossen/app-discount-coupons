import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { orderStyles } from './OrderStyles';

const formatDate = time => {
  const date = new Date(time);
  return date.toLocaleDateString();
}

const sumTotal = list => list
  .map(item => item.quantity * item.discountPrice)
  .reduce((a, b) => a + b, 0)

const OrderItem = ({ item, onDelete }) => {
  return (
    <View style={orderStyles.order}>
      <View style={orderStyles.data}>
        <Text style={orderStyles.date}>Fecha: {formatDate(item.date)}</Text>
        <Text>Total: ${sumTotal(item.items)}</Text>
      </View>
      <View style={orderStyles.actions}>
        <TouchableOpacity onPress={() => onDelete(item.id)} style={orderStyles.button}>
          <Ionicons size={16} color="white" name="md-trash" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default OrderItem;