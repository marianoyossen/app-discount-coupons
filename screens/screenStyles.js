import { StyleSheet } from "react-native";

export const screenStyles = StyleSheet.create({
    screen: {
        paddingTop: 50,
        backgroundColor: '#F0F0F0',
        flex: 1,
      },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#023e8a',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    header: {
        width: '100%',
        height: 50,
        backgroundColor: '#023e8a',
        alignItems: 'center',
        justifyContent: 'center',
    },
    footer: {
        width: '100%',
        height: 90,
        backgroundColor: 'lightgray',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 20,
        bottom: 0,
    },   
    main: {
        flex: 1
    },
    couponDetailContainer: {
        flex: 1,
        textAlignVertical: 'center',
        alignItems: 'center',
        flexDirection: "column",
        marginBottom: 120,
    },
    couponDetailTitle: {
        fontSize: 25,
        marginVertical: 20,
        fontWeight: 'bold',
    },
    couponDetailSubtitle: {        
        fontSize: 20,
        marginBottom: 20,
    },
    couponDetailImage: {
        marginBottom: 20,
        height: 200,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
    couponDetailText: {
        marginVertical: 10,
        marginHorizontal: 20,
    },
    couponDetailTextOriginalPrice: {
        fontSize: 18,
        marginVertical: 10,
    },
    couponDetailTextDiscountPrice: {
        fontSize: 22,
        marginVertical: 10,
    },
    screenAuth: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    headerAuth: {
        alignItems: 'center',
        marginBottom: 50,
      },
    containerAuth: {
        width: '80%',
        maxWidth: 400,
        height: '50%',
        maxHeight: 400,
        padding: 12,
        justifyContent: 'center',
      },
    footerAuth: {
        marginTop: 24,
      },
    buttonAuth: {
        marginBottom: 8,
      },
    logoAuth: {
        width: 200,
        height: 100,
        display: 'flex',
        justifyContent: 'center',
      },
    containerCart: {
        flex: 1,
        padding: 12,
        marginBottom: 100,
      },
    footerCart: {
        flex: 2,
        borderTopColor: '#ccc',
        borderTopWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
      },
    listCart: {
        flex: 6,
      },
    textCart: {
        fontSize: 24,
        fontFamily: 'open-sans-bold',
        padding: 8,
      },
    containerOrder: {
        flex: 1,
        padding: 12,
      },
    adminContainer: {
        flex: 1,
        margin: 30,
        marginBottom: 120,
    },
    adminLabel: {
        fontSize: 18,
        marginBottom: 10,
    },
    adminInput: {
        borderBottomColor: '#cccccc',
        borderBottomWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 2,
        paddingVertical: 4,
        backgroundColor: '#f9f9f9',
    },
    adminFooter: {
        marginTop: 30,
    },
    featuredContainer: {
      flexDirection: 'row',
      marginBottom: 10,
    },
    adminImage: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center',
      marginBottom: 20,
    },
    adminSelect: {
      marginBottom: 30,
      backgroundColor: '#f9f9f9',
    },
});