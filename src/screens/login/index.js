import React from 'react'
import {Text, View, TextInput, TouchableOpacity, Fo, Button} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import StylesLogin from './styles'
import Header from '../../components/header'


const LoginPage = () => {

    const navigation = useNavigation();

    return (
        <>
        <Header 
        title="Bem vindo!"
        text="Temos um desafio para você."/>

        <View style={StylesLogin.containerInputs}>
            <TextInput 
            keyboardType="phone-pad"
            style={StylesLogin.TextInput}
            placeholder="Telefone"
            maxLength={11}/>
            <TextInput 
            style={StylesLogin.TextInput}
            placeholder="Senha"
            textContentType="password"
            secureTextEntry={true}/>

            <TouchableOpacity 
            style={StylesLogin.ButtonConfirm}
            onPress={() => {}}>
                <Text
                 style={{color: '#fff', fontSize: 16,}}>
                     Entrar
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={StylesLogin.ButtonPassword}
            onPress={() => {}}>
                <Text 
                style={{color: '#205CBE', fontSize: 16, fontWeight: 'bold'}}>
                    Recuperar senha
                </Text>
            </TouchableOpacity>

            <View style={StylesLogin.CreateAccount}>
                <Text>Não tem uma conta?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('VerificationNumber')}>
                    <Text 
                    style={{color: '#205CBE', fontSize: 16, fontWeight: 'bold', marginLeft: 8,}}>
                        Inscreva-se
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
        </>
    )
}

export default LoginPage