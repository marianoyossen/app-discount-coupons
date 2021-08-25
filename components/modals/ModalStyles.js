import { StyleSheet } from "react-native"

export const modalStyles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    modalContent: {
      padding: 30,
      backgroundColor: 'white',
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
    modalMessage: {
      fontSize: 18,
      padding: 10,
      textAlign: 'center',
    },
    modalTitle: {
      fontSize: 30,
      marginTop: 10,
      marginBottom: 20,
    },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    shadow: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    modalButton: {
      paddingVertical: 15,
      paddingHorizontal: 25,
      margin: 10,
      backgroundColor: 'lightgray',
    },
    modalButtonText: {
      color: 'white',
      fontWeight: 'bold',
    }
  });