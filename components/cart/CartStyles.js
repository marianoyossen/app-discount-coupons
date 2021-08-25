import { StyleSheet } from "react-native";
import Colors from '../../constants/colors';

export const cartStyles = StyleSheet.create({
    item: {
        flex: 1,
        padding: 8,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
      },
      header: {
        fontFamily: 'open-sans-bold',
      },
      detail: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      text: {
        fontSize: 16,
        fontFamily: 'open-sans',
        fontWeight: 'bold',
      },
      button: {
        backgroundColor: Colors.primary,
        width: 24,
        height: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
      },
      actions: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: 60,
      },
});