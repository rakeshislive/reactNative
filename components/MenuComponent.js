import React, { Component } from 'react';
import { FlatList } from 'react-native'
import { ListItem } from 'react-native-elements';

export default function Menu(props) {

    const renderMenuItem = ({ item, index }) => {
        return (
            <ListItem 
                key = { index }
                title = { item.name }
                leftAvatar = {{ source: require('./images/logo.png') }}
                subtitle = { item.description }
                />
        );
    }

    return(
        <FlatList 
            data = { props.dishes }
            renderItem = { renderMenuItem }
            keyExtractor = { item => item.id.toString() }
            />
    );
}