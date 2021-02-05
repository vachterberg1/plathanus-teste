import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, SafeA } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import LoginPage from './src/screens/login'
import VerificationNumber from './src/screens/subscribe/verification-number'
import Terms from './src/screens/terms/terms'
import VerificationCode from './src/screens/subscribe/verification-code'
import CreateAccount from './src/screens/subscribe/create-account'
import FinishAccount from './src/screens/subscribe/finish-account'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginPage" headerMode={false}>
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="VerificationNumber" component={VerificationNumber}/>
        <Stack.Screen name="Terms" component={Terms}/>
        <Stack.Screen name="VerificationCode" component={VerificationCode}/>
        <Stack.Screen name="CreateAccount" component={CreateAccount}/>
        <Stack.Screen name="FinishAccount" component={FinishAccount}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;