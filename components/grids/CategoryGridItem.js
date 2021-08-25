import React from 'react';
import {View, Text, ImageBackground , TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';
import { gridStyles } from './GridStyles';

const CategoryGridItem = ({ item, onSelected }) => {
  const TouchableComponent = Platform.OS === 'android' && Platform.version >= 21
    ? TouchableNativeFeedback
    : TouchableOpacity;

  return (
    <View style={gridStyles.gridItem}>
        <TouchableComponent onPress={() => onSelected(item)} style={{ ...gridStyles.container }}>    
            <ImageBackground source={item.imageURL} resizeMode="cover" style={gridStyles.image}/>
            <Text style={gridStyles.title}>{item.name.toUpperCase()}</Text>
        </TouchableComponent>
    </View>
  );
}

export default CategoryGridItem;