import React from 'react';
import { View, Text } from "react-native";
import { screenStyles } from './screenStyles';
import { useSelector, useDispatch } from 'react-redux';
import { FlatList } from 'react-native';
import CategoryGridItem from '../components/grids/CategoryGridItem';
import { selectCategory } from '../store/actions/category.action';

const HomeScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const couponCategories = useSelector(state => state.categories.list)
    
    const handleSelected = (item) => {
        dispatch(selectCategory(item.id))
        navigation.navigate('CouponCategory', { name: item.name });
      }
    
    const renderItem = ({ item }) => <CategoryGridItem item={item} onSelected={handleSelected} />
    
    return (
        <>
            <View style={screenStyles.header}>
                <Text style={screenStyles.text}>CATEGORIAS DE CUPONES</Text>
            </View>

            <FlatList
                data={ couponCategories }
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                numColumns={2}
            />
        </>
    )
} 

export default HomeScreen;