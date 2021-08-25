import React, { useLayoutEffect, useEffect } from 'react'
import { View, FlatList, ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/admin/HeaderButton';
import CouponItem from '../components/admin/CouponItem';
import { loadCoupons } from '../store/actions/admincoupons.action';
import { screenStyles } from './screenStyles';

const AdminCouponsScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const coupons = useSelector(state => state.admincoupons.coupons);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item
                        title="New"
                        iconName="md-add"
                        onPress={() => navigation.push('New')}
                    />
                </HeaderButtons>
            ),
        });
    }, [navigation]);

    useEffect(() => {
        dispatch(loadCoupons());
    }, []);

    const renderItem = data => (
        <CouponItem
            title={data.item.title}
            commerceName={data.item.commerceName}
            discountPrice={data.item.discountPrice}
            imageURL={data.item.imageURL}
        />
    )

    return (
        <View style={screenStyles.couponDetailContainer}>
            <ScrollView>
            <FlatList
                data={coupons}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
            </ScrollView>
        </View>
    )
}

export default AdminCouponsScreen
