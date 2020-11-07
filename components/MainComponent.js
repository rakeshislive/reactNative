import React, { Component } from 'react';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import { View, StyleSheet } from 'react-native';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES
        }
    }

    render() {
        return(
            <View style = {styles.container}>
                <Menu dishes={this.state.dishes} /> 
            </View> 
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30
    }
})