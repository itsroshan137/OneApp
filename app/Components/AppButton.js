import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

function AppButton({title, onPress, color = 'red'}) {
    return (
        <TouchableOpacity style = {[styles.button, { backgroundColor: color} ]} onPress = {onPress}>
            <Text style = {styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:'red',
        borderRadius:25,
        padding:15,
        width:'100%',
        height:70,
        justifyContent:'center',
        alignItems:'center',
        marginVertical:10
    },
    text:{
        fontSize:18,
        fontWeight:'bold',
        textTransform:'uppercase',
        color:'white'
    }
})

export default AppButton;