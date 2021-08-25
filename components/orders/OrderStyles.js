import { StyleSheet } from "react-native"
import Colors from '../../constants/colors';

export const orderStyles = StyleSheet.create({
    order: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        height: 60,
        paddingBottom: 10,
        paddingHorizontal: 10,
        backgroundColor: 'white',
        shadowOffset: {
            width: 0,
            height: -10,
        },
        shadowOpacity: 0.25,
        shadowRadius:10,
        elevation: 30,
      },
      data: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,
      },
      actions: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: 60,
      },
      button: {
        backgroundColor: Colors.primary,
        width: 24,
        height: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
      },
      date: {
        marginRight: 50,
      }
  });