import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import User from "./User";
import {getUsers} from "../services/Api";

const Users = () => {
    let [users, setUsers] = useState([]);
    useEffect(() =>{
        getUsers().then(value => setUsers([...value])), [users]})
    return (
        <View style={styles.usersBox}>
            <FlatList data={users}
                      renderItem={({item}) => <User item={item}/>}
                      keyExtractor={item => '' + item.id}>
            </FlatList>

        </View>
    )
}
export default Users;

let styles = StyleSheet.create({
    usersBox:{
        marginTop: 50,
    alignItems:"center"

    }
});