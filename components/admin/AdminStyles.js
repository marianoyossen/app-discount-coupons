import { StyleSheet } from "react-native"

export const adminStyles = StyleSheet.create({
    couponItem: {
        paddingVertical: 16,
        paddingHorizontal: 30,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        shadowOffset: {
            width: 0,
            height: -10,
        },
        shadowOpacity: 0.25,
        shadowRadius:10,
        elevation: 30,
    },
    info: {
        marginLeft: 25,
        width: 250,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    title: {
        color: 'black',
        fontSize: 18,
        marginBottom: 6,
    },
    description: {
        color: 'black',
        fontSize: 16,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    }
});