import React from 'react';
import { View, Modal, Text, Pressable } from "react-native"
import { modalStyles } from './ModalStyles';

const ModalDelete = ({modalDeleteVisible, itemSelected, handleConfirmDelete, setModalDeleteVisible}) => {
    return(
        <Modal animationType="slide" visible={modalDeleteVisible} transparent>
            <View style={modalStyles.modalContainer}>
            <View style={[modalStyles.modalContent, modalStyles.shadow]}>
                <Text style={modalStyles.modalMessage}>Estás por eliminar el cupón de {itemSelected.commerceName} - {itemSelected.title} </Text>
                <Text style={modalStyles.modalMessage}>¿Confirmás?</Text>
                <View style={modalStyles.fixToText}>
                <Pressable 
                    style={modalStyles.modalButton}
                    onPress={handleConfirmDelete}
                >
                <Text style={modalStyles.modalButtonText}>SI</Text>
                </Pressable>
                <Pressable 
                    style={modalStyles.modalButton}
                    onPress={() => { setModalDeleteVisible(false) }}
                >
                <Text style={modalStyles.modalButtonText}>NO</Text>
                </Pressable>
                </View>
            </View>
            </View>
        </Modal>
    )
};
export default ModalDelete;
