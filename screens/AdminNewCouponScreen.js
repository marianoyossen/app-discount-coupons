import React, { useState, useEffect } from 'react'
import { View, Text, Button, TextInput, ScrollView, Image } from 'react-native'
import { Checkbox } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { addCoupon } from '../store/actions/admincoupons.action';
import { screenStyles } from './screenStyles';
import Colors from '../constants/colors';
import * as ImagePicker from 'expo-image-picker';
import SelectInput from 'react-native-select-input-ios';
import { CATEGORIES } from '../data/categories'; 

const AdminNewCouponScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const [commerceName, setCommerceName] = useState('');
    const [title, setTitle] = useState('');
    const [originalPrice, setOriginalPrice] = useState('');
    const [discountPrice, setDiscountPrice] = useState('');
    const [description, setDescription] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [category, setCategory] = useState('1');
    const [featured, setFeatured] = useState(false);
    const [stock, setStock] = useState('');

    const onHandlerCommerceName = text => setCommerceName(text);
    const onHandlerTitle = text => setTitle(text);
    const onHandlerOriginalPrice = text => setOriginalPrice(text);
    const onHandlerDiscountPrice = text => setDiscountPrice(text);
    const onHandlerDescription = text => setDescription(text);
    const onHandlerCategory = category => setCategory(category);
    const onHandlerFeatured = featured => setFeatured(featured);
    const onHandlerStock = text => setStock(text);

    const onHandlerSave = () => {
        dispatch(addCoupon(commerceName, title, originalPrice, discountPrice, description, imageURL, category, featured, stock));
        navigation.goBack();
    }

    useEffect(() => {
        (async () => {
        if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
            alert('Necesita permisos para acceder a la galería de fotos.');
            }
        }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        });

        if (!result.cancelled) {
        setImageURL(result.uri);
        }
    };

    //Cargo el Select con las categorías actuales
    const categoriesSelect = [];
    for (var index in CATEGORIES) {
        categoriesSelect.push({value: CATEGORIES[index].id, label: CATEGORIES[index].name});
    }

    return (
        <View style={screenStyles.adminContainer}>
            <ScrollView>
                <Text style={screenStyles.adminLabel}>Nombre Comercio:</Text>
                <TextInput
                    style={screenStyles.adminInput}
                    onChangeText={onHandlerCommerceName}
                    value={commerceName}
                />
                
                <Text style={screenStyles.adminLabel}>Título:</Text>
                <TextInput
                    style={screenStyles.adminInput}
                    onChangeText={onHandlerTitle}
                    value={title}
                />
                
                <Text style={screenStyles.adminLabel}>Precio Original:</Text>
                <TextInput
                    style={screenStyles.adminInput}
                    onChangeText={onHandlerOriginalPrice}
                    value={originalPrice}
                />
                
                <Text style={screenStyles.adminLabel}>Precio Descuento:</Text>
                <TextInput
                    style={screenStyles.adminInput}
                    onChangeText={onHandlerDiscountPrice}
                    value={discountPrice}
                />
                
                <Text style={screenStyles.adminLabel}>Descripción:</Text>
                <TextInput
                    style={screenStyles.adminInput}
                    onChangeText={onHandlerDescription}
                    value={description}
                />
                
                <Text style={screenStyles.adminLabel}>Imagen:</Text>
                <View style={screenStyles.adminImage}>
                    <Button title="Seleccionar imagen" onPress={pickImage} color={Colors.primary}/>
                    {{imageURL} && <Image source={{ uri: imageURL }} style={{ width: 200, height: 200 }} />}
                </View>

                <Text style={screenStyles.adminLabel}>Categoría:</Text>
                <SelectInput value={category} options={categoriesSelect} onChange={onHandlerCategory} style={screenStyles.adminSelect}/>

                <View style={screenStyles.featuredContainer}>
                    <Text style={screenStyles.adminLabel}>Destacado:</Text>
                    <Checkbox
                        status={featured ? 'checked' : 'unchecked'}
                        onPress={() => { onHandlerFeatured(!featured);}}
                        color={'green'}
                        uncheckColor={'red'}
                    />
                </View>
                
                <Text style={screenStyles.adminLabel}>Stock:</Text>
                <TextInput
                    style={screenStyles.adminInput}
                    onChangeText={onHandlerStock}
                    value={stock}
                />

                <View style={screenStyles.adminFooter}>
                    <Button
                        title="Guardar Cupón"
                        onPress={onHandlerSave}
                        disabled={ commerceName === "" || title === "" || originalPrice === "" || 
                                    discountPrice === "" || description === "" || imageURL === "" || 
                                    category === "" || featured === "" || stock === ""}
                    />
                </View>
            </ScrollView>
        </View>
        
    )
}

export default AdminNewCouponScreen
