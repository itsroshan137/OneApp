import React from 'react';
import { View, Text, StyleSheet,Image, ImageBackground } from 'react-native';

import AppButton from '../Components/AppButton';

function WelcomeScreen(props) {
    return (
        <ImageBackground blurRadius = {3} style = {styles.background} source = {require('../assets/background.jpg')}>
            <View style = {styles.logoContainer}>
                <Image style = {styles.logo} source = {require('../assets/oneapp.png')}/>
                <Text style = {styles.tagline}>Sell What you Don't Need</Text>
            </View>
            <View style = {styles.buttonContianer}>
                <AppButton title = "login" onPress = {() => {console.log("Login Tapped")}}/>
                <AppButton title = "register" color = "green" onPress = {() => {console.log("Register Tapped")}}/>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:"center",
    },
    buttonContianer:{
        paddingHorizontal:10,
        width:'100%'
    },
    logo:{
        width:140,
        height:140,
    },
    logoContainer:{
        position:'absolute',
        justifyContent:'center',
        alignItems:'center',
        top:70,
    },
    register:{
        backgroundColor:'green'
    },
    tagline:{
        fontSize:18,
        fontWeight:'800'
    }
})

export default WelcomeScreen;