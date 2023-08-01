import { StyleSheet } from "react-native";

export default StyleSheet.create({
    card: {
      backgroundColor: '#fff',
      borderRadius: 8,
      padding: 16,
      marginVertical: 20,
      width:300
    },
    titleContainer: {
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
      paddingBottom: 8,
    },
    img:{
      width:150,
      height:150,
      borderRadius:100,
      borderWidth:2,
      borderColor:'darkgreen',
      alignSelf:'center'
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    contentContainer: {
      marginTop: 8,
    },
    content: {
      fontSize: 14,
    },
    button: {
        marginTop: 16,
        backgroundColor: 'darkgreen',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
      },
      buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
      },
  });