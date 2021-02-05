import React from 'react';
import { Image, StyleSheet } from 'react-native';
import * as Yup from 'yup';

import Screen from '../Components/Screen';
import { AppForm, AppFormField, SubmitButton, } from '../Components/Forms/index';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})

function LoginScreen(props) {
    return (
        <Screen style = {styles.container}>
            <Image
                style = {styles.logo} 
                source = {require('../assets/oneapp.png')}/>
            
            <AppForm
                initialValues = {{email:'', password:''}}
                onSubmit = {values => console.log(values)}
                validationSchema = {validationSchema}
            >
                <AppFormField 
                    autoCapitalize = "none"
                    autoCorrect = {false}
                    keyboardType = "email-address"
                    name = "email"
                    placeholder = "Email"
                    icon = "email"
                />
                <AppFormField 
                    autoCapitalize = "none"
                    autoCorrect = {false}
                    icon = "lock"
                    name = "password"
                    placeholder = "Password"
                    secureTextEntry
                />
                <SubmitButton title = "Login"/>
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container:{
        padding:10
    },
    logo:{
        width:100,
        height:100,
        alignSelf:'center',
        marginTop:50,
        marginBottom: 20
    },

})

export default LoginScreen;