import React from 'react';
import { View, Modal, Text, Pressable } from "react-native"
import { modalStyles } from './ModalStyles';

const ModalDetail = ({modalDetailVisible, itemSelected, setModalDetailVisible}) => {
    return (
    <Modal animationType="fade" visible={modalDetailVisible} transparent>
        <View style={modalStyles.modalContainer}>
            <View style={[modalStyles.modalContent, modalStyles.shadow]}>
                <Text style={modalStyles.modalMessage}>Detalle del item {itemSelected.value}</Text>
                <View style={modalStyles.fixToText}>
                <Pressable 
                    style={modalStyles.modalButton}
                    onPress={() => { setModalDetailVisible(false) }}
                >
                <Text style={modalStyles.modalButtonText}>OK</Text>
                </Pressable>
                </View>
            </View>
        </View>
    </Modal>
    )
};

export default ModalDetail;