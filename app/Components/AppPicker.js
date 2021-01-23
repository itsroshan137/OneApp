import React, {useState} from 'react';
import { View,FlatList, StyleSheet, TouchableWithoutFeedback, Modal, Button } from 'react-native';
import AppText from './AppText';

import {MaterialCommunityIcons} from '@expo/vector-icons';
import PickerItem from './PickerItem';

function AppPicker({icon, items, onSelectItem, placeholder, selectedItem,   }) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>
            <TouchableWithoutFeedback onPress = {() => setModalVisible(true)}>
                <View style = {styles.container}>
                    {icon && <MaterialCommunityIcons name = {icon} size = {20} style = {styles.icon}/>}
                    <AppText style = {styles.text}>{selectedItem ? selectedItem.label : placeholder}</AppText>
                    {icon && <MaterialCommunityIcons name = "chevron-down" size = {20} />}
                </View>
            </TouchableWithoutFeedback>
            <Modal visible = {modalVisible} animationType = "slide">
                <Button title = "Close" onPress = {() => setModalVisible(false)} />
                <FlatList 
                    data = {items}
                    keyExtractor = {item => item.value.toString()}
                    renderItem = { ({item}) => 
                        <PickerItem 
                            label = {item.label}
                            onPress = {() => {
                                setModalVisible(false);
                                onSelectItem(item)
                            }}
                            
                        /> }
                />
            </Modal>
        </>
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

export default AppPicker;