import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { adminStyles } from './AdminStyles';
import * as FileSystem from 'expo-file-system';

const CouponItem = props => {
  return (
    <TouchableOpacity onPress={props.onSelect} style={adminStyles.couponItem}>
      <Image style={adminStyles.image} source={ props.imageURL.includes(FileSystem.documentDirectory) ? { uri: props.imageURL} :  props.imageURL} />
      <View style={adminStyles.info}>
          <Text style={adminStyles.description}>{props.commerceName}</Text>
          <Text style={adminStyles.title}>{props.title}</Text>
          <Text style={adminStyles.description}>Precio con descuento: ${props.discountPrice}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default CouponItem;