import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Card from '../Components/Card';
import Screen from '../Components/Screen';

const listings = [
    {
        id:1,
        title:"Red Jacket For Sale",
        price: 100, 
        image: require('../assets/jacket.jpg')
    },
    {
        id:2,
        title:"Couch in Great Condition",
        price: 500, 
        image: require('../assets/jacket.jpg')
    },
]

function ListingsScreen(props) {
    return (
        <Screen style = {styles.screen}>
            <FlatList 
                data = {listings}
                keyExtractor = {(item) => item.id.toString()}
                renderItem = {({item}) => 
                    <Card 
                        title = {item.title}
                        subTitle = {"$" + item.price} 
                        image = {item.image}
                    />
                }
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:20,
        backgroundColor:'#f5f5f5'
    }    
})

export default ListingsScreen;