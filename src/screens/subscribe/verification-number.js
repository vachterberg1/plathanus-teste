import React from 'react'
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import Header from '../../components/header'
import numStyles from './styles'
import { Formik} from 'formik';
import {TextInputMask} from 'react-native-masked-text'

const VerificationNumber = ({navigation}) => {

    return (
        <View>
            <Header title="Olá!" text="Venha fazer parte do nosso time!"/>

            <View style={numStyles.containerInput}>
                <Text 
                style={{fontSize: 16, color: '#424242', textAlign: 'center'}}>
                    Informe o número do seu telefone para se Inscrever
                </Text>

                <Formik
                initialValues={{
                    nu_phone: ""
                }}
                onSubmit={(values) => {
                    if (values.nu_phone === "" || values.nu_phone.length < 11) {
                        Alert.alert('Digite um número de celular válido.')
                    } else {
                        navigation.navigate('VerificationCode')
                    }
                }}
                >
                {({handleChange, handleBlur, handleSubmit, values, touched, errors}) => {
                    return (
                        <> 
                    <TextInputMask
                    type={'cel-phone'}
                    onChangeText={handleChange('nu_phone')}
                    onBlur={handleBlur('nu_phone')}
                    value={values.nu_phone || ''}
                    style={numStyles.TextInput}
                    placeholder="(00) 00000-0000"
                    maxLength={16}
                    required/>

                    <TouchableOpacity 
                    style={numStyles.ButtonConfirm}
                    onPress={handleSubmit}
                    >
                        <Text 
                        style={{color: '#fff', fontSize: 16,}}>
                            Enviar
                        </Text>
                    </TouchableOpacity>
                    </>
                    )
                }}
                </Formik>

                <TouchableOpacity
                style={{marginTop: 90,}}
                onPress={() => navigation.navigate('Terms')}>
                    <Text>Ao se inscrever, você concorda com nossos</Text>
                    <Text style={{fontWeight: 'bold'}}>Termos de Serviço e Política de Privacidade</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default VerificationNumber;