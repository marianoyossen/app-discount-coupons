import React from 'react';
import { View, Text, Image, Button, ScrollView, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { screenStyles } from './screenStyles';
import Colors from '../constants/colors';
import { addItem } from '../store/actions/cart.action';
import LocationPicker from '../components/location/LocationPicker';

const CouponDetailScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const item = useSelector(state => state.coupons.selected) || {};
    const handleAddItem = () => {
        dispatch(addItem(item));
        Alert.alert("Confirmación", "Se ha agregado el cupón al carrito de compra",[{ text: "OK" }]);
    }
    return (
        <View style={screenStyles.couponDetailContainer}>
            <ScrollView>
                <Text style={screenStyles.couponDetailTitle}>{item.commerceName}</Text>
                <Text style={screenStyles.couponDetailSubtitle}>{item.title}</Text>
                <Image style={screenStyles.couponDetailImage} source={item.imageURL} />
                <Text>Descripción:</Text>
                <Text style={screenStyles.couponDetailText}>
                    {item.description}
                </Text>
                <Text style={screenStyles.couponDetailTextOriginalPrice}>
                    Precio original: <Text style={{textDecorationLine: 'line-through'}}>${item.originalPrice}</Text>
                </Text>
                <Text style={screenStyles.couponDetailTextDiscountPrice}>
                    Precio con descuento: ${item.discountPrice}
                </Text>
                <LocationPicker navigation={navigation} />
                <Button title="AGREGAR AL CARRITO" color={Colors.primary} onPress={handleAddItem} />
            </ScrollView>
        </View>
        
    )
}

export default CouponDetailScreen;
