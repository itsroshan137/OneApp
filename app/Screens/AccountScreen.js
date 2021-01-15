import React from 'react';
import { StyleSheet, View, FlatList, } from 'react-native';
import Screen from '../Components/Screen';
import ListItem from '../Components/LIstItem';
import Icon from '../Components/Icons';
import ListItemSeperator from '../Components/ListItemSeperator';

const menuItems  = [
    {
        title: "My Listings",
        icon:{
            name: 'format-list-bulleted',
            backgroundColor: 'red',
        }
    },
    {
        title: "My Messages",
        icon:{
            name: 'email',
            backgroundColor: 'green',
        }
    },
]

function AccountScreen(props) {
    return (
        <Screen style = {styles.screen}>
            <View style = {styles.container}>
                <ListItem 
                    title = "Roshan Bhandari"
                    subTitle = "bhandariroshan60@gmail.com"
                    image = {require('../assets/roshan.jpg')}
                />
            </View>
            <View style = {styles.container}>
                <FlatList 
                    data = {menuItems}
                    keyExtractor = {menuItem => menuItem.title}
                    renderItem = { ({item}) =>
                        <ListItem 
                            title = {item.title}
                            IconComponent = {
                                <Icon 
                                    name = {item.icon.name}
                                    backgroundColor = {item.icon.backgroundColor}
                                />
                            }
                        />
                    }
                    ItemSeparatorComponent = {ListItemSeperator}
                />
            </View>
            <ListItem 
                title = "Logout"
                IconComponent = {
                    <Icon 
                        name = "logout" backgroundColor = "#666"
                    />
                }
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
  container:{
      marginVertical:20
  },
  screen:{
      backgroundColor:'#f5f5f5'
  }

})

export default AccountScreen;