import React from 'react'
import 
{View,
Text,
TextInput,
TouchableOpacity,
StyleSheet,
KeyboardAvoidingView,
Platform,
ScrollView,
Alert
} from 'react-native'
import Header from '../../components/header'
import {Formik} from 'formik'
import {TextInputMask} from 'react-native-masked-text'

const CreateAccount = ({navigation}) => {
    return(
        <>
        <KeyboardAvoidingView enabled behavior={ Platform.OS === 'ios'? 'padding': null}
        style= {caStyles.FlexGrowOne}>

        <ScrollView>
        <Header 
        title="Inscreva-se!"
        text="Por favor, preencha seus dados para completar sua inscrição"/>

        <View style={caStyles.containerImage}>
            <View style={caStyles.onlineImage}/>
        </View>

        <View style={caStyles.containerInput}>
            <Formik initialValues={{
                name: '',
                dt_birthday: '',
                cpf: '',
                email: '',
                password: ''
            }}
            onSubmit={(values) => {
                if (values.name === '' || values.dt_birthday  === ''|| values.email==='' || values.cpf==='' || values.password === '') {
                    Alert.alert('Por favor, corrija se seus dados estão corretos')
                } else  {
                    navigation.navigate('FinishAccount')
                }
            }}>
                {({handleChange, handleBlur, handleSubmit, values, touched, errors}) => { 
                return ( 
                <>
                <TextInput
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name || ''}
                style={caStyles.TextInput}
                placeholder="Nome completo"/>

                <TextInputMask
                type={'datetime'}
                onChangeText={handleChange('dt_birthday')}
                onBlur={handleBlur('dt_birthday')}
                value={values.dt_birthday || ''}
                style={caStyles.TextInput}
                placeholder="Data de nascimento"
                maxLength={10}
                />

                <TextInputMask
                type={'cpf'}
                onChangeText={handleChange('cpf')}
                onBlur={handleBlur('cpf')}
                value={values.cpf || ''}
                style={caStyles.TextInput}
                placeholder="CPF"
                maxLength={14}
                />

                <TextInput
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email || ''}
                style={caStyles.TextInput}
                placeholder="E-mail"/>

                <TextInput
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password || ''}
                style={caStyles.TextInput}
                placeholder="Senha (até 8 digitos)"
                maxLength={8}
                secureTextEntry={true}/>

                <TouchableOpacity 
                style={caStyles.ButtonConfirm}
                onPress={handleSubmit}>
                <Text 
                    style={{color: '#fff', fontSize: 16,}}>
                    Inscrever
                </Text>
                </TouchableOpacity>
                </>
                )}}
            </Formik>
        </View>
        </ScrollView>
        </KeyboardAvoidingView>
        </>
    )
}

export default CreateAccount;

const caStyles = StyleSheet.create({

    containerImage: {
        marginVertical: 13,
        marginHorizontal: 40,
        height: 117,
        width: 117,
        backgroundColor: '#CCC',
        borderRadius: 300,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },

    onlineImage: {
        height: 30,
        width: 30,
        borderRadius: 30,
        position: 'relative',
        right: 20,
        bottom: 20,
        backgroundColor: 'green',
    },

    containerInput: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    FlexGrowOne: {
        flexGrow: 1,
    },
    TextInput: {
        borderBottomWidth: 1,
        borderBottomColor: '#BDBDBD',
        width: '80%',
        marginTop: 5,
    },

    ButtonConfirm: {
        width: '80%',
        height: 45,
        backgroundColor: '#205CBE',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        marginTop: 45,
        marginBottom: 15,
    },
})