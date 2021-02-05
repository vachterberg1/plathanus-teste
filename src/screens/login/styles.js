import {StyleSheet} from 'react-native'

const stylesLogin = StyleSheet.create({
    containerInputs: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 25,
    },

    TextInput: {
        borderBottomWidth: 1,
        borderBottomColor: '#BDBDBD',
        width: '90%',
        paddingHorizontal: 20,
        marginTop: 5,
    },

    ButtonConfirm: {
        width: '90%',
        height: 42,
        backgroundColor: '#205CBE',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        marginTop: 45,
    },

    ButtonPassword: {
        marginTop: 20,
    },

    CreateAccount: {
        marginTop: 40,
        flexDirection: 'row',
        width: '80%',
        alignItems: 'center'
    }
})

export default stylesLogin;