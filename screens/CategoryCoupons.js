import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import CardItem from '../components/cards/CardItem';
import { filterCoupon, selectCoupon } from '../store/actions/coupon.action';

const CategoryCouponScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const categoryCoupons = useSelector(state => state.coupons.filteredCoupons);
  const category = useSelector(state => state.categories.selected);

  useEffect(() => {
    dispatch(filterCoupon(category.id));
  }, [])

  const handleSelected = (item) => {
    dispatch(selectCoupon(item.id))
    navigation.navigate('CouponDetail', { name: item.name });
  }
  const renderItem = ({ item }) => <CardItem item={item} onSelected={handleSelected} />

  return (
    <FlatList
      data={categoryCoupons}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
    />
  )
}

export default CategoryCouponScreen;
