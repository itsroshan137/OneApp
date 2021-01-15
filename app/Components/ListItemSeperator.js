import React from 'react';
import {View, StyleSheet} from 'react-native';

function ListItemSeperator(props) {
    return (
        <View style = {styles.seperator}/>
    );
}

const styles = StyleSheet.create({
    seperator:{
        width:'100%',
        height:1,
        backgroundColor:'#f2f2f2'
    }
})

export default ListItemSeperator;