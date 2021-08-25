import React, { useState, useEffect } from 'react';
import { View, Button, Text, ActivityIndicator, Alert } from 'react-native';
import * as Location from 'expo-location';
import Colors from '../../constants/colors';
import MapPreview from './MapPreview';
import { locationStyles } from './LocationStyles';

const LocationPicker = ({ navigation }) => {
    const [isFetching, setIsFetching] = useState(false);
    const [pickedLocation, setPickedLocation] = useState();
  
    useEffect(() => {
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert(
            'Permisos insuficientes',
            'Necesita dar permisos de localización para la app',
            [{ text: 'Ok' }],
          );
        }
      })();
    }, []);

    const getLocationHandler = async () => {
        try {
          setIsFetching(true);
          const location = await Location.getCurrentPositionAsync({
            timeout: 5000,
          });
          setPickedLocation({
            lat: location.coords.latitude,
            lng: location.coords.longitude,
          });
        } catch(err) {
          Alert.alert(
            'No se pudo obtener la localización',
            'Por favor intente nuevamente.',
            [{ text: 'Ok' }],
          )
        } finally {
          setIsFetching(false);
        }
      };

    return (
        <View style={locationStyles.locationPicker}>
            <View style={locationStyles.actions}>
                  <Button
                      title="¿Donde puedo utilizar el cupón?"
                      color={Colors.primary}
                      onPress={getLocationHandler}
                  />
              </View>
              <MapPreview style={locationStyles.mapPreview} location={pickedLocation}>
              {isFetching
                  ? <ActivityIndicator size="large" color={Colors.primary} />
                  : <Text>Cargando...</Text>
              }
              </MapPreview> 
        </View>
    )
}

export default LocationPicker;