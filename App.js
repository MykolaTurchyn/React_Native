import React from 'react';
import {FlatList, StatusBar, StyleSheet} from 'react-native';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import Users from "./components/Users";

const App = () => {
    return (
        <View>
            <Users/>
        </View>
    );
};
export default App;

let styles = StyleSheet.create({});