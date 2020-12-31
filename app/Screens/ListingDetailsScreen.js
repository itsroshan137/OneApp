import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import AppText from '../Components/AppText';
import LIstItem from '../Components/LIstItem';

function ListingDetailsScreen() {
    return (
        <View>
            <Image style = {styles.image} source = {require('../assets/jacket.jpg')}/>
            <View style = {styles.detailsContainer}>
                <AppText style = {styles.title}>Red jacket for sale</AppText>
                <AppText style = {styles.price}>$300</AppText>
                <View style = {styles.listingsContainer}>
                    <LIstItem 
                        image = {require("../assets/roshan.jpg")}
                        title = "Roshan Bhandari"
                        subTitle = "5 Listings"
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    detailsContainer:{
        padding:20
    },
    image:{
        width:'100%',
        height:300
    },   
    listingsContainer:{
        marginVertical:10
    },
    price:{
        fontWeight:'bold',
        color:'green'
    },
    title:{
        fontSize:24,
        fontWeight:'800'
    },
})

export default ListingDetailsScreen;