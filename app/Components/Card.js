import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import AppText from './AppText';

function Card({image, title, subTitle}) {
    return (
        <View style = {styles.card}>
            <Image style = {styles.image} source = {image}/>
            <View style = {styles.detailsCotainer}>
                <AppText style = {styles.title}>{title}</AppText>
                <AppText style = {styles.subTitle}>{subTitle}</AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card:{
        borderRadius: 15,
        backgroundColor: 'white',
        marginBottom: 20,
        overflow: 'hidden',
    },
    detailsCotainer:{
        padding:20
    },
    image:{
        width:'100%',
        height:200
    },
    subTitle:{
        fontWeight:'bold',
        color:'green'
    }
})
export default Card;