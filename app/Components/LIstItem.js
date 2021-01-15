import React from 'react';
import { View, Image, StyleSheet, TouchableHighlight } from 'react-native';

import Swipeable from 'react-native-gesture-handler/Swipeable';

import AppText from './AppText';

function LIstItem({title, subTitle, image, IconComponent, onPress, renderRightActions}) {
    return (
        <Swipeable renderRightActions = {renderRightActions}>
            <TouchableHighlight onPress = {onPress} underlayColor = "#f2f2f2" >
                <View style = {styles.container}>
                    {IconComponent}
                    {image && <Image style = {styles.image} source = {image} />}
                    <View style = {styles.detailsContainer}>
                        <AppText style = {styles.title}>{title}</AppText>
                        {subTitle && <AppText style = {styles.subTitle}>{subTitle}</AppText>}
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        padding:20,
        backgroundColor:'#fff'
    },
    detailsContainer:{
        marginLeft:10,
        justifyContent:'center'
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