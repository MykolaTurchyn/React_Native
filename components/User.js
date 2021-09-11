import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {View, Text, Button, TouchableOpacity} from 'react-native';

const User = ({item}) => {
    return (
        <View style={styles.userBox}>
            <Text style={styles.align}>{item.id}- {item.name}</Text>
        </View>
    );
};
export default User;

let styles = StyleSheet.create({
    userBox: {
        flex: 1,
        backgroundColor: 'silver',
        marginBottom: 3,
        width: '100%',
        height: 50
    },
    align: {
        textAlign: "center"
    }
});