import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function ListItemDeleteAction({onPress}) {
    return (
        <TouchableWithoutFeedback onPress = {onPress}>
            <View style = {styles.container}>
                <MaterialCommunityIcons name="trash-can" size={30} color="white" />
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container:{
        width:70, 
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center'
    }
})

export default ListItemDeleteAction;