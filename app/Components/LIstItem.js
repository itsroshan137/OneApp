import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import AppText from './AppText';

function LIstItem({title, subTitle, image}) {
    return (
        <View style = {styles.container}>
            <Image style = {styles.image} source = {image} />
            <View>
                <AppText style = {styles.title}>{title}</AppText>
                <AppText style = {styles.subTitle}>{subTitle}</AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
    },
    image: {
        width:70,
        height:70,
        borderRadius:35,
        marginRight:20,
    },
    title:{
        fontSize:18,
        fontWeight:'bold'
    },
    subTitle:{
        color:'green'
    }
})

export default LIstItem;