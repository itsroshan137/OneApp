import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

import {MaterialCommunityIcons} from '@expo/vector-icons';

function AppTextInput({icon, ...otherProps}) {
    return (
        <View style = {styles.container}>
            {icon && <MaterialCommunityIcons name = {icon} size = {20} style = {styles.icon}/>}
            <TextInput {...otherProps} style = {styles.text}></TextInput>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        borderRadius:25,
        backgroundColor:'#eee',
        width:'100%',
        padding:10,
        alignItems:'center',
        marginVertical:10,
    },
    icon:{
        marginRight:10
    },
    text:{
        fontSize:18,
        flex:1
    }
})

export default AppTextInput;