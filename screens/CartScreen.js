import React, { useState } from 'react';
import { View, Text, Button, FlatList, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { confirmCart, deleteItem } from '../store/actions/cart.action';
import Colors from '../constants/colors';
import {screenStyles} from './screenStyles';
import CartItem from '../components/cart/CartItem';
import ModalDelete from '../components/modals/ModalDelete';

const CartScreen = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);
  const total = useSelector(state => state.cart.total);
  const user = useSelector(state => state.auth.user);
  
  const [modalDeleteVisible, setModalDeleteVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState({});

  const handleConfirmDelete = () => {
    const idSelected = itemSelected.id
    dispatch(deleteItem(idSelected));
    setModalDeleteVisible(false);
    setItemSelected({});
  }
  
  const handleModalDelete = id => {
    setItemSelected(items.find(item => item.id === id));
    setModalDeleteVisible(true);
  }

  const handleConfirmCart = () => {
      dispatch(confirmCart(items, user));
      Alert.alert("Confirmación", "¡Muchas gracias por la compra! Su orden ha sido generada.",[{ text: "OK" }]);
  }

  const renderItem = (data) => {
    return (
      <CartItem item={data.item} onDelete={handleModalDelete} />
    )
  }

  return (
    <View style={screenStyles.containerCart}>
      <View style={screenStyles.listCart}>
        <FlatList
          data={items}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      </View>
      <View style={screenStyles.footerCart}>
        <Text style={screenStyles.textCart}>Su compra es por: </Text>
        <Text style={screenStyles.textCart}>${total}</Text>
      </View>
      <Button title="CONFIRMAR" color={Colors.primary} onPress={handleConfirmCart} disabled={items.length < 1}/>
      <ModalDelete
        modalDeleteVisible={modalDeleteVisible}
        itemSelected={itemSelected}
        setModalDeleteVisible={setModalDeleteVisible}
        handleConfirmDelete={handleConfirmDelete}
      />
    </View>
  )
}

export default CartScreen;