import { StyleSheet } from "react-native";

export const gridStyles = StyleSheet.create({
    gridItem: {
      flex: 1,
      borderRadius: 6,
      margin: 10,
      height: 200,
    },
    container: {
      flex: 1,
      borderRadius: 5,
      elevation: 2,
      justifyContent: 'center',
      textAlignVertical: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 16,
      padding: 15,
      color: 'black',
      fontWeight: 'bold',
    },
    image: {
      flex: 1,
      width: 170,
      height: 200,
      opacity: 0.60,
    },
  });