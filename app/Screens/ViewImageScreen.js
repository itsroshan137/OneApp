import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

function ViewImageScreen(props) {
    return (
        <View style = {styles.container}>
            <View style = {styles.iconContainer}>
                <View style = {styles.leftIcon}>
                    <MaterialCommunityIcons name = "close" color = "white" size = {35} />
                </View>
                <View style = {styles.rightIcon}>
                    <MaterialCommunityIcons name = "trash-can-outline" color = "white" size = {35} />
                </View>
            </View>
            <Image style = {styles.image} resizeMode = "contain" source = {require('../assets/chair.jpg')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black'
    },
    image:{
        width:'100%',
        height:'100%'
    },
    leftIcon:{
        left:20,
    },
    iconContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        top:40,
    },
    rightIcon:{
        right:20,
    }
})

export default ViewImageScreen;