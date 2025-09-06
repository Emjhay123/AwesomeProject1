import { StyleSheet } from "react-native";

export const styles = StyleSheet.create ({ //Create a style sheet declaration
    profileCard:{
        // borderWidth: 1,
        // borderColor: 'red', // For outline and notes purposes. Please ignore
        // borderStyle: 'solid',
        padding: 10,
        width: '90%',
        backgroundColor:'#fff',
        elevation: 10, //For shadow effect
        borderRadius: 10,
        marginBottom: 15,
    },
    header:{
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    username:{
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
    },
    desc:{
        fontSize: 16,
        textAlign: 'center',
        lineHeight: 22,
        marginTop: 5,
    },
    avatar:{
        height: 250,
        width: 250,
        borderRadius: 50,
        borderWidth: 3,
        borderStyle:'dotted',
        borderColor: 'green',
        marginBottom: 10,
        elevation: 10,
        resizeMode: 'cover',
        overflow: 'hidden',
    },
    icons:{
        height: 40,
        width: 40,
        borderRadius: 50,
    },
    socialMediaIcons:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 20
    }
});

export default styles; //export the variable where the stylesheet data is stored