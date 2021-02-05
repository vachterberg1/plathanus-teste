import React from 'react'
import { ImageBackground, View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import finishedImage from '../../assets/finished.png'

const FinishAccount = ({navigation}) => {
    return (
        <View style={faStyles.container}>
            <ImageBackground source={finishedImage} style={faStyles.imageBg}/>
            <Text style={{fontSize: 24, fontWeight: '500', color: '#fff', marginTop: 20,}}>
                Verificação Iniciada
            </Text>
            <Text style={{fontSize: 16, color: '#fff', width: '60%', marginTop: 10, textAlign: 'center'}}>
            Você iniciou seu cadastro no desafio com sucesso.
            Após analisar sua solicitação, enviaremos um e-mail com o resultado.
            </Text>

            <TouchableOpacity 
            onPress={() => navigation.navigate('LoginPage')}
            style={faStyles.buttonBack}>
                <Text style={{color: '#fff'}}>Tela Inicial</Text>
            </TouchableOpacity>
        </View>
    )
}

export default FinishAccount;

const faStyles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#2B32B2',
        height: '100%'
    },
    imageBg: {
        width: 181,
        height: 126,
        marginTop: 120,
    },

    buttonBack: {
        marginTop: 25,
        borderWidth: 1,
        borderColor: '#fff',
        width: '70%',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    }
})