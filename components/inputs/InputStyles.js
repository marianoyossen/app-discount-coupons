import { StyleSheet } from "react-native";

export const inputStyles = StyleSheet.create({
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: 'lightgray',
      padding: 10,
    },
    input: {
      borderWidth: 1,
      borderColor: 'lightgray',
      width: 330,
      height: 50,
      backgroundColor: 'white',
      paddingLeft: 5,
    },
    addCart: {
        marginRight:5,
    },
    formControl: {
      width: '100%',
    },
    label: {
      fontFamily: 'open-sans-bold',
      marginVertical: 8,
    },
    input: {
      paddingHorizontal: 2,
      paddingVertical: 5,
      borderBottomColor: '#ccc',
      borderBottomWidth: 1,
    },
    errorContainer: {
      marginTop: 6,
      marginBottom: 8,
    },
    errorText: {
      color: "#ff0000",
    },
});