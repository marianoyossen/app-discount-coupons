import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, FlatList } from 'react-native';
import OrderItem from '../components/orders/OrderItem';
import { getOrders, deleteOrder } from '../store/actions/order.action';
import {screenStyles} from './screenStyles';

const OrdersScreen = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const orders = useSelector(state => state.orders.items);

  useEffect(() => {
    dispatch(getOrders(user));
  }, []);

  const onDeleteHandler = (id) => dispatch(deleteOrder(id))

  const renderItem = (data) => (
    <OrderItem item={data.item} onDelete={onDeleteHandler} />
  )

  return (
    <View style={screenStyles.containerOrder}>
      <FlatList
        data={orders}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  )
}

export default OrdersScreen;