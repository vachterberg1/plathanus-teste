import React from 'react'
import {View, Text, TouchableOpacity, TextInput, StyleSheet, KeyboardAvoidingView, Alert} from 'react-native'
import Header from '../../components/header'
import { Formik} from 'formik';

const VerificationCode = ({navigation}) => {
    return (
        <KeyboardAvoidingView keyboardVerticalOffset={1} behavior="padding">
            <Header 
            title="Verificação!"
            text="Por favor, insira o código de 4 digitos enviado por SMS."/>

            <View style={stylesCode.containerInput}>
                <Formik 
                initialValues={{
                    nu_token: ""
                }}
                onSubmit={(values) => {
                    if (values.nu_token === "" || values.nu_token.length < 4) {
                        Alert.alert('Digite um código válido.')
                    } else {
                        navigation.navigate('CreateAccount')
                    }
                }}>
                    {({handleChange, handleBlur, handleSubmit, values, touched, errors}) => {
                        return (
                            <> 
                            <TextInput
                            onChangeText={handleChange('nu_token')}
                            onBlur={handleBlur('nu_token')}
                            value={values.nu_token || ''}
                            keyboardType="phone-pad"
                            style={stylesCode.TextInput}
                            placeholder="1 2 3 4"
                            maxLength={4}
                            textAlign="center"/>

                            <TouchableOpacity 
                                style={stylesCode.ButtonConfirm}
                                onPress={handleSubmit}>
                                    <Text 
                                    style={{color: '#fff', fontSize: 16,}}>
                                        Confirmar
                                    </Text>
                            </TouchableOpacity>
                            </>
                        )
                    }}
                </Formik>
            </View>
        </KeyboardAvoidingView>
    )
}

export default VerificationCode;

const stylesCode = StyleSheet.create({

    containerInput: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 60,
    },
    TextInput: {
        borderBottomWidth: 1,
        borderBottomColor: '#BDBDBD',
        width: '70%',
        marginTop: 5,
        fontSize: 36,
        letterSpacing: 6,
    },

    ButtonConfirm: {
        width: '70%',
        height: 45,
        backgroundColor: '#205CBE',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        marginTop: 45,
        marginBottom: 5,
    },
})