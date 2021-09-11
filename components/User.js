import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {View, Text, Button, TouchableOpacity} from 'react-native';

const User = ({item}) => {
    console.log(item)
    return (
        <View>
        <Text>{item||JSON}</Text>
        </View>
    );
};
export default User;

let styles = StyleSheet.create({});