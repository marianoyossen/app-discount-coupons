import { StyleSheet } from "react-native"

export const locationStyles = StyleSheet.create({
    locationPicker: {
        marginVertical: 15,
    },
    mapPreview: {
        borderWidth: 1,
        borderColor: 'lightgray',
        marginBottom: 10,
        width: '100%',
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        alignItems: 'center',  
    },
    actions: {
        justifyContent: 'space-around',
        width: '100%',
    },
    mapImage: { 
        width: '100%',
        height: '100%',
    }
});

